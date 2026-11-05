/*
 * Exam engine. Questions are generated from the live data, so user-added words, sentences,
 * paragraphs and questions appear automatically. A question is plain JSON (resumable, storable).
 */
(function () {
    "use strict";

    const { shuffle } = U;
    const TYPES = {
        mean: { label: "Anlam (FR → TR)", hint: "Kelimenin Türkçe anlamını seç." },
        rmean: { label: "Anlam (TR → FR)", hint: "Fransızca karşılığını seç." },
        gap: { label: "Texte à trous", hint: "Boşluğa gelecek kelimeyi seç." },
        write: { label: "Yazım", hint: "Fransızcasını yaz." },
        order: { label: "Cümle kurma", hint: "Kelimeleri doğru sıraya diz." },
        read: { label: "Okuma", hint: "Paragrafa göre cevapla." },
        custom: { label: "Benim sorularım", hint: "Soruyu cevapla." },
    };

    const GRADES = [
        { min: 85, name: "Très bien", tr: "Pekiyi" },
        { min: 70, name: "Bien", tr: "İyi" },
        { min: 50, name: "Passable", tr: "Geçer" },
        { min: 0, name: "Insuffisant", tr: "Yetersiz" },
    ];
    const gradeOf = (pct) => GRADES.find((g) => pct >= g.min);

    /* Picks 3 wrong answers, preferring the same pool, never repeating the shown text. */
    function distractors(word, get) {
        const seen = new Set([get(word).toLowerCase()]);
        const same = shuffle(DB.wordsIn(word.pool).filter((w) => w.kind === word.kind));
        const out = [];
        same.concat(shuffle(DB.words())).forEach((w) => {
            const v = get(w);
            if (out.length < 3 && !seen.has(v.toLowerCase())) { seen.add(v.toLowerCase()); out.push(v); }
        });
        return out;
    }

    function withOptions(q, correct, wrong) {
        const options = shuffle([correct].concat(wrong));
        return Object.assign(q, { options, answer: options.indexOf(correct) });
    }

    const makers = {
        mean(w) {
            const wrong = distractors(w, (x) => x.tr);
            if (wrong.length < 3) return null;
            return withOptions({ type: "mean", wordId: w.id, prompt: w.fr, speak: w.fr, explain: `${w.fr} = ${w.tr}` }, w.tr, wrong);
        },
        rmean(w) {
            const wrong = distractors(w, (x) => x.fr);
            if (wrong.length < 3) return null;
            return withOptions({ type: "rmean", wordId: w.id, prompt: w.tr, explain: `${w.tr} = ${w.fr}` }, w.fr, wrong);
        },
        gap(w) {
            const texts = w.ex.concat(Linker.occurrences(w.id).s.map(DB.sentence).filter(Boolean));
            for (const t of shuffle(texts)) {
                const hit = Linker.findBase(t.fr, w);
                if (!hit || !t.tr) continue;
                /* The article stays in the sentence, so options are the bare noun. */
                const wrong = distractors(w, Linker.bare);
                if (wrong.length < 3) return null;
                return withOptions({ type: "gap", wordId: w.id, before: hit.before, after: hit.after, sub: t.tr, explain: t.fr }, Linker.bare(w), wrong);
            }
            return null;
        },
        write(w) {
            if (w.fr.includes("...")) return null;
            const bare = Linker.bare(w);
            return { type: "write", wordId: w.id, prompt: w.tr, sub: `İlk harf: ${bare[0]} · ${bare.replace(/[\s'’-]/g, "").length} harf`, answer: w.fr, bare, explain: `${w.tr} = ${w.fr}` };
        },
    };

    function orderQuestion(s) {
        const clean = s.fr.replace(/[.?!]+$/, "").trim();
        const tokens = clean.split(/\s+/);
        /* French spaces before ? ! ; : would become punctuation-only tiles. */
        if (tokens.length < 4 || tokens.length > 11 || !s.tr || tokens.some((t) => /^\W+$/u.test(t) && !/\p{L}/u.test(t))) return null;
        let options = shuffle(tokens);
        if (options.join(" ") === clean) options = options.slice().reverse();
        return { type: "order", prompt: s.tr, options, answer: clean, explain: s.fr, speak: s.fr };
    }

    const readQuestion = (p, q) => ({ type: "read", paraId: p.id, prompt: q.q, options: q.o, answer: q.a, explain: `Paragraf: ${p.title}` });
    const customQuestion = (q) => ({ type: "custom", prompt: q.q, options: q.o, answer: q.a, explain: q.explain || "" });

    /* Builds shuffled candidates for each type, then takes them round-robin. */
    function build(cfg) {
        const levelOk = (x) => !cfg.levels || !cfg.levels.length || cfg.levels.includes(x.level);
        let words = cfg.weak ? DB.weakWords() : DB.words().filter((w) => (!cfg.pools || !cfg.pools.length || cfg.pools.includes(w.pool)) && levelOk(w));
        words = cfg.weak ? words : shuffle(words);

        const texts = () => {
            const fromSentences = DB.sentences().filter(levelOk);
            const fromWords = words.flatMap((w) => w.ex.map((e) => ({ fr: e.fr, tr: e.tr })));
            const linked = cfg.pools && cfg.pools.length
                ? fromWords
                : fromSentences.concat(fromWords);
            return shuffle(linked);
        };

        const queues = {};
        cfg.types.forEach((t) => {
            if (makers[t]) queues[t] = words.map((w) => () => makers[t](w));
            if (t === "order") queues[t] = texts().map((s) => () => orderQuestion(s));
            if (t === "read") queues[t] = shuffle(DB.paragraphs().filter(levelOk).flatMap((p) => p.q.map((q) => () => readQuestion(p, q))));
            if (t === "custom") {
                queues[t] = shuffle(DB.questions().filter((q) => levelOk(q) && (!q.pool || !cfg.pools || !cfg.pools.length || cfg.pools.includes(q.pool))).map((q) => () => customQuestion(q)));
            }
        });

        const out = [];
        const used = new Set();
        const order = cfg.types.filter((t) => queues[t]);
        let active = order.slice();
        while (out.length < cfg.count && active.length) {
            active = active.filter((t) => {
                if (out.length >= cfg.count) return true;
                while (queues[t].length) {
                    const q = queues[t].shift()();
                    if (!q) continue;
                    const key = q.wordId || q.prompt;
                    if (used.has(key)) continue;
                    used.add(key);
                    out.push(q);
                    return true;
                }
                return false;
            });
        }
        return shuffle(out);
    }

    const canon = (s) => String(s || "").toLowerCase().replace(/’/g, "'").replace(/\s+/g, " ").replace(/[\s.?!,;:]+$/g, "").replace(/' /g, "'").trim();

    /* Written answers: accents are forgiven (and flagged by accentSlip); a noun may omit its article, but a wrong article fails. */
    const writeMatch = (q, a, same) => same(canon(a), canon(q.answer)) || same(canon(a), canon(q.bare || q.answer));
    const accentSlip = (q, a) => q.type === "write" && writeMatch(q, a, (x, y) => U.fold(x) === U.fold(y)) && !writeMatch(q, a, (x, y) => x === y);

    function isCorrect(q, a) {
        if (a === null || a === undefined || a === "") return false;
        if (q.type === "write") return writeMatch(q, a, (x, y) => U.fold(x) === U.fold(y));
        if (q.type === "order") return canon(Array.isArray(a) ? a.join(" ") : a) === canon(q.answer);
        return a === q.answer;
    }

    const answerText = (q) => (typeof q.answer === "number" ? q.options[q.answer] : q.answer);
    function givenText(q, a) {
        if (a === null || a === undefined || a === "" || (Array.isArray(a) && !a.length)) return "Boş";
        if (Array.isArray(a)) return a.join(" ");
        return typeof a === "number" ? q.options[a] : a;
    }

    function create(cfg) {
        const questions = build(cfg);
        if (!questions.length) return null;
        const now = Date.now();
        return {
            cfg, questions, answers: questions.map(() => null), locked: questions.map(() => false), idx: 0, startedAt: now,
            deadline: cfg.minutes ? now + cfg.minutes * 60000 : null,
        };
    }

    /* Grades a finished exam, updates word stats and stores the result. */
    function finish(ex) {
        const items = ex.questions.map((q, i) => {
            const ok = isCorrect(q, ex.answers[i]);
            if (q.wordId) DB.recordAnswer(q.wordId, ok);
            return { q, a: ex.answers[i], ok };
        });
        DB.flushStats();
        const correct = items.filter((x) => x.ok).length;
        const pct = Math.round((correct / items.length) * 100);
        const result = { id: U.uid(), title: ex.cfg.title, date: Date.now(), total: items.length, correct, pct, grade: gradeOf(pct).name, secs: Math.round((Date.now() - ex.startedAt) / 1000), items };
        DB.addExam(result);
        DB.setLive(null);
        return result;
    }

    window.Exam = { TYPES, GRADES, gradeOf, create, isCorrect, accentSlip, answerText, givenText, finish };
})();
