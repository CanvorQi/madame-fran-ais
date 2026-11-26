/* Views: model dialogues and scripted role-play chats with a bot. */
(function () {
    "use strict";

    const { esc, icon } = U;
    const KEY = { best: "mfr_chat", voice: "mfr_chat_voice" };
    const MISS = ["Pardon ? Je n'ai pas bien compris.", "Efendim? Tam anlayamadım."];
    let best = U.store.get(KEY.best, {});
    let voice = U.store.get(KEY.voice, false);
    let run = null;

    const dialogue = (id) => SEED.dialogues.find((d) => d.id === id);
    const chat = (id) => SEED.chats.find((c) => c.id === id);

    /* Whole-word matching on folded text: "Un café, s'il vous plaît !" → " un cafe s il vous plait ". */
    const norm = (s) => ` ${U.fold(s).replace(/[^a-z0-9]+/g, " ").trim()} `;
    const matches = (text, keys) => { const t = norm(text); return keys.every((g) => g.some((k) => t.includes(norm(k)))); };

    function bubble(m) {
        return `<div class="msg ${m.me ? "me" : "them"}${m.miss ? " miss" : ""}">
            ${m.who ? `<span class="msg-who">${esc(m.who)}</span>` : ""}
            <p class="fr" lang="fr">${m.typed ? esc(m.fr) : Linker.linkify(m.fr)}</p>
            ${m.tr ? `<p class="tr-text small" ${m.miss ? "" : "hidden"}>${esc(m.tr)}</p>` : ""}
            ${m.typed ? "" : `<div class="s-foot">
                <button class="s-btn" type="button" data-speak="${esc(m.fr)}" aria-label="Dinle">${icon("sound")}</button>
                ${m.tr && !m.miss ? `<button class="s-btn" type="button" data-msg-tr aria-label="Türkçesi">${icon("translate")}</button>` : ""}
            </div>`}</div>`;
    }

    function toggleTr(e) {
        const b = e.target.closest("[data-msg-tr]");
        if (!b) return;
        const tr = b.closest(".msg").querySelector(".tr-text");
        if (tr) tr.hidden = !tr.hidden;
    }

    const bestOf = (id) => (best[id] === undefined ? "" : ` · En iyi: %${best[id]}`);

    /* ---------- List ---------- */
    Pages.talk = function () {
        const byLevel = (list, card) => DB.LEVELS.map((l) => {
            const items = list.filter((x) => x.level === l);
            return items.length ? `<h3 class="talk-level">${l}</h3><div class="preset-grid">${items.map(card).join("")}</div>` : "";
        }).join("");
        return {
            nav: "talk", title: "Diyaloglar",
            html: `<div class="page-head"><h1>Diyaloglar ve Sohbet</h1><p>Örnek diyalogları oku ve dinle, sonra aynı durumu botla canlandır. Bot ne söylemen gerektiğini Türkçe görev olarak verir; sen Fransızca yazarsın.</p></div>
            <h2 class="section-title">Botla sohbet</h2>
            ${byLevel(SEED.chats, (c) => `<a class="preset red" href="#/sohbet/${encodeURIComponent(c.id)}"><b lang="fr">${esc(c.title)}</b><span>${esc(c.name)} · ${c.steps.length} adım${bestOf(c.id)}</span></a>`)}
            <h2 class="section-title">Örnek diyaloglar</h2>
            ${byLevel(SEED.dialogues, (d) => `<a class="preset" href="#/diyalog/${encodeURIComponent(d.id)}"><b lang="fr">${esc(d.title)}</b><span>${esc(d.name)} · ${d.lines.length} replik</span></a>`)}`,
        };
    };

    /* ---------- Dialogue ---------- */
    Pages.dialogue = function (id) {
        const d = dialogue(id);
        if (!d) return null;
        const c = d.chat && chat(d.chat);
        return {
            nav: "talk", title: d.title,
            html: `<div class="page-head"><div class="crumbs"><a href="#/diyaloglar">Diyaloglar</a> › ${esc(d.name)}</div>
                <h1 lang="fr">${esc(d.title)}</h1><p>${esc(d.name)}</p>
                <div class="word-meta"><span class="badge red">${esc(d.level)}</span><span class="badge">${esc(d.people.join(" · "))}</span></div>
                <div class="row-actions">
                    <button class="btn navy sm" type="button" id="playAll">${icon("sound")} Tümünü dinle</button>
                    <button class="btn ghost sm" type="button" id="allTr">${icon("translate")} Türkçeyi göster</button>
                    ${c ? `<a class="btn sm" href="#/sohbet/${encodeURIComponent(c.id)}">Botla canlandır</a>` : ""}
                </div></div>
            <div class="chat" id="dialog">${d.lines.map(([who, fr, tr]) => bubble({ me: who === 1, who: d.people[who], fr, tr })).join("")}</div>`,
            after() {
                const box = document.getElementById("dialog");
                box.addEventListener("click", toggleTr);
                document.getElementById("playAll").addEventListener("click", () => {
                    d.lines.forEach((l, i) => U.speak(l[1], i > 0));
                });
                document.getElementById("allTr").addEventListener("click", (e) => {
                    const list = box.querySelectorAll(".tr-text");
                    const show = Array.from(list).some((t) => t.hidden);
                    list.forEach((t) => { t.hidden = !show; });
                    e.currentTarget.lastChild.textContent = show ? " Türkçeyi gizle" : " Türkçeyi göster";
                });
            },
        };
    };

    /* ---------- Chat ---------- */
    function startRun(c) {
        run = { id: c.id, step: 0, log: [], fails: 0, hinted: false, score: 0, done: false };
        if (c.steps[0].bot) say(c, c.steps[0].bot);
    }

    function say(c, line) {
        run.log.push({ who: c.bot, fr: line[0], tr: line[1] });
        if (voice) U.speak(line[0], true);
    }

    function advance(c, step) {
        if (step.ok) say(c, step.ok);
        run.step++;
        run.fails = 0;
        run.hinted = false;
        const next = c.steps[run.step];
        if (next) { if (next.bot) say(c, next.bot); return; }
        if (c.end) say(c, c.end);
        run.done = true;
        const pct = Math.round((run.score / c.steps.length) * 100);
        best[c.id] = Math.max(best[c.id] || 0, pct);
        U.store.set(KEY.best, best);
    }

    function taskBox(c) {
        const step = c.steps[run.step];
        return `<div class="card chat-task">
            <p class="eyebrow">Görev ${run.step + 1} / ${c.steps.length}</p>
            <p class="chat-goal">${esc(step.task)}</p>
            ${run.hinted ? `<div class="chips" style="margin-top:8px">${step.say.map((s) => `<button class="chip" type="button" data-say="${esc(s)}" lang="fr">${esc(s)}</button>`).join("")}</div>` : ""}
            <form class="chat-input" id="chatForm">
                <input class="input" id="chatIn" lang="fr" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Fransızca yaz…" aria-label="Cevabın">
                <button class="btn" type="submit">Gönder</button>
            </form>
            ${Pages.accentBar()}
            <div class="row-actions">
                ${run.hinted ? "" : `<button class="btn ghost sm" type="button" id="hint">İpucu</button>`}
                <button class="btn ghost sm" type="button" id="skip">Atla</button>
            </div>
        </div>`;
    }

    function summary(c) {
        const pct = Math.round((run.score / c.steps.length) * 100);
        const d = SEED.dialogues.find((x) => x.chat === c.id);
        return `<div class="card result-head">
            <p class="muted">Sohbet bitti</p>
            <div class="result-grade" lang="fr">${esc(Exam.gradeOf(pct).name)}</div>
            <p class="result-pct">${run.score} / ${c.steps.length} görev ipucusuz ve ilk denemede · %${pct}</p>
            <div class="row-actions" style="justify-content:center">
                <button class="btn" type="button" id="again">Tekrar oyna</button>
                ${d ? `<a class="btn navy" href="#/diyalog/${encodeURIComponent(d.id)}">Örnek diyaloğu oku</a>` : ""}
                <a class="btn ghost" href="#/diyaloglar">Diyaloglara dön</a>
            </div></div>`;
    }

    function draw(c) {
        const root = document.getElementById("chatRoot");
        if (!root) return;
        root.innerHTML = `<div class="chat" id="chatLog">${run.log.map(bubble).join("")}</div>${run.done ? summary(c) : taskBox(c)}`;
        const log = document.getElementById("chatLog");
        if (log.lastElementChild) log.lastElementChild.scrollIntoView({ block: "nearest" });
        const input = document.getElementById("chatIn");
        if (input && window.matchMedia("(min-width: 900px)").matches) input.focus({ preventScroll: true });
    }

    function submit(c) {
        const input = document.getElementById("chatIn");
        const text = input.value.trim();
        if (!text) return;
        const step = c.steps[run.step];
        run.log.push({ me: true, fr: text, typed: true });
        if (matches(text, step.keys)) {
            if (!run.fails && !run.hinted) run.score++;
            advance(c, step);
        } else {
            run.fails++;
            run.log.push({ who: c.bot, fr: MISS[0], tr: `${MISS[1]} Görev: ${step.task}`, miss: true });
            if (voice) U.speak(MISS[0], true);
            if (run.fails >= 2) run.hinted = true;
        }
        draw(c);
    }

    function onClick(c, e) {
        toggleTr(e);
        const t = e.target.closest("button");
        if (!t) return;
        if (t.id === "hint") { run.hinted = true; draw(c); return; }
        if (t.id === "skip") {
            const step = c.steps[run.step];
            run.log.push({ me: true, fr: step.say[0] });
            advance(c, step);
            draw(c);
            return;
        }
        if (t.id === "again") { startRun(c); draw(c); return; }
        if (t.dataset.say !== undefined) {
            const input = document.getElementById("chatIn");
            input.value = t.dataset.say;
            input.focus();
        }
    }

    Pages.chat = function (id) {
        const c = chat(id);
        if (!c) return null;
        if (!run || run.id !== c.id || run.done) startRun(c);
        return {
            nav: "talk", title: c.title,
            html: `<div class="page-head"><div class="crumbs"><a href="#/diyaloglar">Diyaloglar</a> › ${esc(c.name)}</div>
                <h1 lang="fr">${esc(c.title)}</h1><p>${esc(c.desc)} Sen kendin olarak konuşuyorsun; karşındaki: <span lang="fr">${esc(c.bot)}</span>.</p>
                <div class="word-meta"><span class="badge red">${esc(c.level)}</span>
                <label class="check"><input type="checkbox" id="voice" ${voice ? "checked" : ""}> Botu sesli oku</label></div></div>
            <div id="chatRoot"></div>`,
            after() {
                const root = document.getElementById("chatRoot");
                root.addEventListener("click", (e) => onClick(c, e));
                root.addEventListener("submit", (e) => { e.preventDefault(); submit(c); });
                document.getElementById("voice").addEventListener("change", (e) => {
                    voice = e.target.checked;
                    U.store.set(KEY.voice, voice);
                });
                draw(c);
            },
        };
    };
})();
