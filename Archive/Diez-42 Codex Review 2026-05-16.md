# Diez-42 Codex Review 2026-05-16

Review timestamp: 2026-05-16 02:03 CEST.

1/ General architecture:
- The repo is appropriately simple for a GitHub Pages V1: one active `index.html`, shared assets, and archived concepts kept out of the production path.
- The strongest architecture risk is now content provenance, not code structure: legal identity, real photos, translations, and final contact wording still need explicit source-of-truth treatment before launch.

2/ UI:
- The current photo-led direction is warmer than the earlier sparse draft and fits the charity context better.
- The language and theme controls are compact, but the final production decision should confirm whether a theme switch is useful or unnecessary visual complexity for a charity homepage.

3/ UX:
- The contact path is clear, especially WhatsApp, phone, social links, and physical address.
- Donor/supporter paths remain intentionally deferred; that is fine, but the page should still make the non-donation next step obvious for volunteers and people seeking help.

4/ Testing:
- `npm run check` only catches JavaScript syntax.
- Add static QA for links, language strings, theme persistence, old-link redirect behavior, image alt text, and mobile header layout.

5/ Everything else:
- Placeholder AI program photos should remain visibly temporary until replaced with approved real Diez42 media.
- The stale/conflicting outside PR should be closed or rebased before it becomes recurring review noise.

6/ My suggetions:
1. Verify legal identity, association wording, CIF/status, and final public address directly with Diez42.
2. Replace AI program images with approved real photos and document photo permissions.
3. Add a small static QA script for links, cache-bust versions, toggles, redirect, and accessibility basics.
4. Have a fluent Spanish reviewer approve all Spanish copy and decide whether English ships in V1.
5. Resolve or close the stale GitHub PR so `main` remains the clear production source.
