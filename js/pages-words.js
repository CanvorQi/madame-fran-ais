/* Views: word pools, pool lists, word detail and the tap-a-word sheet. */
(function () {
    "use strict";

    const { esc, icon } = U;
    window.Pages = window.Pages || {};
    const PAGE_SIZE = 120;

    const speakBtn = (text, label) => `<button class="icon-btn" type="button" data-speak="${esc(text)}" aria-label="${esc(label || "Dinle")}">${icon("sound")}</button>`;

    function wordRow(w) {
        return `<div class="word-row">
            <a class="word-link" href="#/kelime/${encodeURIComponent(w.id)}"><b>${esc(w.fr)}</b><span>${esc(w.tr)}</span></a>
            ${DB.isKnown(w.id) ? `<span class="tick" title="Öğrenildi">${icon("check")}</span>` : ""}
            <span class="badge">${esc(w.level)}</span>
            ${speakBtn(w.fr, `${w.fr} kelimesini dinle`)}
        </div>`;
    }

    function plateOf(p, words, href) {
        const known = words.filter((w) => DB.isKnown(w.id)).length;
        const pct = words.length ? Math.round((known / words.length) * 100) : 0;
        return `<a class="plate" href="${href}"><div class="plate-in">
            <div class="plate-top"><span class="plate-name" lang="${p.title ? "fr" : "tr"}">${esc(p.title || p.name)}</span><span class="plate-code">${esc(p.code || "")}</span></div>
            <div class="plate-sub">${esc(p.name)} · ${words.length} kelime</div>
            <div class="bar"><span style="width:${pct}%"></span></div>
        </div></a>`;
    }
    const plate = (p) => plateOf(p, DB.wordsIn(p.id), `#/havuz/${encodeURIComponent(p.id)}`);
    const themePlate = (t) => plateOf(t, DB.wordsInTheme(t.id), `#/tema/${encodeURIComponent(t.id)}`);
    const gramPlate = (g) => plateOf(g, DB.wordsInGram(g.id), `#/dilbilgisi/${encodeURIComponent(g.id)}`);

    /* Rows under one heading per group; expects `words` already ordered by group. */
    function groupedRows(words, groupOf) {
        const groups = new Map();
        words.forEach((w) => {
            const g = groupOf(w);
            if (!groups.has(g)) groups.set(g, []);
            groups.get(g).push(w);
        });
        if (groups.size < 2) return `<div>${words.map(wordRow).join("")}</div>`;
        return Array.from(groups, ([g, list]) => `<h2 class="section-title">${esc(g)}</h2><div>${list.map(wordRow).join("")}</div>`).join("");
    }

    const rankBy = (ids, idOf) => (a, b) => {
        const rank = (w) => { const i = ids.indexOf(idOf(w)); return i < 0 ? ids.length : i; };
        return rank(a) - rank(b);
    };

    const search = (list, q) => {
        const n = U.norm(q);
        return !n ? list : list.filter((w) => U.norm(w.fr).includes(n) || U.norm(w.tr).includes(n));
    };

    Pages.plate = plate;
    Pages.wordRow = wordRow;
    Pages.speakBtn = speakBtn;

    /* Kelimeler, Cümleler and Paragraflar share one nav entry and switch with these tabs. */
    Pages.wordTabs = (active) => `<div class="tabs">
        <a class="tab${active === "w" ? " active" : ""}" href="#/kelimeler">Kelimeler</a>
        <a class="tab${active === "s" ? " active" : ""}" href="#/cumleler">Cümleler</a>
        <a class="tab${active === "p" ? " active" : ""}" href="#/paragraflar">Paragraflar</a></div>`;

    Pages.pools = function () {
        return {
            nav: "words", title: "Kelimeler",
            html: `<div class="page-head"><h1>Kelimeler</h1><p>Kelimeler temaya ve türe göre ayrıldı. Bir kelimeye dokununca örnek cümlelerini ve geçtiği metinleri görürsün.</p></div>
            ${Pages.wordTabs("w")}
            <div class="toolbar">
                <div class="search">${icon("search")}<input id="q" type="search" placeholder="Tüm havuzlarda ara (Fransızca ya da Türkçe)" aria-label="Kelime ara"></div>
                <a class="btn ghost" href="#/ekle/havuz">${icon("plus")} Yeni havuz</a>
            </div>
            <div id="results"></div>
            <div id="grid">
                <h2 class="section-title">Temalar</h2>
                <div class="plate-grid">${DB.themes().filter((t) => DB.wordsInTheme(t.id).length).map(themePlate).join("")}</div>
                <h2 class="section-title">Dilbilgisi</h2>
                <div class="plate-grid">${DB.grammar().filter((g) => !g.cat && DB.wordsInGram(g.id).length).map(gramPlate).join("")}</div>
                <h2 class="section-title">Fiil Zamanları</h2>
                <div class="plate-grid">${DB.grammar().filter((g) => g.cat === "tense" && DB.wordsInGram(g.id).length).map(gramPlate).join("")}</div>
                <h2 class="section-title">Türe göre havuzlar</h2>
                <div class="plate-grid">${DB.pools().map(plate).join("")}</div>
            </div>`,
            after() {
                const q = document.getElementById("q");
                const results = document.getElementById("results");
                const grid = document.getElementById("grid");
                q.addEventListener("input", () => {
                    const has = q.value.trim().length > 0;
                    grid.hidden = has;
                    const found = has ? search(DB.words(), q.value) : [];
                    results.innerHTML = !has ? "" : found.length
                        ? `<div>${found.slice(0, PAGE_SIZE).map(wordRow).join("")}</div>`
                        : `<div class="card empty">Bulunamadı. <a href="#/ekle/kelime?fr=${encodeURIComponent(q.value.trim())}">“${esc(q.value.trim())}” kelimesini ekle</a></div>`;
                });
            },
        };
    };

    /* Shared list page for pools and themes: search, status and level filters over grouped rows. */
    function listPage(o) {
        const state = { q: "", level: "", status: "" };
        const levels = DB.LEVELS.filter((l) => o.source().some((w) => w.level === l));
        return {
            nav: "words", title: o.title,
            html: `<div class="page-head">
                <div class="crumbs"><a href="#/kelimeler">Kelimeler</a> › ${esc(o.title)}</div>
                <h1>${esc(o.title)}</h1>
                ${o.intro ? `<p>${esc(o.intro)}</p>` : ""}
                <div class="row-actions">
                    <a class="btn" href="#/ekle/kelime?${o.addQuery}">${icon("plus")} Kelime ekle</a>
                    <button class="btn navy" type="button" id="poolExam">${icon("exam")} ${esc(o.examLabel)}</button>
                    ${o.extraAction || ""}
                </div>
            </div>
            ${o.top || ""}
            <div class="toolbar">
                <div class="search">${icon("search")}<input id="q" type="search" placeholder="${esc(o.searchLabel)}" aria-label="${esc(o.searchLabel)}"></div>
                <select class="input" id="status" style="width:auto" aria-label="Durum">
                    <option value="">Tümü</option><option value="known">Öğrendiklerim</option><option value="new">Öğreneceklerim</option>
                </select>
            </div>
            <div class="chips" id="levels" style="margin-bottom:14px">
                <button class="chip on" type="button" data-l="">Tüm seviyeler</button>${levels.map((l) => `<button class="chip" type="button" data-l="${l}">${l}</button>`).join("")}
            </div>
            <div id="list"></div>
            ${o.bottom || ""}
            ${pager(o.siblings)}`,
            after() {
                const list = document.getElementById("list");
                let limit = PAGE_SIZE;
                const draw = () => {
                    let words = search(o.source(), state.q);
                    if (state.level) words = words.filter((w) => w.level === state.level);
                    if (state.status) words = words.filter((w) => DB.isKnown(w.id) === (state.status === "known"));
                    list.innerHTML = words.length
                        ? `${groupedRows(words.slice(0, limit), o.groupOf)}${words.length > limit ? `<div class="row-actions end"><button class="btn ghost" type="button" id="more">Daha fazla göster</button></div>` : ""}`
                        : `<div class="card empty">Bu görünümde kelime yok.</div>`;
                };
                draw();
                list.addEventListener("click", (e) => { if (e.target.id === "more") { limit += PAGE_SIZE; draw(); } });
                document.getElementById("q").addEventListener("input", (e) => { state.q = e.target.value; limit = PAGE_SIZE; draw(); });
                document.getElementById("status").addEventListener("change", (e) => { state.status = e.target.value; draw(); });
                document.getElementById("levels").addEventListener("click", (e) => {
                    const b = e.target.closest("[data-l]");
                    if (!b) return;
                    state.level = b.dataset.l;
                    e.currentTarget.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === b));
                    draw();
                });
                document.getElementById("poolExam").addEventListener("click", () => Pages.startExam(Object.assign({
                    title: `${o.title} sınavı`, levels: [], count: 10, instant: true, minutes: 0,
                }, o.exam)));
            },
        };
    }

    /* Previous / next pages among the plates of one Kelimeler section. */
    function siblingsOf(list, id, hrefOf) {
        const i = list.findIndex((x) => x.id === id);
        const at = (j) => (i >= 0 && list[j] ? { href: hrefOf(list[j].id), name: list[j].name } : null);
        return { prev: at(i - 1), next: at(i + 1) };
    }

    function pager(s) {
        if (!s || (!s.prev && !s.next)) return "";
        return `<nav class="pager" aria-label="Önceki ve sonraki başlık">
            ${s.prev ? `<a class="btn ghost prev" href="${esc(s.prev.href)}">${icon("arrow")}<span><small>Önceki</small>${esc(s.prev.name)}</span></a>` : "<span></span>"}
            ${s.next ? `<a class="btn ghost next" href="${esc(s.next.href)}"><span><small>Sonraki</small>${esc(s.next.name)}</span>${icon("arrow")}</a>` : ""}
        </nav>`;
    }

    function rulesHtml(rules) {
        if (!rules || !rules.length) return "";
        return `<h2 class="section-title">Kurallar</h2>${rules.map((r) => `<section class="card rule">
            <h3>${esc(r.h)}</h3>${r.p ? `<p>${esc(r.p)}</p>` : ""}
            ${r.table ? `<div class="conj" lang="fr">${r.table.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
            ${(r.ex || []).map(([fr, tr]) => `<div class="rule-ex"><p class="fr" lang="fr">${Linker.linkify(fr)}</p><p class="hint">${esc(tr)}</p></div>`).join("")}
        </section>`).join("")}<h2 class="section-title">Kelimeler</h2>`;
    }

    Pages.pager = pager;
    Pages.rulesHtml = rulesHtml;

    function textsHtml(sentences, paragraphs) {
        return (sentences.length ? `<h2 class="section-title">Örnek cümleler</h2>${sentences.map((s) => Pages.textCard(s)).join("")}` : "")
            + (paragraphs.length ? `<h2 class="section-title">Okuma parçaları</h2>${paragraphs.map(Pages.paragraphRow).join("")}` : "");
    }

    Pages.pool = function (id) {
        const pool = DB.pool(id);
        if (!pool) return null;
        const themeIds = DB.themes().map((t) => t.id);
        const themed = (w) => (DB.theme(w.theme) ? DB.theme(w.theme).name : "Diğer");
        return listPage({
            title: pool.name, addQuery: `pool=${encodeURIComponent(id)}`, searchLabel: "Bu havuzda ara", examLabel: "Bu havuzdan sınav",
            extraAction: pool.seed ? "" : `<a class="btn ghost" href="#/ekle/havuz/${encodeURIComponent(id)}">${icon("edit")} Düzenle</a>`,
            source: () => DB.wordsIn(id).slice().sort(rankBy(themeIds, (w) => w.theme)),
            groupOf: themed,
            siblings: siblingsOf(DB.pools(), id, (x) => `#/havuz/${encodeURIComponent(x)}`),
            exam: { pools: [id], types: ["mean", "rmean", "gap", "write", "custom"] },
        });
    };

    Pages.theme = function (id) {
        const theme = DB.theme(id);
        if (!theme) return null;
        const poolIds = DB.pools().map((p) => p.id);
        return listPage({
            title: theme.name, addQuery: `theme=${encodeURIComponent(id)}`, searchLabel: "Bu temada ara", examLabel: "Bu temadan sınav",
            source: () => DB.wordsInTheme(id).slice().sort(rankBy(poolIds, (w) => w.pool)),
            groupOf: (w) => (DB.pool(w.pool) ? DB.pool(w.pool).name : "Diğer"),
            bottom: textsHtml(DB.sentences().filter((s) => s.topic === theme.name), DB.paragraphs().filter((p) => p.topic === theme.name)),
            siblings: siblingsOf(DB.themes().filter((t) => DB.wordsInTheme(t.id).length), id, (x) => `#/tema/${encodeURIComponent(x)}`),
            exam: { themes: [id], pools: [], types: ["mean", "rmean", "gap", "write"] },
        });
    };

    Pages.grammar = function (id) {
        const g = DB.gram(id);
        if (!g) return null;
        const poolIds = DB.pools().map((p) => p.id);
        return listPage({
            title: g.name, intro: g.info, addQuery: "", searchLabel: "Bu grupta ara", examLabel: "Bu gruptan sınav",
            top: rulesHtml(g.rules),
            bottom: textsHtml(DB.sentences().filter((s) => (s.gram || []).includes(id)), DB.paragraphs().filter((p) => (p.gram || []).includes(id))),
            siblings: siblingsOf(DB.grammar().filter((x) => DB.wordsInGram(x.id).length), id, (x) => `#/dilbilgisi/${encodeURIComponent(x)}`),
            source: () => DB.wordsInGram(id).slice().sort(rankBy(poolIds, (w) => w.pool)),
            groupOf: (w) => (DB.pool(w.pool) ? DB.pool(w.pool).name : "Diğer"),
            exam: { grams: [id], pools: [], types: ["mean", "rmean", "gap", "write"] },
        });
    };

    const exampleCard = (ex, id) => Pages.textCard({ fr: ex.fr, tr: ex.tr }, { hl: id });

    Pages.word = function (id) {
        const w = DB.word(id);
        if (!w) return null;
        const pool = DB.pool(w.pool);
        const theme = DB.theme(w.theme);
        const occ = Linker.occurrences(id);
        const seen = new Set(w.ex.map((e) => e.fr));
        const sentences = occ.s.map(DB.sentence).filter((s) => s && !seen.has(s.fr));
        const paragraphs = occ.p.map(DB.paragraph).filter(Boolean);
        const conj = Linker.conjugation(w);
        const base = Linker.bare(w).toLowerCase();
        const others = Linker.formsOf(w).filter((f) => f !== base && f !== w.fr.toLowerCase());
        return {
            nav: "words", title: w.fr,
            html: `<div class="page-head word-head">
                <div class="crumbs"><a href="#/kelimeler">Kelimeler</a> › ${pool ? `<a href="#/havuz/${encodeURIComponent(pool.id)}">${esc(pool.name)}</a>` : "Havuz yok"}</div>
                <h1 lang="fr">${esc(w.fr)}</h1>
                <div class="tr">${esc(w.tr)}</div>
                <div class="word-meta">
                    <span class="badge red">${esc(w.level)}</span><span class="badge">${esc(DB.KINDS[w.kind] || "Diğer")}</span>
                    ${theme ? `<a class="badge" href="#/tema/${encodeURIComponent(theme.id)}">${esc(theme.name)}</a>` : ""}
                    ${(w.gram || []).map(DB.gram).filter(Boolean).map((g) => `<a class="badge" href="#/dilbilgisi/${encodeURIComponent(g.id)}">${esc(g.name)}</a>`).join("")}
                    ${speakBtn(w.fr, "Dinle")}
                    <button class="btn sm ${DB.isKnown(id) ? "navy" : "ghost"}" type="button" id="known">${icon("check")} ${DB.isKnown(id) ? "Öğrendim" : "Öğrendim olarak işaretle"}</button>
                </div>
                ${w.note ? `<div class="note">${esc(w.note)}</div>` : ""}
                ${!conj && others.length ? `<p class="hint" lang="fr">Biçimler: ${esc(others.slice(0, 14).join(", "))}</p>` : ""}
            </div>
            ${conj ? `<h2 class="section-title">Çekimler</h2>
                <p class="hint">Geçmiş ortaç (participe passé): <span lang="fr">${esc(conj.pp)}</span> · Yardımcı fiil: <span lang="fr">${esc(conj.aux)}</span></p>
                <div class="conj-grid">${conj.tenses.map((t) => {
                    const g = DB.gram(t.id);
                    return `<section class="conj-card"><h3>${g ? `<a href="#/dilbilgisi/${encodeURIComponent(g.id)}">${esc(t.name)}</a>` : esc(t.name)}${g ? ` <small>${esc(g.name)}</small>` : ""}</h3>
                        <div class="conj" lang="fr">${t.rows.map((r) => `<span>${esc(r)}</span>`).join("")}</div></section>`;
                }).join("")}</div>` : ""}
            <h2 class="section-title">Örnek cümleler</h2>
            ${w.ex.length ? w.ex.map((e) => exampleCard(e, id)).join("") : `<div class="card empty">Örnek cümle yok. <a href="#/ekle/kelime/${encodeURIComponent(id)}">Ekle</a></div>`}
            ${sentences.length ? `<h2 class="section-title">Geçtiği cümleler</h2>${sentences.slice(0, 12).map((s) => Pages.textCard(s, { hl: id })).join("")}` : ""}
            ${paragraphs.length ? `<h2 class="section-title">Geçtiği paragraflar</h2>${paragraphs.map(Pages.paragraphRow).join("")}` : ""}
            <div class="row-actions" style="margin-top:26px">
                <a class="btn ghost" href="#/ekle/kelime/${encodeURIComponent(id)}">${icon("edit")} Düzenle</a>
                <button class="btn danger-text" type="button" id="del">${icon("trash")} Sil</button>
            </div>`,
            after() {
                document.getElementById("known").addEventListener("click", (e) => {
                    const now = !DB.isKnown(id);
                    DB.setKnown(id, now);
                    e.currentTarget.className = `btn sm ${now ? "navy" : "ghost"}`;
                    e.currentTarget.innerHTML = `${icon("check")} ${now ? "Öğrendim" : "Öğrendim olarak işaretle"}`;
                    Pages.refreshSidebar();
                });
                document.getElementById("del").addEventListener("click", async () => {
                    if (!(await U.confirmDialog(`"${w.fr}" silinsin mi?`, "Sil", true))) return;
                    DB.remove("word", id);
                    U.toast("Kelime silindi");
                    location.hash = pool ? `#/havuz/${pool.id}` : "#/kelimeler";
                });
            },
        };
    };

    /* Sheet shown when a word is tapped inside any text. */
    function sheetWord(w) {
        const pool = DB.pool(w.pool);
        return `<div class="sheet-word">
            <h2 lang="fr">${esc(w.fr)}</h2>
            <div class="tr">${esc(w.tr)}</div>
            <div class="word-meta"><span class="badge red">${esc(w.level)}</span><span class="badge">${esc(pool ? pool.name : "")}</span></div>
            ${w.note ? `<div class="note">${esc(w.note)}</div>` : ""}
            ${w.ex[0] ? `<p class="fr small" style="margin-top:10px" lang="fr">${esc(w.ex[0].fr)}</p>` : ""}
            <div class="row-actions">
                <button class="btn sm ghost" type="button" data-speak="${esc(w.fr)}">${icon("sound")} Dinle</button>
                <a class="btn sm navy" href="#/kelime/${encodeURIComponent(w.id)}" data-sheet-close>Kelimeye git</a>
            </div>
        </div>`;
    }

    Pages.openWord = function (idList, surface) {
        const words = idList.map(DB.word).filter(Boolean);
        if (words.length) { U.openSheet(words.map(sheetWord).join("")); return; }
        const clean = surface;
        U.openSheet(`<div class="sheet-word">
            <h2 lang="fr">${esc(clean)}</h2>
            <p class="muted">Bu kelime henüz havuzlarda yok.</p>
            <div class="row-actions">
                <button class="btn sm ghost" type="button" data-speak="${esc(clean)}">${icon("sound")} Dinle</button>
                <a class="btn sm" href="#/ekle/kelime?fr=${encodeURIComponent(clean.toLowerCase())}" data-sheet-close>${icon("plus")} Havuza ekle</a>
            </div></div>`);
    };
})();
