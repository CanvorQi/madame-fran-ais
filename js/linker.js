/*
 * Connects free text to the word pools.
 * build() indexes every inflected form of every word; scan() splits text into tokens with the
 * longest matching word(s), so user-added words and texts link without any manual tagging.
 *
 * French specifics: nouns are stored with their article ("la maison") but indexed bare; elided
 * prefixes (l', j', qu') and hyphenated inversions (parlez-vous) split into separate tokens unless
 * the whole form is a word (aujourd'hui, grand-mère).
 *
 * Verb `forms`, when given in full: je, tu, il, nous, vous, ils, participle, then any extra forms.
 * `fut=ser` sets the future/conditional stem, `imp=ét` the imperfect stem (default: nous form).
 * A shorter list is indexed as written, with nothing generated.
 */
(function () {
    "use strict";

    const TOKEN = /\p{L}+(?:['’-]\p{L}+)*/gu;
    const ELISION = /^(qu|jusqu|lorsqu|puisqu|[cdjlmnst])['’](.+)$/i;
    const ARTICLE = /^(?:les?\s+|la\s+|une?\s+|l['’])/i;
    const VOWEL_START = /^[aeiouhéèêàâîôûœ]/i;
    const PERSONS = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
    const REFLEXIVE = ["me", "te", "se", "nous", "vous", "se"];
    let index = new Map();
    let maxLen = 1;
    let occ = {};
    let verbTable = new Map();

    const keyOf = (t) => t.toLowerCase().replace(/’/g, "'");
    const bare = (word) => (word.kind === "noun" ? word.fr.replace(ARTICLE, "") : word.fr);

    function parseForms(raw) {
        const out = { list: [], fut: "", imp: "" };
        String(raw || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean).forEach((f) => {
            if (f.startsWith("fut=")) out.fut = f.slice(4);
            else if (f.startsWith("imp=")) out.imp = f.slice(4);
            else out.list.push(f);
        });
        return out;
    }

    const imperfect = (stem, nousStem) => ["ais", "ait", "aient"].map((e) => stem + e).concat(["ions", "iez"].map((e) => (nousStem || stem) + e));
    const future = (stem) => ["ai", "as", "a", "ons", "ez", "ont", "ais", "ait", "ions", "iez", "aient"].map((e) => stem + e);

    function participle(pp) {
        if (/[éiut]$/.test(pp)) return [pp, `${pp}e`, `${pp}s`, `${pp}es`];
        if (pp.endsWith("s")) return [pp, `${pp}e`, `${pp}es`];
        return [pp];
    }

    /* { present: [6 forms], pp, all } for a full list or a regular -er/-ir verb; otherwise null. */
    function conjugate(inf, raw) {
        const f = parseForms(raw);
        if (f.list.length >= 7) {
            const present = f.list.slice(0, 6);
            const pp = f.list[6];
            const imp = f.imp || present[3].replace(/ons$/, "");
            const fut = f.fut || inf.replace(/e$/, "");
            return { present, pp, impS: imp, impN: imp, fut, all: [...present, ...participle(pp), ...imperfect(imp), ...future(f.fut || inf.replace(/e$/, "")), ...f.list.slice(7)] };
        }
        if (f.list.length) return null;
        const stem = inf.slice(0, -2);
        if (inf.endsWith("er")) {
            const soft = stem.endsWith("g") ? `${stem}e` : stem.endsWith("c") ? `${stem.slice(0, -1)}ç` : stem;
            const present = [`${stem}e`, `${stem}es`, `${stem}e`, `${soft}ons`, `${stem}ez`, `${stem}ent`];
            const pp = `${stem}é`;
            return { present, pp, impS: soft, impN: stem, fut: inf, all: [...present, ...participle(pp), ...imperfect(soft, stem), ...future(inf)] };
        }
        if (inf.endsWith("ir")) {
            const present = [`${stem}is`, `${stem}is`, `${stem}it`, `${stem}issons`, `${stem}issez`, `${stem}issent`];
            const pp = `${stem}i`;
            return { present, pp, impS: `${stem}iss`, impN: `${stem}iss`, fut: inf, all: [...present, ...participle(pp), ...imperfect(`${stem}iss`), ...future(inf)] };
        }
        return null;
    }

    /* Splits "se brosser les dents" into reflexive flag, infinitive and the words after it. */
    function verbParts(fr) {
        const m = /^(se\s+|s['’])?(\S+)(?:\s+(.*))?$/.exec(fr);
        return { reflexive: !!m[1], inf: m[2], rest: m[3] || "" };
    }

    const withPronoun = (pron, form) => (VOWEL_START.test(form) && pron.length === 2 && pron.endsWith("e") ? `${pron[0]}'${form}` : `${pron} ${form}`);

    function verbForms(word, fr) {
        const { reflexive, inf, rest } = verbParts(fr);
        const raw = word.forms || (verbTable.get(inf) || "");
        const c = conjugate(inf, raw);
        const list = c ? [inf, ...c.all] : [inf, ...parseForms(raw).list];
        const tail = (f) => (rest ? `${f} ${rest}` : f);
        const out = list.map(tail);
        if (reflexive) list.forEach((f) => ["me", "te", "se", "nous", "vous"].forEach((p) => out.push(tail(withPronoun(p, f)))));
        return out;
    }

    /* Verbs whose passé composé takes être (plus every pronominal verb). */
    const ETRE_VERBS = new Set(["aller", "venir", "arriver", "partir", "entrer", "sortir", "monter", "descendre", "naître", "mourir", "rester", "tomber", "retourner", "rentrer", "devenir", "revenir"]);
    const AUX = { avoir: ["ai", "as", "a", "avons", "avez", "ont"], être: ["suis", "es", "est", "sommes", "êtes", "sont"] };
    /* Subjunctive and imperative stems that no rule produces. */
    const SUBJ = {
        être: ["sois", "sois", "soit", "soyons", "soyez", "soient"], avoir: ["aie", "aies", "ait", "ayons", "ayez", "aient"],
        aller: ["aille", "ailles", "aille", "allions", "alliez", "aillent"], faire: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"],
        pouvoir: ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"], savoir: ["sache", "saches", "sache", "sachions", "sachiez", "sachent"],
        vouloir: ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"],
    };
    const IMPERATIVE = { être: ["sois", "soyons", "soyez"], avoir: ["aie", "ayons", "ayez"], savoir: ["sache", "sachons", "sachez"], vouloir: ["veuille", "veuillons", "veuillez"] };
    const IMP_PRONOUN = ["toi", "nous", "vous"];

    /* Tables for the word page: one entry per tense, six persons each (imperative: three).
       Verbal phrases ("avoir faim", "se brosser les dents") conjugate their verb and keep the rest. */
    function conjugation(word) {
        if (word.kind !== "verb") return null;
        const { reflexive, inf, rest } = verbParts(word.fr.toLowerCase().trim());
        if (!inf) return null;
        const c = conjugate(inf, word.forms || verbTable.get(inf) || "");
        if (!c) return null;
        const tail = (f) => (rest ? `${f} ${rest}` : f);
        const row = (forms) => forms.map((form, i) => withPronoun(PERSONS[i], tail(reflexive ? withPronoun(REFLEXIVE[i], form) : form)));
        const ends = (stem, list) => list.map((e) => stem + e);

        const etre = reflexive || ETRE_VERBS.has(inf);
        /* "elle s'est brossé les dents": a direct object after the verb blocks agreement. */
        const agree = etre && !/^(les?|la|l'|compte)\b/.test(rest);
        const ppOf = (i) => (!agree ? c.pp : i < 3 ? `${c.pp}(e)` : c.pp.endsWith("s") ? `${c.pp}(es)` : `${c.pp}(e)s`);
        const passe = AUX[etre ? "être" : "avoir"].map((aux, i) => `${aux} ${ppOf(i)}`);

        const sub = SUBJ[inf] || (() => {
            const s = c.present[5].replace(/ent$/, "");
            return [`${s}e`, `${s}es`, `${s}e`, `${c.impN}ions`, `${c.impN}iez`, `${s}ent`];
        })();
        const subRows = row(sub).map((r) => (/^(il|ils)\b/.test(r) ? `qu'${r}` : `que ${r}`));

        let imper = IMPERATIVE[inf] || [c.present[1].replace(/(?<=e)s$|^(va)s$/, "$1"), c.present[3], c.present[4]];
        imper = imper.map((f, i) => tail(reflexive ? `${f}-${IMP_PRONOUN[i]}` : f));

        return {
            pp: c.pp, aux: etre ? "être" : "avoir",
            tenses: [
                { id: "present", name: "Présent", rows: row(c.present) },
                { id: "passe-compose", name: "Passé composé", rows: row(passe) },
                { id: "imparfait", name: "Imparfait", rows: row([...ends(c.impS, ["ais", "ais", "ait"]), ...ends(c.impN, ["ions", "iez"]), `${c.impS}aient`]) },
                { id: "futur-simple", name: "Futur simple", rows: row(ends(c.fut, ["ai", "as", "a", "ons", "ez", "ont"])) },
                { id: "conditionnel", name: "Conditionnel", rows: row(ends(c.fut, ["ais", "ais", "ait", "ions", "iez", "aient"])) },
                { id: "subjonctif", name: "Subjonctif", rows: subRows },
                { id: "imperative", name: "Impératif", rows: imper },
            ],
        };
    }

    function adjForms(w) {
        if (w.endsWith("e")) return [`${w}s`];
        if (w.endsWith("eux")) return [`${w.slice(0, -1)}se`, `${w.slice(0, -1)}ses`];
        if (/[sx]$/.test(w)) return [`${w}e`, `${w}es`];
        const pair = (fem, pl) => [fem, `${fem}s`, pl];
        if (w.endsWith("if")) return pair(`${w.slice(0, -1)}ve`, `${w}s`);
        if (/(el|en|on)$/.test(w)) return pair(`${w}${w[w.length - 1]}e`, `${w}s`);
        if (w.endsWith("er")) return pair(`${w.slice(0, -2)}ère`, `${w}s`);
        if (w.endsWith("al")) return pair(`${w}e`, `${w.slice(0, -2)}aux`);
        return pair(`${w}e`, `${w}s`);
    }

    function nounPlural(w) {
        const pluralOf = (x) => {
            if (/[sxz]$/.test(x)) return x;
            if (/(au|eu)$/.test(x)) return `${x}x`;
            if (x.endsWith("al")) return `${x.slice(0, -2)}aux`;
            return `${x}s`;
        };
        const parts = w.split(/\s+/);
        /* "salle de bain" pluralises its head; "petit four" would need explicit forms. */
        const at = parts.findIndex((p) => ["de", "à", "au", "en"].includes(p));
        const head = at > 0 ? at - 1 : parts.length - 1;
        return parts.map((p, i) => (i === head ? pluralOf(p) : p)).join(" ");
    }

    /* All lowercase surface forms of a word. Split pairs ("ne ... pas") are never indexed. */
    function formsOf(word) {
        const fr = word.fr.toLowerCase().trim();
        if (!fr || fr.includes("...")) return [];
        if (word.kind === "verb") return Array.from(new Set(verbForms(word, fr)));
        const explicit = parseForms(word.forms).list;
        const base = bare(word).toLowerCase();
        const set = new Set([base, ...explicit]);
        if (word.kind === "noun" && !explicit.length) set.add(nounPlural(base));
        if (word.kind === "adj" && !explicit.length && !/\s/.test(base)) adjForms(base).forEach((f) => set.add(f));
        return Array.from(set);
    }

    /* A raw token stays whole when it is a known word; otherwise it splits at elisions and hyphens. */
    function pieces(text, at, out) {
        if (index.has(keyOf(text))) { out.push({ t: text, i: at, e: at + text.length }); return; }
        const elided = ELISION.exec(text);
        if (elided) {
            const len = elided[1].length + 1;
            out.push({ t: text.slice(0, len), i: at, e: at + len });
            pieces(text.slice(len), at + len, out);
            return;
        }
        const dash = text.indexOf("-");
        if (dash > 0) {
            pieces(text.slice(0, dash), at, out);
            pieces(text.slice(dash + 1), at + dash + 1, out);
            return;
        }
        /* Euphonic -t- in "a-t-il" is not a word. */
        if (keyOf(text) !== "t") out.push({ t: text, i: at, e: at + text.length });
    }

    function lookup(tokens, i, text) {
        let found = null;
        for (let n = 0; n < maxLen && i + n < tokens.length; n++) {
            if (n > 0 && /[^\s-]/.test(text.slice(tokens[i + n - 1].e, tokens[i + n].i))) break;
            const phrase = keyOf(text.slice(tokens[i].i, tokens[i + n].e)).replace(/\s+/g, " ");
            const ids = index.get(phrase);
            if (ids) found = { n: n + 1, ids };
        }
        return found;
    }

    /* Returns segments: { text } for gaps, { text, ids } for tokens (ids empty when unknown). */
    function scan(text) {
        const src = String(text || "");
        const tokens = [];
        let m;
        TOKEN.lastIndex = 0;
        while ((m = TOKEN.exec(src))) pieces(m[0], m.index, tokens);
        const out = [];
        let pos = 0;
        for (let i = 0; i < tokens.length;) {
            const hit = lookup(tokens, i, src);
            const n = hit ? hit.n : 1;
            const start = tokens[i].i;
            const end = tokens[i + n - 1].e;
            if (start > pos) out.push({ text: src.slice(pos, start) });
            out.push({ text: src.slice(start, end), ids: hit ? hit.ids : [] });
            pos = end;
            i += n;
        }
        if (pos < src.length) out.push({ text: src.slice(pos) });
        return out;
    }

    /* Renders French text with every word tappable; `hl` highlights one word id. */
    function linkify(text, hl) {
        return scan(text).map((s) => {
            if (!s.ids) return U.esc(s.text);
            const cls = s.ids.length ? "lw" : "uw";
            const mark = hl && s.ids.includes(hl) ? " hl" : "";
            return `<span class="${cls}${mark}" role="button" tabindex="0" data-w="${U.esc(s.ids.join(","))}">${U.esc(s.text)}</span>`;
        }).join("");
    }

    /* Unique word ids found in a text, in reading order. */
    function wordsIn(text) {
        const seen = new Set();
        scan(text).forEach((s) => (s.ids || []).forEach((id) => seen.add(id)));
        return Array.from(seen);
    }

    /* Splits a text around the first use of `word` in its base form, for gap questions. */
    function findBase(text, word) {
        const base = keyOf(bare(word));
        const segs = scan(text);
        const at = segs.findIndex((s) => s.ids && s.ids.includes(word.id) && keyOf(s.text) === base);
        if (at < 0) return null;
        return {
            before: segs.slice(0, at).map((s) => s.text).join(""),
            surface: segs[at].text,
            after: segs.slice(at + 1).map((s) => s.text).join(""),
        };
    }

    function build(words, sentences, paragraphs) {
        index = new Map();
        maxLen = 1;
        verbTable = new Map();
        words.forEach((w) => { if (w.kind === "verb" && w.forms && !/\s/.test(w.fr)) verbTable.set(w.fr.toLowerCase(), w.forms); });
        words.forEach((w) => formsOf(w).forEach((form) => {
            const f = keyOf(form);
            const list = index.get(f);
            if (!list) index.set(f, [w.id]);
            else if (!list.includes(w.id)) list.push(w.id);
            maxLen = Math.max(maxLen, f.split(/[\s'-]+/).filter(Boolean).length);
        }));
        occ = {};
        const add = (id, key, val) => {
            const o = occ[id] || (occ[id] = { s: [], p: [] });
            o[key].push(val);
        };
        sentences.forEach((s) => wordsIn(s.fr).forEach((id) => add(id, "s", s.id)));
        paragraphs.forEach((p) => wordsIn(p.fr).forEach((id) => add(id, "p", p.id)));
    }

    const occurrences = (id) => occ[id] || { s: [], p: [] };

    window.Linker = { build, scan, linkify, wordsIn, findBase, formsOf, occurrences, bare, conjugation, TOKEN };
})();
