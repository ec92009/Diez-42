# Diez-42 Codex Review 2026-05-12

Reviewed: 2026-05-12

1/ General architecture

- The repo is a clean static GitHub Pages site with active code concentrated in `index.html`, `assets/styles.css`, and small support scripts.
- `assets/styles.css` is now the largest maintenance risk at roughly 1,500 lines. It is still workable, but future changes will be easier if the file is split by page region or component group.
- The README clearly explains active vs archived concepts, which helps avoid editing stale pages.
- Version handling through `package.json`, README notes, and `assets/site-version.js` is useful, but should be kept mechanically checked so the visible version does not drift.

2/ UI

- The current visual direction sounds appropriate for a charity homepage: warm, practical, and photo-led.
- The language and theme controls are intentionally compact, which is good for a static V1, but they should be checked for accessible labels, keyboard focus, and touch target size.
- The program cards and contact actions are likely the most important first-screen elements; they should remain visually higher priority than transparency/legal scaffolding until launch copy is final.
- AI placeholder imagery is acceptable for draft review, but the site should not go public with placeholder program photos unless the disclosure remains prominent.

3/ UX

- The site has a simple user journey: understand the mission, see programs, contact the association. That is the right V1 scope.
- The main UX risk is trust: charity users need verified identity details, real photos, and unambiguous contact channels before donation or volunteer flows are added.
- The bilingual toggle is valuable, but Spanish should be treated as the canonical launch copy and English as a carefully reviewed secondary version.
- WhatsApp as a primary contact action fits the local context; keep it easy to find on mobile.

4/ Testing

- There is a `npm run check` script for JavaScript syntax, but no browser smoke test or link validation.
- Add a lightweight static test that verifies required sections, contact links, logo assets, language strings, and cache-bust version wiring.
- Before public launch, run a mobile viewport pass for the header controls, hero, contact section, and footer.
- External social links and WhatsApp URLs should be covered by a simple link audit script.

5/ Everything else

- The README still flags several content caveats. Those should block public launch until the organization confirms formal name, address language, legal identity, and social links.
- The repo has a healthy narrow scope. Resist adding payments until legal ownership and donor receipt requirements are resolved.
- Consider documenting who owns final Spanish copy, photo approval, and legal review.

6/ My suggetions:

1. Verify and freeze public identity details: formal name, address wording, CIF/legal status, and approved contact channels.
2. Replace AI placeholder program photos with approved real Diez42 imagery, or keep the disclosure visible wherever placeholders remain.
3. Split `assets/styles.css` into smaller maintainable sections or add a table of contents and region comments.
4. Add a `npm run validate` script for required DOM sections, contact/social links, asset existence, and visible version consistency.
5. Run a mobile accessibility pass for header controls, language/theme toggles, WhatsApp action, and focus states.
6. Keep donation/payment work out of scope until legal, banking, receipt, and Stripe ownership questions are answered.
