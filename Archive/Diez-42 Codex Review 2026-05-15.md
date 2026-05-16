# Diez-42 Codex Review 2026-05-15

1/ General architecture:
- The static-site shape is appropriate for this V1, but `assets/styles.css` is now the dominant file at roughly 1.5k lines. Split it into small sections such as base, layout, components, and responsive rules before future content work makes it harder to reason about.
- `index.html` is clearly documented as the only live page, which is good. Keep archived concepts as references only and avoid reintroducing alternate live entry points.

2/ UI:
- The bilingual and theme controls are useful, but they should get a quick accessibility pass for focus states, labels, and readable contrast in both day and night modes.
- Program cards and contact actions should stay visually restrained; the next UI improvement should be real organization photography or clearly marked placeholders rather than more decorative styling.

3/ UX:
- The site explains the organization, but launch readiness still depends on verifying registry details, final copy, and real imagery. Treat that as the critical path before adding any new sections.
- Keep WhatsApp as the primary action and make the phone/address secondary, since the README already identifies WhatsApp as the active contact path.

4/ Testing:
- There are no automated checks. Add a tiny static validation script for internal links, required translated strings, cache-bust version references, and missing images.
- Add one Playwright smoke test that opens the homepage, toggles language/theme, and checks that primary contact links are present.

5/ Everything else:
- The README is strong and outsider-readable. Keep `TODO.md` as the backlog source so reviews do not become the only place where launch blockers live.
- Do not bump the visible version for review-only documentation unless a user-visible surface changes.

6/ My suggetions:
1. Add a static smoke script for links, assets, translations, and version query strings.
2. Split `assets/styles.css` into maintainable sections or files without changing the visual design.
3. Verify public registry/contact details and record the source in `README.md` or `TODO.md`.
4. Add a one-page Playwright smoke test for language, theme, and contact actions.
5. Replace AI/photo placeholders with approved real assets before public launch.
