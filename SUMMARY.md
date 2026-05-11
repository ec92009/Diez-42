# Diez42 Summary

## Conversation Summary

The project started as a simple static V1 website for a neighbor's charity, Diez42, intended for GitHub Pages hosting under the private GitHub repo `ec92009/Diez-42`. Payments and donations were explicitly deferred to V2. Early discussion covered Stripe only as future context: the charity should own its own Stripe account and connect its own Spanish bank account when that work begins.

The requested build started as a five-option homepage mock selector similar to prior concept-board work. The current implementation now uses Concept 4, Quiet Foundation, as the selected working base. The other four concept pages have been moved into `Archive/concepts/` for reference. The site remains shared CSS, static HTML, no build step, and a local preview on port `8042`.

The user later supplied better public context for Diez42: it appears to be formally registered in Málaga as a local social-action association serving immigrants, refugees, and other newcomers. Public notes mention language classes, job training, parent and family activities, exercise, art, practical help, community support, food distribution, children's English activities, Christian/Matthew 10:42 roots, and an Elevāt women's artisan/co-op project. This context was integrated into the mock copy with a verify-before-launch caveat. The user later clarified that the public-facing spelling must always be `Diez42`.

The site now has two compact top-right icon controls: a flag language toggle and a sun/moon day-night toggle. Preferences are saved in `localStorage` so the selected language and theme persist while moving between the active concept and archived reference pages.

In the latest working session, the user asked for the five options to feel more varied, for Spanish to become the default language everywhere, for the controls to collapse to one button per toggle, for the theme toggle to use sun/moon icons, and for the language toggle to use flags. The selector page was also changed from a side-rail layout to a top hero followed by wider horizontal concept cards. Concept pages received more distinct visual treatments: warm faith-forward, practical services, dark editorial notes, formal institutional, and communal hospitality.

The user then expressed a preference for Concept 4. Concept 4 is now the active working page, and Concepts 1, 2, 3, and 5 are archived for reference.

Matthew 10:42 was added as a small cited note on Concept 1 so the verse behind the name is available without dominating the page. The note uses KJV text in English and Reina-Valera 1909 text in Spanish, with source links included in the page. Contrast was reviewed in the built-in browser across the hub and all five concept pages in day and night modes, with night-mode overrides patched where contrast was weak.

## Current State

- Current visible version: `v72.1`.
- Default viewer language: Spanish, with English still available through the toggle.
- Header controls: one flag button for language and one sun/moon button for day/night.
- Versioning follows the PhotosByElie-style date-based SOP: `72` is days since `2026-02-28`; `.1` is the second user-visible build for the day.
- Repo: `https://github.com/ec92009/Diez-42` (private).
- Local preview: `http://localhost:8042/?v=72.1`.
- Main files:
- `index.html`: selected-direction hub with archived reference links.
- `concepts/04-quiet-foundation.html`: active formal association / transparency direction.
- `Archive/concepts/01-cup-of-cold-water.html`: archived Matthew 10:42-forward direction.
- `Archive/concepts/02-neighbor-hands.html`: archived practical local services direction.
- `Archive/concepts/03-field-notes.html`: archived editorial updates direction.
- `Archive/concepts/05-open-table.html`: archived belonging and community direction.
- `assets/styles.css`: layout, responsive behavior, day/night theme.
- `assets/site-controls.js`: flag language toggle, sun/moon theme toggle, translations, and preference persistence.
- `assets/site-version.js`: internal link versioning helper.

## Verification Performed

- `npm run check` passed.
- `git diff --check` passed.
- Local pages returned `200` during preview testing.
- Browser testing confirmed:
- Active and archived concept links work.
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
