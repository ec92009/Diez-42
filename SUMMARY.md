# Diez 42 Summary

## Conversation Summary

The project started as a simple static V1 website for a neighbor's charity, Diez 42, intended for GitHub Pages hosting under the private GitHub repo `ec92009/Diez-42`. Payments and donations were explicitly deferred to V2. Early discussion covered Stripe only as future context: the charity should own its own Stripe account and connect its own Spanish bank account when that work begins.

The requested build was a five-option homepage mock selector similar to prior concept-board work. The current implementation uses the OleaTax-style pattern: a hub page plus five separate concept pages, shared CSS, static HTML, no build step, and a local preview on port `8042`.

The user later supplied better public context for Diez42: it appears to be formally registered in Málaga as `Asociación para el Desarrollo e Integración Diez 42`, a local social-action association serving immigrants, refugees, and other newcomers. Public notes mention language classes, job training, parent and family activities, exercise, art, practical help, community support, food distribution, children's English activities, Christian/Matthew 10:42 roots, and an Elevāt women's artisan/co-op project. This context was integrated into the mock copy with a verify-before-launch caveat.

The site now has a persistent concept switcher on all concept pages plus two compact top-right icon controls: a flag language toggle and a sun/moon day-night toggle. Preferences are saved in `localStorage` so the selected language and theme persist while switching concepts.

In the latest working session, the user asked for the five options to feel more varied, for Spanish to become the default language everywhere, for the controls to collapse to one button per toggle, for the theme toggle to use sun/moon icons, and for the language toggle to use flags. The selector page was also changed from a side-rail layout to a top hero followed by wider horizontal concept cards. Concept pages received more distinct visual treatments: warm faith-forward, practical services, dark editorial notes, formal institutional, and communal hospitality.

Matthew 10:42 was added as a small cited note on Concept 1 so the verse behind the name is available without dominating the page. The note uses KJV text in English and Reina-Valera 1909 text in Spanish, with source links included in the page. Contrast was reviewed in the built-in browser across the hub and all five concept pages in day and night modes, with night-mode overrides patched where contrast was weak.

## Current State

- Current visible version: `v72.0`.
- Default viewer language: Spanish, with English still available through the toggle.
- Header controls: one flag button for language and one sun/moon button for day/night.
- Versioning follows the PhotosByElie-style date-based SOP: `72` is days since `2026-02-28`; `.0` is the first user-visible build for the day.
- Repo: `https://github.com/ec92009/Diez-42` (private).
- Local preview: `http://localhost:8042/?v=72.0`.
- Latest pushed commit for the visual/default-language pass: `0b90b01`.
- Main files:
- `index.html`: concept selector hub.
- `concepts/01-cup-of-cold-water.html`: Matthew 10:42-forward direction.
- `concepts/02-neighbor-hands.html`: practical local services direction.
- `concepts/03-field-notes.html`: editorial updates direction.
- `concepts/04-quiet-foundation.html`: formal association / transparency direction.
- `concepts/05-open-table.html`: belonging and community direction.
- `assets/styles.css`: layout, responsive behavior, day/night theme.
- `assets/site-controls.js`: flag language toggle, sun/moon theme toggle, translations, and preference persistence.
- `assets/site-version.js`: internal link versioning helper.

## Verification Performed

- `npm run check` passed.
- `git diff --check` passed.
- Local pages returned `200` during preview testing.
- Browser testing confirmed:
- Concept switcher links work.
- Flag language switch works.
- Sun/moon day-night switch works.
- Language and theme persist across concept navigation.
- Selector hub shows the hero first and wider concept rows.
- Day and night contrast was visually checked on the hub and all five concepts.

## Important Caveats

- The organization details came from user-provided research notes and must be verified before public launch.
- Current placeholder photos are local AI-generated images and should still be replaced with real Diez42 images when available.
- Spanish translations are draft-level and should be reviewed by a fluent speaker before launch.
- The mock has been pushed to `main`; confirm GitHub Pages visibility and access expectations before sharing externally.
