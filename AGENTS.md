Before starting work, also read parent instruction file `~/Dev/AGENTS.md` if it exists, then apply this repo file last.

# AGENTS.md

Repo-level working preferences for `/Users/ecohen/Dev/Diez-42`.

## Response Protocol

- For externally viewed changes, keep the GitHub Pages preview path working.

## Defaults

- Keep the V1 site static, dependency-light, and easy to host on GitHub Pages.
- Do not add donation or payment plumbing until V2 is explicitly requested.

## Repo Workflow

- Run commands from the repo root: `/Users/ecohen/Dev/Diez-42`.
- Use branches for larger changes; preferred branch prefix: `codex/`.

## Versioning

- Canonical procedure lives in `~/Dev/.SOPs/VERSIONING_SOP.md`.
- Repo-local versioning deltas live in [`docs/sops/VERSIONING_SOP.md`](./docs/sops/VERSIONING_SOP.md).
- Apply the versioning SOP when the public mock selector, concept pages, visual direction, navigation, copy, or another user-visible surface changes.
- Do not treat repo-only documentation changes as automatic visible-version bumps by themselves.
- Update the visible version badge for every user-visible build.
- Also bump CSS and JS cache-bust query strings (`?v=X.Y`) in every HTML file.
- Keep `VERSION` as the source of the current visible version number without the leading `v`.

## Workspace Structure

- Repo root: `/Users/ecohen/Dev/Diez-42`
- Hub: `index.html`
- Active concept: `concepts/04-quiet-foundation.html`
- Archived concepts: `Archive/concepts/`
- Styles and scripts: `assets/styles.css`, `assets/site-version.js`, `assets/site-controls.js`
- Docs: `README.md`, `SUMMARY.md`, `TODO.md`, `docs/sops/`

## Local Preview

- Start a local server from the repo root: `python3 -m http.server 8042`
- Home: `http://localhost:8042/`
- GitHub Pages can serve from `main` at `/`; do not recreate a `docs/` mirror.

## Execution Discipline

- Keep the public mock selector and concept pages deterministic and static.
