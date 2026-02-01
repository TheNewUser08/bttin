---
applyTo: '**'
---

# AI Instructions for this project

## Project overview

- Vue 3 + Vite single-page app using Vue Router.
- JavaScript (ES modules), Vue SFCs with `<script setup>`.
- UnoCSS is enabled via Vite plugin and `virtual:uno.css` import.
- Use Bun for package management and scripts.

## Commands

- Install: `bun install`
- Dev: `bun dev`
- Build: `bun run build`
- Preview: `bun run preview`
- Format: `bun run format`

## Conventions

- Keep code in `src/` and use the alias `@` for `src` imports.
- Prefer Vue SFCs with `<script setup>` and Composition API.
- Keep formatting consistent with existing style (single quotes, no semicolons).
- Place new routed pages in `src/views` and register them in `src/router/index.js`.
- Keep global styles in `src/assets/main.css` and `src/assets/base.css`.
- Use UnoCSS utility classes in templates; extend Uno presets in `uno.config.js` only when needed.
- Do not add TypeScript, state management libraries, or additional CSS frameworks unless requested.
- Keep changes minimal and focused on the requested task.
