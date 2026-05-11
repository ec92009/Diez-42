# Diez42 Summary

## Conversation Summary

The project started as a simple static V1 website for a neighbor's charity, Diez42, intended for GitHub Pages hosting under the GitHub repo `ec92009/Diez-42`. Payments and donations were explicitly deferred to V2. Early discussion covered Stripe only as future context: the charity should own its own Stripe account and connect its own Spanish bank account when that work begins.

The requested build started as a five-option homepage exploration similar to prior concept-board work. The active public surface has now been simplified into a real V1 homepage at `index.html`; the earlier exploratory concepts remain in `Archive/concepts/` only as a reference bank. The site remains shared CSS, static HTML, no build step, and a local preview on port `8042`.

The user later supplied better public context for Diez42: it appears to be formally registered in Málaga as a local social-action association serving immigrants, refugees, and other newcomers. Public notes mention language classes, job training, parent and family activities, exercise, art, practical help, community support, food distribution, children's English activities, Christian/Matthew 10:42 roots, and an Elevāt women's artisan/co-op project. This context was integrated into the mock copy with a verify-before-launch caveat. The user later clarified that the public-facing spelling must always be `Diez42`.

The site now has two compact top-right icon controls: a flag language toggle and a sun/moon day-night toggle. Preferences are saved in `localStorage` so the selected language and theme persist on the homepage.

In a later working session, the user asked for the five options to feel more varied, for Spanish to become the default language everywhere, for the controls to collapse to one button per toggle, for the theme toggle to use sun/moon icons, and for the language toggle to use flags. The project then moved from chooser mode into homepage mode: future edits should focus on the active homepage and shared assets, not keeping archived mock pages current.

Matthew 10:42 was added as a small cited note in the archived exploration so the verse behind the name is available without dominating the active homepage. The note uses KJV text in English and Reina-Valera 1909 text in Spanish, with source links included in the archived page.

## Current State

- Current visible version: `v72.3`.
- Default viewer language: Spanish, with English still available through the toggle.
- Header controls: one flag button for language and one sun/moon button for day/night.
- The provided Diez42 logo is now used in the global header and active homepage hero/logo band.
- Versioning follows the PhotosByElie-style date-based SOP: `72` is days since `2026-02-28`; `.3` is the fourth user-visible build for the day.
- Repo: `https://github.com/ec92009/Diez-42`.
- Local preview: `http://localhost:8042/?v=72.3`.
- Main files:
- `index.html`: active homepage.
- `concepts/04-quiet-foundation.html`: redirect for old direct links.
- `Archive/concepts/01-cup-of-cold-water.html`: archived Matthew 10:42-forward direction.
- `Archive/concepts/02-neighbor-hands.html`: archived practical local services direction.
- `Archive/concepts/03-field-notes.html`: archived editorial updates direction.
- `Archive/concepts/05-open-table.html`: archived belonging and community direction.
- `Media/`: user-provided horizontal and vertical Diez42 PNG/MP4 logo exports.
- `assets/logo-horizontal.png`, `assets/logo-vertical.png`: cropped web-ready logo assets derived from `Media/`.
- `assets/styles.css`: layout, responsive behavior, day/night theme.
- `assets/site-controls.js`: flag language toggle, sun/moon theme toggle, translations, and preference persistence.
- `assets/site-version.js`: internal link versioning helper.

## Verification Performed

- `npm run check` passed.
- `git diff --check` passed.
- Local pages returned `200` during preview testing.
- Browser testing confirmed:
- Active homepage and old direct link behavior work.
- Flag language switch works.
- Sun/moon day-night switch works.
- Language and theme persist across concept navigation.
- The homepage no longer presents itself as a concept chooser.
- Archived pages are retained for reference only and should not be kept current unless explicitly requested.

## Important Caveats

- The organization details came from user-provided research notes and must be verified before public launch.
- Remaining placeholder program photos are local AI-generated images and should still be replaced with real Diez42 images when available.
- Spanish translations are draft-level and should be reviewed by a fluent speaker before launch.
- The mock has been pushed to `main`; confirm GitHub Pages visibility and access expectations before sharing externally.
