# Diez 42 Summary

## Conversation Summary

The project started as a simple static V1 website for a neighbor's charity, Diez 42, intended for GitHub Pages hosting under the private GitHub repo `ec92009/Diez-42`. Payments and donations were explicitly deferred to V2. Early discussion covered Stripe only as future context: the charity should own its own Stripe account and connect its own Spanish bank account when that work begins.

The requested build was a five-option homepage mock selector similar to prior concept-board work. The current implementation uses the OleaTax-style pattern: a hub page plus five separate concept pages, shared CSS, static HTML, no build step, and a local preview on port `8042`.

The user later supplied better public context for Diez42: it appears to be formally registered in Málaga as `Asociación para el Desarrollo e Integración Diez 42`, a local social-action association serving immigrants, refugees, and other newcomers. Public notes mention language classes, job training, parent and family activities, exercise, art, practical help, community support, food distribution, children's English activities, Christian/Matthew 10:42 roots, and an Elevāt women's artisan/co-op project. This context was integrated into the mock copy with a verify-before-launch caveat.

The site now has a persistent concept switcher on all concept pages plus two top-right controls: EN/ES and day/night. Preferences are saved in `localStorage` so the selected language and theme persist while switching concepts.

## Current State

- Current visible version: `v71.4`.
- Versioning follows the PhotosByElie-style date-based SOP: `71` is days since `2026-02-28`; `.4` is the fourth user-visible build for the day.
- Repo: `https://github.com/ec92009/Diez-42` (private).
- Local preview: `http://localhost:8042/?v=71.4`.
- Main files:
- `index.html`: concept selector hub.
- `concepts/01-cup-of-cold-water.html`: Matthew 10:42-forward direction.
- `concepts/02-neighbor-hands.html`: practical local services direction.
- `concepts/03-field-notes.html`: editorial updates direction.
- `concepts/04-quiet-foundation.html`: formal association / transparency direction.
- `concepts/05-open-table.html`: belonging and community direction.
- `assets/styles.css`: layout, responsive behavior, day/night theme.
- `assets/site-controls.js`: EN/ES and day/night controls.
- `assets/site-version.js`: internal link versioning helper.

## Verification Performed

- `npm run check` passed.
- Local pages returned `200` during preview testing.
- Browser testing confirmed:
- Concept switcher links work.
- EN/ES switch works.
- Day/night switch works.
- Language and theme persist across concept navigation.
- No browser console errors were observed during the last control test.

## Important Caveats

- The organization details came from user-provided research notes and must be verified before public launch.
- Placeholder photos are from Unsplash and should be replaced with real Diez42 images.
- Spanish translations are draft-level and should be reviewed by a fluent speaker before launch.
- No GitHub Pages publishing was enabled because the repo is private and the mock should not be made public without approval.
