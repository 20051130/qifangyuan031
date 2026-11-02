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

## Comments (mandatory for new HTML files)
Every newly created HTML file MUST include the following comments:
1. **File header comment** (at the very top, inside `<head>` or right after `<!DOCTYPE html>`), containing:
   - 作者：齐方圆
   - 建立时间：YYYY-MM-DD
   - 使用模型：<model name>
   - 功能名称：<feature name>
   - 功能简介：<one-paragraph description>
2. **JS function comments** — each function in `<script>` must have a comment above it describing its main purpose/implementation (e.g. what it does, key inputs/outputs).

Example file header:
```html
<!--
  作者：齐方圆
  建立时间：2026-11-02
  使用模型：Trae
  功能名称：XXX 页面
  功能简介：实现 XXX 功能，包含 ...
-->
```

Example function comment:
```js
// qfy_initPage: 初始化页面，绑定事件并渲染默认数据
function qfy_initPage() { ... }
```

## How to work
- Edit HTML/CSS/JS directly; no install/build/run commands needed.
- When adding a new page, add a link to it from `index.html` and ensure it links back to `index.html`.
- Follow existing patterns per page (some use inline styles, some use separate CSS like `basic.css`, `qfy.css`, `layout.css`, etc.).

## Gotchas
- `qfy_prompt.md` is the authoritative history of generation rules/prompts - consult it for constraints before making style/structure changes.
- Mixed casing exists (`CSS3.HTML` capitalized). Match existing conventions for files you touch.
