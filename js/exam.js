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
        grammar: { label: "Dilbilgisi", hint: "Doğru seçeneği seç." },
        gender: { label: "Artikel (un / une)", hint: "İsmin cinsiyetini seç." },
        conj: { label: "Fiil çekimi", hint: "Fiili istenen kişi ve zamana göre yaz." },
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

    /* "m" / "f" from the stored article; l' nouns read the note ("Eril: un homme"). "Eril ve dişil" nouns are skipped. */
    function genderOf(w) {
        if (w.kind !== "noun") return "";
        const fr = w.fr.toLowerCase();
        if (/^(le|un)\s/.test(fr)) return "m";
        if (/^(la|une)\s/.test(fr)) return "f";
        if (/^l['’]/.test(fr)) {
            if (/^Dişil\b/.test(w.note)) return "f";
            if (/^Eril:/.test(w.note)) return "m";
        }
        return "";
    }

    const canon = (s) => String(s || "").toLowerCase().replace(/’/g, "'").replace(/\s+/g, " ").replace(/[\s.?!,;:]+$/g, "").replace(/' /g, "'").trim();
    const PERSONS = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
    /* Present twice: drawn twice as often. */
    const CONJ_TENSES = ["present", "present", "passe-compose", "imparfait", "futur-simple"];
    const PRONOUN = /^(?:je\s+|j'|tu\s+|il\/elle\s+|ils\/elles\s+|ils\s+|elles\s+|il\s+|elle\s+|on\s+|nous\s+|vous\s+)/;

    const dropPronoun = (s) => canon(s).replace(PRONOUN, "");

    const makers = {
        gender(w) {
            const g = genderOf(w);
            if (!g) return null;
            const noun = Linker.bare(w);
            return { type: "gender", wordId: w.id, prompt: noun, sub: w.tr, options: ["un", "une"], answer: g === "m" ? 0 : 1, explain: `${g === "m" ? "un" : "une"} ${noun} (${g === "m" ? "eril" : "dişil"}) · ${w.fr}` };
        },
        conj(w) {
            /* "prendre sa retraite": the possessive would have to follow the person ("vous avez pris votre retraite"). */
            const table = /\s(sa|son|ses)\s/.test(w.fr) ? null : Linker.conjugation(w);
            if (!table) return null;
            const pick = shuffle(CONJ_TENSES)[0];
            const tense = table.tenses.find((t) => t.id === pick);
            const i = Math.floor(Math.random() * 6);
            const row = tense.rows[i];
            /* "allé(e)s" accepts both "allés" and "allées". */
            const alts = Array.from(new Set([row.replace(/[()]/g, ""), row.replace(/\([^)]*\)/g, "")])).map(dropPronoun);
            return { type: "conj", wordId: w.id, prompt: `${w.fr} → ${PERSONS[i]}`, sub: `${tense.name} · ${w.tr}`, answer: row, alts, explain: `${w.fr} = ${w.tr}` };
        },
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
    /* Academy quiz rows: [prompt, options, answerIndex, explanation]. */
    const grammarQuestion = (r) => withOptions({ type: "grammar", prompt: r[0], explain: r[3] || "" }, r[1][r[2]], r[1].filter((_, i) => i !== r[2]));
    const academyRows = () => (SEED.academy || []).flatMap((u) => u.lessons.flatMap((l) => (l.quiz || []).map((r) => ({ r, level: u.level }))));

    /* Builds shuffled candidates for each type, then takes them round-robin. */
    function build(cfg) {
        const levelOk = (x) => !cfg.levels || !cfg.levels.length || cfg.levels.includes(x.level);
        const themeOk = (w) => !cfg.themes || !cfg.themes.length || cfg.themes.includes(w.theme);
        const gramOk = (w) => !cfg.grams || !cfg.grams.length || cfg.grams.some((g) => (w.gram || []).includes(g));
        let words = cfg.weak ? DB.weakWords()
            : cfg.words ? cfg.words.map(DB.word).filter(Boolean)
            : DB.words().filter((w) => (!cfg.pools || !cfg.pools.length || cfg.pools.includes(w.pool)) && themeOk(w) && gramOk(w) && levelOk(w));
        words = cfg.weak ? words : shuffle(words);

        const texts = () => {
            const fromSentences = DB.sentences().filter(levelOk);
            const fromWords = words.flatMap((w) => w.ex.map((e) => ({ fr: e.fr, tr: e.tr })));
            const linked = cfg.words || (cfg.pools && cfg.pools.length) || (cfg.themes && cfg.themes.length) || (cfg.grams && cfg.grams.length)
                ? fromWords
                : fromSentences.concat(fromWords);
            return shuffle(linked);
        };

        const queues = {};
        /* A type listed twice in cfg.types is drawn twice as often below. */
        new Set(cfg.types).forEach((t) => {
            if (makers[t]) queues[t] = words.map((w) => () => makers[t](w));
            if (t === "order") queues[t] = texts().map((s) => () => orderQuestion(s));
            if (t === "read") {
                const paras = cfg.paragraphs ? cfg.paragraphs.map(DB.paragraph).filter(Boolean) : DB.paragraphs().filter(levelOk);
                queues[t] = shuffle(paras.flatMap((p) => p.q.map((q) => () => readQuestion(p, q))));
            }
            if (t === "grammar") {
                const rows = cfg.questions || academyRows().filter((x) => levelOk(x)).map((x) => x.r);
                queues[t] = shuffle(rows).map((r) => () => grammarQuestion(r));
            }
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

    /* Written answers: accents are forgiven (and flagged by accentSlip); a noun may omit its article, but a wrong article fails. */
    const writeMatch = (q, a, same) => same(canon(a), canon(q.answer)) || same(canon(a), canon(q.bare || q.answer));
    /* Conjugation answers may include or omit the subject pronoun. */
    /* Both readings are tried: "nous nous levons" may arrive without the subject as "nous levons". */
    const conjMatch = (q, a, same) => q.alts.some((x) => same(dropPronoun(a), x) || same(canon(a), x));
    const matcher = (q) => (q.type === "conj" ? conjMatch : writeMatch);
    const accentSlip = (q, a) => (q.type === "write" || q.type === "conj") && matcher(q)(q, a, (x, y) => U.fold(x) === U.fold(y)) && !matcher(q)(q, a, (x, y) => x === y);

    function isCorrect(q, a) {
        if (a === null || a === undefined || a === "") return false;
        if (q.type === "write" || q.type === "conj") return matcher(q)(q, a, (x, y) => U.fold(x) === U.fold(y));
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
        if (ex.cfg.academy) {
            DB.recordAcademy(ex.cfg.academy, pct);
            Object.assign(result, { academy: ex.cfg.academy, back: ex.cfg.back, pass: ex.cfg.pass });
        }
        DB.addExam(result);
        DB.setLive(null);
        return result;
    }

    window.Exam = { TYPES, GRADES, gradeOf, create, isCorrect, accentSlip, answerText, givenText, finish };
})();
