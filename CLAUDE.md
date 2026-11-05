# Madame Française

Turkish-speaking learners' French PWA (A1–A2 for now): word pools, sentences/paragraphs linked to words, generated exams, user-added content. Sibling of `../Madam English` (same stack, French design and linker).

## Run
No build, no dependencies. `python -m http.server 8000` then http://localhost:8000 (service worker needs http, not `file://`).
No test suite or linter.

## Structure
- `index.html` shell; script load order matters: `util → seed-* → linker → data → exam → pages-* → app`.
- `css/style.css` design tokens (tricolore palette, Paris plaques) on `:root` and `html[data-theme="dark"]`.
- `js/content/` seed data: `words-content.js`, `words-function.js`, `sentences.js`, `paragraphs.js`.
- `js/linker.js` word-form generation (conjugation, agreement, plurals), elision-aware text-to-word linking, occurrence index.
- `js/data.js` merged data (seed + user), CRUD, stats, backup. `js/exam.js` question generation and grading.
- `js/pages-*.js` views; `js/app.js` router, theme, PWA.

## Rules
- UI text is Turkish; content is metropolitan French. Spaces before `? ! : ;` follow French typography.
- Nouns are stored with their article (`la maison`). For `l'` nouns the note states the gender (`Dişil: une école`).
- Verb `forms`: full list is `je, tu, il, nous, vous, ils, participle`, plus optional `fut=` / `imp=` stems (see `linker.js`). Regular -er/-ir verbs leave it empty.
- Words are A1 or A2 only until the user asks for higher levels (`DB.LEVELS`).
- User data lives only in localStorage (`mfr_*` keys). Never change seed ids (`pool:slug`, `s12`, `p3`): stats and overrides reference them.
- All rendered strings go through `U.esc` (French text through `Linker.linkify`).
- New file: add to `index.html` and `APP_SHELL` in `sw.js`. Any shipped change: bump `CACHE_NAME` in `sw.js`.
- Project knowledge: `ProjectMemory/INDEX.md` when present; follow the global memory rules.
