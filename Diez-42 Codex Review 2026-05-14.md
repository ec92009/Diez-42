# Diez-42 Codex Review 2026-05-14

Review timestamp: 2026-05-14, Europe/Madrid.

1/ General architecture

- The static, dependency-light architecture is the right fit for a charity V1, and keeping `index.html` as the only active public page reduces maintenance cost.
- The site is now split clearly between active files and archived concepts, but old concept redirects should be covered by a lightweight link check so stale paths do not silently break.
- Versioning is well documented, but cache-bust/version updates still depend on discipline across HTML, CSS, JS, and `VERSION`.

2/ UI

- The current photo-led homepage is warmer than the earlier concept direction, but the remaining AI placeholder imagery should be treated as a launch blocker.
- The compact language and theme buttons are appropriate for the page size; verify that icon-only controls retain accessible labels and visible focus states.
- Contact buttons are clear, but the phone, WhatsApp, Instagram, Facebook, and mailing-address hierarchy should be tested on narrow mobile screens.

3/ UX

- Spanish default is appropriate for Malaga visitors, but draft Spanish copy still needs a fluent review before public handoff.
- The donation/payment deferral is sensible; avoid hinting at donation flows until legal, bank, receipt, and Stripe ownership are decided.
- The homepage should make the first visitor action unmistakable: contact, visit, volunteer, or request help.

4/ Testing

- `npm run check` covers JS syntax only; add static QA for links, old redirects, cache-bust consistency, accessible names, and language/theme persistence.
- Add at least one mobile screenshot smoke test before swapping in real photos.
- Use a simple prelaunch checklist for legal identity, photo permission, social links, and Spanish copy approval.

5/ Everything else

- The reserved domain and GitHub Pages setup should be documented as an operational task, not mixed into content backlog.
- PR #1 is stale/conflicting and should either be closed or deliberately rebased.
- Keep all real organization details sourced from Diez42, not inferred public snippets.

6/ My suggetions:

1. Replace all AI placeholder photos with approved Diez42 photos and record usage permission.
2. Run a fluent Spanish editorial pass over every visible string.
3. Add a static QA script for links, redirects, cache-bust/version alignment, accessible names, and theme/language persistence.
4. Verify legal identity, CIF, address wording, association scope, and social/contact channels directly with Diez42.
5. Configure `diez42.org` for GitHub Pages once registrar access is available.
6. Close or supersede the stale GitHub PR after confirming there is no useful remaining content.
