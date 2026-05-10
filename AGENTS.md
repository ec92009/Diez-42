# AGENTS.md

Repo-level working preferences for `/Users/ecohen/Dev/Diez-42`.

## Response Protocol

- If a task may take more than a few seconds, send a short acknowledgment before doing the work.
- Read and follow this file before making changes.
- For changes intended to be viewed externally, commit and push once complete unless the user asks not to.

## Defaults

- Prefer `rg` and `rg --files` for search.
- Prefer small, direct edits over broad refactors.
- Keep the V1 site static, dependency-light, and easy to host on GitHub Pages.
- Do not add donation or payment plumbing until V2 is explicitly requested.

## Repo Workflow

- Run commands from the repo root: `/Users/ecohen/Dev/Diez-42`.
- Make small, clear commits with the prefix `diez42:`.
- Default to keeping `main` pushable.
- Use branches for larger changes; preferred branch prefix: `codex/`.
- After modifying the site, update documentation when needed.

## Versioning

- Canonical procedure lives in `/Users/ecohen/Dev/MailAssist/docs/sops/VERSIONING_SOP.md`.
- Local copy/adaptation lives in [`docs/sops/VERSIONING_SOP.md`](./docs/sops/VERSIONING_SOP.md).
- Apply the versioning SOP when the public mock selector, concept pages, visual direction, navigation, copy, or another user-visible surface changes.
- Do not treat repo-only documentation changes as automatic visible-version bumps by themselves.
- Update the visible version badge for every user-visible build.
- Also bump CSS and JS cache-bust query strings (`?v=X.Y`) in every HTML file.
- Keep `VERSION` as the source of the current visible version number without the leading `v`.

## Workspace Structure

- Repo root: `/Users/ecohen/Dev/Diez-42`
- Hub: `index.html`
- Concepts: `concepts/01-cup-of-cold-water.html` through `concepts/05-open-table.html`
- Styles and scripts: `assets/styles.css`, `assets/site-version.js`
- Docs: `README.md`, `docs/sops/`

## Local Preview

- Start a local server from the repo root: `python3 -m http.server 8042`
- Home: `http://localhost:8042/`
- GitHub Pages can serve from `main` at `/`; do not recreate a `docs/` mirror.

## Execution Discipline

- Prefer deterministic tooling over manual repetition.
- If a task fails, read the full error, fix the cause, and retest.
- Keep secrets out of source files.

## Safety

- Do not delete or overwrite user files without explicit confirmation.
- Do not rewrite Git history unless explicitly requested.
