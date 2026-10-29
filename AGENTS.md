# AGENTS.md

## Overview
Static HTML/CSS/JS practice site for "Advanced Web Design" coursework. No build tool, package manager, tests, or lint config present - open files directly in a browser.

## Entrypoints & Navigation
- `index.html` is the course catalog/homepage (links to all practice pages).
- New HTML pages should link back to `index.html` (see `qfy_prompt.md` history).
- Page naming varies (`basic.html`, `form.html`, `layout.html`, `homework.html`, `svg.html`, `CSS3.HTML`, `dataTy.html`, `iconfont-*.html`, `grid.html`, `game.html`, `test.html`, etc.).

## Conventions (repo-specific)
- All CSS class names, id names, and JS variables must start with `qfy_` (logged in `qfy_prompt.md` 2026-10-22).
- All prompts are appended to `qfy_prompt.md` with timestamp/model/prompt content (do not overwrite).
- Assets are local: `cdn/` (Font Awesome/Lucide etc.), `font/` (iconfont), `img/`, and page-specific CSS files alongside HTML.

## How to work
- Edit HTML/CSS/JS directly; no install/build/run commands needed.
- When adding a new page, add a link to it from `index.html` and ensure it links back to `index.html`.
- Follow existing patterns per page (some use inline styles, some use separate CSS like `basic.css`, `qfy.css`, `layout.css`, etc.).

## Gotchas
- `qfy_prompt.md` is the authoritative history of generation rules/prompts - consult it for constraints before making style/structure changes.
- Mixed casing exists (`CSS3.HTML` capitalized). Match existing conventions for files you touch.
