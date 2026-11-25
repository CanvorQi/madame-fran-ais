/* Views: academy overview, unit page and lesson page; lesson quizzes and unit / level exams. */
(function () {
    "use strict";

    const { esc, icon } = U;
    const PASS = 70;
    const units = () => SEED.academy;
    const unitOf = (id) => units().find((u) => u.id === id);
    const lvl = (l) => DB.LEVELS.indexOf(l);

    /* A lesson's words: its theme at the given levels, plus its grammar group up to the unit's level. */
    function lessonWords(unit, lesson) {
        const levels = lesson.levels || [unit.level];
        return DB.words().filter((w) => (lesson.theme && w.theme === lesson.theme && levels.includes(w.level))
            || (lesson.gram && (w.gram || []).includes(lesson.gram) && lvl(w.level) <= lvl(unit.level)));
    }
    const unitWords = (unit) => Array.from(new Set(unit.lessons.flatMap((l) => lessonWords(unit, l).map((w) => w.id))));
    const unitQuestions = (unit) => unit.lessons.flatMap((l) => l.quiz || []);

    const score = (key) => DB.academyScore(key);
    const passed = (key) => { const s = score(key); return !!s && s.best >= PASS; };
    const lessonsPassed = (unit) => unit.lessons.filter((l) => passed(`${unit.id}/${l.id}`)).length;
    const unitDone = (unit) => passed(`${unit.id}/exam`);

    function scoreBadge(key) {
        const s = score(key);
        if (!s) return `<span class="badge">Çözülmedi</span>`;
        return `<span class="badge${s.best >= PASS ? " ok" : " red"}">${s.best >= PASS ? `${icon("check")} ` : ""}En iyi %${s.best}</span>`;
    }

    const bar = (done, total) => `<div class="bar"><span style="width:${total ? Math.round((done / total) * 100) : 0}%"></span></div>`;

    /* ---------- Exams ---------- */
    const start = (cfg) => Pages.startExam(Object.assign({ levels: [], pools: [], pass: PASS, minutes: 0 }, cfg));

    function lessonQuiz(unit, lesson) {
        const quiz = lesson.quiz || [];
        start({
            title: `${unit.title} · ${lesson.name}`, academy: `${unit.id}/${lesson.id}`, back: `#/akademi/${unit.id}`,
            words: lessonWords(unit, lesson).map((w) => w.id), questions: quiz,
            types: quiz.length ? ["grammar", "mean", "grammar", "gap", "grammar", "write", "rmean"] : ["mean", "gap", "write", "rmean"],
            count: Math.max(10, quiz.length + 5), instant: true,
        });
    }

    function unitExam(unit) {
        start({
            title: `${unit.title} · Bölüm sınavı`, academy: `${unit.id}/exam`, back: `#/akademi/${unit.id}`,
            words: unitWords(unit), questions: unitQuestions(unit), paragraphs: unit.paragraphs || [],
            types: ["grammar", "mean", "grammar", "gap", "read", "grammar", "write", "rmean", "order"],
            count: 20, instant: false, minutes: 20,
        });
    }

    function levelExam(level) {
        const list = units().filter((u) => u.level === level);
        start({
            title: `${level} seviye sınavı`, academy: `${level}/exam`, back: "#/akademi",
            words: Array.from(new Set(list.flatMap(unitWords))), questions: list.flatMap(unitQuestions),
            paragraphs: list.flatMap((u) => u.paragraphs || []),
            types: ["grammar", "mean", "grammar", "gap", "read", "grammar", "write", "rmean", "order"],
            count: 30, instant: false, minutes: 30,
        });
    }

    /* ---------- Overview ---------- */
    function unitCard(u, i) {
        const done = lessonsPassed(u);
        return `<a class="card unit-card${unitDone(u) ? " done" : ""}" href="#/akademi/${encodeURIComponent(u.id)}">
            <div class="unit-top"><span class="unit-no">${i + 1}</span><div><h3 lang="fr">${esc(u.title)}</h3><p>${esc(u.name)}</p></div>
                ${unitDone(u) ? `<span class="tick" title="Tamamlandı">${icon("check")}</span>` : ""}</div>
            <p class="muted small">${esc(u.desc)}</p>
            ${bar(done + (unitDone(u) ? 1 : 0), u.lessons.length + 1)}
            <p class="small muted">${done}/${u.lessons.length} ders · Bölüm sınavı: ${score(`${u.id}/exam`) ? `%${score(`${u.id}/exam`).best}` : "çözülmedi"}</p>
        </a>`;
    }

    Pages.academy = function () {
        const all = units();
        const doneCount = all.filter(unitDone).length;
        const next = all.find((u) => !unitDone(u));
        let n = 0;
        return {
            nav: "academy", title: "Akademi",
            html: `<div class="page-head"><h1>Akademi</h1>
                <p>Konular ve kelimeler bölüm bölüm ilerler. Her dersin sonunda bir test, her bölümün sonunda bir sınav var. Geçmek için en az %${PASS} gerekir.</p></div>
            <div class="card academy-head">
                <div><b>${doneCount} / ${all.length}</b> bölüm tamamlandı</div>${bar(doneCount, all.length)}
                ${next ? `<div class="row-actions"><a class="btn" href="#/akademi/${encodeURIComponent(next.id)}">${icon("arrow")} ${doneCount ? "Kaldığın yerden devam et" : "Başla"}: <span lang="fr">${esc(next.title)}</span></a></div>` : `<p style="margin-top:8px">Tebrikler, bütün bölümleri tamamladın!</p>`}
            </div>
            ${DB.LEVELS.map((level) => {
                const list = all.filter((u) => u.level === level);
                if (!list.length) return "";
                const key = `${level}/exam`;
                return `<h2 class="section-title">${level} seviyesi</h2>
                    <div class="unit-grid">${list.map((u) => unitCard(u, n++)).join("")}
                    <div class="card unit-card level-exam"><div class="unit-top"><span class="unit-no">${icon("exam")}</span><div><h3>${level} seviye sınavı</h3><p>${list.length} bölümün tamamı · 30 soru · 30 dk</p></div></div>
                        <div class="row-actions">${scoreBadge(key)}<button class="btn navy sm" type="button" data-level-exam="${level}">${icon("exam")} Sınava gir</button></div></div>
                    </div>`;
            }).join("")}`,
            after() {
                document.querySelectorAll("[data-level-exam]").forEach((b) => b.addEventListener("click", () => levelExam(b.dataset.levelExam)));
            },
        };
    };

    /* ---------- Unit ---------- */
    Pages.academyUnit = function (id) {
        const u = unitOf(id);
        if (!u) return null;
        const at = units().indexOf(u);
        const sib = (x) => (x ? { href: `#/akademi/${encodeURIComponent(x.id)}`, name: x.title } : null);
        const paras = (u.paragraphs || []).map(DB.paragraph).filter(Boolean);
        return {
            nav: "academy", title: u.title,
            html: `<div class="page-head"><div class="crumbs"><a href="#/akademi">Akademi</a> › ${esc(u.level)}</div>
                <h1 lang="fr">${esc(u.title)}</h1><p>${esc(u.name)} · ${esc(u.desc)}</p>
                <div class="word-meta"><span class="badge red">${esc(u.level)}</span><span class="badge">${u.lessons.length} ders</span><span class="badge">${unitWords(u).length} kelime</span></div></div>
            <h2 class="section-title">Dersler</h2>
            ${u.lessons.map((l, i) => {
                const g = l.gram ? DB.gram(l.gram) : null;
                const t = l.theme ? DB.theme(l.theme) : null;
                return `<div class="card lesson-row">
                    <div class="lesson-main"><span class="unit-no">${i + 1}</span><div>
                        <h3><a href="#/akademi/${encodeURIComponent(u.id)}/${encodeURIComponent(l.id)}">${esc(l.name)}</a></h3>
                        <div class="word-meta">${g ? `<span class="badge">${esc(g.name)}</span>` : ""}${t ? `<span class="badge">${esc(t.name)}</span>` : ""}<span class="badge">${lessonWords(u, l).length} kelime</span>${(l.quiz || []).length ? `<span class="badge">${l.quiz.length} dilbilgisi sorusu</span>` : ""}</div>
                    </div></div>
                    <div class="row-actions">${scoreBadge(`${u.id}/${l.id}`)}
                        <a class="btn ghost sm" href="#/akademi/${encodeURIComponent(u.id)}/${encodeURIComponent(l.id)}">${icon("book")} Dersi aç</a>
                        <button class="btn sm" type="button" data-quiz="${esc(l.id)}">${icon("exam")} Teste başla</button></div>
                </div>`;
            }).join("")}
            ${paras.length ? `<h2 class="section-title">Okuma parçaları</h2>${paras.map(Pages.paragraphRow).join("")}` : ""}
            <h2 class="section-title">Bölüm sınavı</h2>
            <div class="card">
                <p>Bu bölümün bütün dersleri, kelimeleri ve okuma parçalarından 20 soru · 20 dakika · sonuçlar sonda. Geçme notu %${PASS}.</p>
                <div class="row-actions">${scoreBadge(`${u.id}/exam`)}<button class="btn navy" type="button" id="unitExam">${icon("exam")} Bölüm sınavına gir</button></div>
            </div>
            ${Pages.pager({ prev: sib(units()[at - 1]), next: sib(units()[at + 1]) })}`,
            after() {
                document.querySelectorAll("[data-quiz]").forEach((b) => b.addEventListener("click", () => lessonQuiz(u, u.lessons.find((l) => l.id === b.dataset.quiz))));
                document.getElementById("unitExam").addEventListener("click", () => unitExam(u));
            },
        };
    };

    /* ---------- Lesson ---------- */
    Pages.academyLesson = function (unitId, lessonId) {
        const u = unitOf(unitId);
        const l = u && u.lessons.find((x) => x.id === lessonId);
        if (!l) return null;
        const at = u.lessons.indexOf(l);
        const g = l.gram ? DB.gram(l.gram) : null;
        const words = lessonWords(u, l);
        const sentences = g ? DB.sentences().filter((s) => (s.gram || []).includes(g.id) && lvl(s.level) <= lvl(u.level)).slice(0, 8) : [];
        const sib = (x) => (x ? { href: `#/akademi/${encodeURIComponent(u.id)}/${encodeURIComponent(x.id)}`, name: x.name } : null);
        return {
            nav: "academy", title: l.name,
            html: `<div class="page-head"><div class="crumbs"><a href="#/akademi">Akademi</a> › <a href="#/akademi/${encodeURIComponent(u.id)}" lang="fr">${esc(u.title)}</a> › Ders ${at + 1}</div>
                <h1>${esc(l.name)}</h1>
                ${g ? `<p>${esc(g.info)} <a href="#/dilbilgisi/${encodeURIComponent(g.id)}">Konunun tamamı</a></p>` : ""}
                <div class="row-actions">${scoreBadge(`${u.id}/${l.id}`)}<button class="btn" type="button" id="quiz">${icon("exam")} Ders testine başla</button></div></div>
            ${g ? Pages.rulesHtml(g.rules) : `<h2 class="section-title">Kelimeler</h2>`}
            ${words.length ? `<div>${words.map(Pages.wordRow).join("")}</div>` : `<div class="card empty">Bu derste kelime yok.</div>`}
            ${sentences.length ? `<h2 class="section-title">Örnek cümleler</h2>${sentences.map((s) => Pages.textCard(s)).join("")}` : ""}
            <div class="card" style="margin-top:22px"><b>Ne kadar öğrendin?</b>
                <p class="muted small">${(l.quiz || []).length} dilbilgisi sorusu ve bu dersin kelimelerinden sorular. Geçme notu %${PASS}.</p>
                <div class="row-actions"><button class="btn" type="button" id="quiz2">${icon("exam")} Ders testine başla</button></div></div>
            ${Pages.pager({ prev: sib(u.lessons[at - 1]), next: sib(u.lessons[at + 1]) || { href: `#/akademi/${encodeURIComponent(u.id)}`, name: "Bölüm sınavı" } })}`,
            after() {
                ["quiz", "quiz2"].forEach((id) => document.getElementById(id).addEventListener("click", () => lessonQuiz(u, l)));
            },
        };
    };
})();
