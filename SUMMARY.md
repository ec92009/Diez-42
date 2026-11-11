# Diez42 Summary

## Conversation Summary

The project started as a simple static V1 website for a neighbor's charity, Diez42, intended for GitHub Pages hosting under the GitHub repo `ec92009/Diez-42`. Payments and donations were explicitly deferred to V2. Early discussion covered Stripe only as future context: the charity should own its own Stripe account and connect its own Spanish bank account when that work begins.

The requested build started as a five-option homepage exploration similar to prior concept-board work. The active public surface has now been simplified into a real V1 homepage at `index.html`; the earlier exploratory concepts remain in `Archive/concepts/` only as a reference bank. The user explicitly decided that archived pages should not be kept current unless requested. The site remains shared CSS, static HTML, no build step, and a local preview on port `8042`.

The user later supplied better public context for Diez42: it appears to be formally registered in Málaga as a local social-action association serving immigrants, refugees, and other newcomers. Public notes mention language classes, job training, parent and family activities, exercise, art, practical help, community support, food distribution, children's English activities, Christian/Matthew 10:42 roots, and an Elevāt women's artisan/co-op project. This context was integrated into the mock copy with a verify-before-launch caveat. The user later clarified that the public-facing spelling must always be `Diez42`.

The site now has compact top-right controls: a language selector for Spanish, English, and Brazilian Portuguese; a sun/moon day-night toggle; and a subtle visible version pill. Preferences are saved in `localStorage` so the selected language and theme persist on the homepage. Static privacy policy, terms, and data deletion instruction pages are linked from the footer as a baseline for public-facing websites.

In a later working session, the user asked for the five options to feel more varied, for Spanish to become the default language everywhere, for the controls to collapse to one button per toggle, for the theme toggle to use sun/moon icons, and for the language toggle to use flags. The project then moved from chooser mode into homepage mode: future edits should focus on the active homepage and shared assets, not keeping archived mock pages current.

The user provided Diez42 logo/media assets in `Media/`. Cropped web-ready logo files were created under `assets/`, and the logo is now used on the homepage. After that, the user asked to remove all public references to the active page being an old numbered concept. The homepage no longer uses chooser, selected-direction, or old option-number framing; `concepts/04-quiet-foundation.html` now redirects old links back to the homepage.

The confirmed WhatsApp and phone number is `+34 600 33 97 94`. The active homepage contact section now links to WhatsApp via `https://wa.me/34600339794` and phone via `tel:+34600339794`.

The user also provided social links for Instagram (`https://www.instagram.com/diez42malaga?igsh=cXNmanN1dmV6Mndy`) and Facebook (`https://www.facebook.com/share/1XxCNeBHnF/?mibextid=wwXIfr`). The physical mailing address is `Avenida de Andalucía 27, 29006 Málaga`; postal-code lookup found `29006` for Avenida de Andalucía 27 in Málaga.

Matthew 10:42 was added as a small cited note in the archived exploration so the verse behind the name is available without dominating the active homepage. The note uses KJV text in English and Reina-Valera 1909 text in Spanish, with source links included in the archived page.

In the latest session, the user reacted that the active homepage had become too sad and had no photos. The homepage was warmed back up with a hero image, program photo cards, softer welcome-oriented copy, and inline icons for WhatsApp, Instagram, and Facebook. The contact section was then tightened so the phone number sits under the physical mailing address instead of as a right-side action button, and the footer's public V1 donation note was removed. GitHub PR #1 from `garyguate` was inspected; it only removed the draft banner and bumped to `v72.4`, which is already superseded by current `main`, and it is now stale/conflicting.

The user later shared a SharePoint folder of Diez42 photos. The active homepage now uses selected real Diez42 photos for the hero and program cards: community table gathering, food support, language-class flyers, hospitality table detail, and sewing/artisan work. These should be treated as draft selections until Diez42 confirms web-use permission for identifiable people.

In a follow-up session on May 30, 2026, the custom domain `diez42.org` was successfully set up. We identified that the Let's Encrypt certificate provisioning was stuck at GitHub Pages (returning a certificate mismatch for `*.github.io`). To trigger provisioning, we cleared the CNAME via the Pages API and re-applied `diez42.org`, which successfully kicked off the certificate generation. Once the certificate was approved by Let's Encrypt, we enforced HTTPS. The site is now fully secure and live at `https://diez42.org/` with HTTP-to-HTTPS redirects. After HTTPS was confirmed, the temporary certificate monitor automation and repo script were removed.

GitHub PR #2 from `garyguate` was merged locally into `main`; it replaces the homepage AI placeholder images with selected real Diez42 photos and adds the skills/artisan work program card. The language selector was then reduced to Spanish, English, and Brazilian Portuguese.

On June 11, 2026, ticket `DIEZ42-20260611-META` added static SEO metadata to the active public pages, homepage Open Graph/Twitter preview tags, and favicon/touch/manifest assets derived from the approved Diez42 logo export. The visible version was bumped from `v89.3` to `v103.0` because the metadata/favicon work changed the external public surface.

On June 16, 2026, a temporary noindex review route was added at `review/elies-website/` using the Elie's Websites liquid-glass review pattern. The route keeps the production homepage intact while adding a frosted header, sequential program-card reveals, hover/tap polish, mobile sticky WhatsApp CTA, and a gear settings modal for About/version, English, Spanish (SP), Portuguese (BR), day/night theme, transparency, and translucency. The visible version was bumped to `v108.0` for this viewer-facing review build.

On June 26, 2026, the public and review footers were updated to credit Web-By-Elie.com for site creation and maintenance. The visible version was bumped to `v118.0` for this viewer-facing footer update.

Later on June 26, 2026, the user approved the noindex Elie's Websites liquid-glass review version for publication, with one adjustment: the "Before final launch" panel was removed. The liquid-glass layout was promoted to `index.html`, the old review URL was kept as a noindex mirror, and the visible version was bumped to `v118.1`.

## Current State

- Approved official release: `v314.11`, authorized by the user on November 10, 2026.
- Production: https://diez42.org/, served by GitHub Pages from `main` at `/`; `www` redirects to the canonical domain.
- The logo-blue interface uses `#3F77B9` and `#355E8D`, a 96 × 68px header logo, blue card panels/footer, and white text.
- The hero cycles three AI-generated illustrative scenes, including the edited social-support scene with the gentleman taking notes. Food distribution anchors top right; the other scenes are centered.
- The 11 original program posters preserve their embedded titles in English, Spanish, Brazilian Portuguese and German.
- The program carousel shows three cards on desktop, two on tablets and one on phones. It advances every six seconds while visible, offers pause/play, translated direct selection, arrows, swipe and keyboard navigation, and respects interaction and reduced-motion preferences.
- Contact heading: “Contact us” with matching translations. Existing confirmed contact destinations are preserved.
- Settings: language, System/Day/Night, constrained glass controls and the current version. Existing saved preferences persist.
- Public Privacy, Terms and Data Deletion pages have current factual wording; `robots.txt` and `sitemap.xml` cover the official public routes.
- Repeatable release checks run through `npm run check`; versioning follows the canonical shared SOP.
- No payments, donations, visitor accounts or contact forms were introduced.
- Release review: https://github.com/ec92009/Diez-42/pull/6.
- The original main checkout retains its pre-existing local commit and untracked `GAMEPLAN.md`; release work uses an isolated worktree.

## Verification Performed

- Verified SSL certificate validity and HTTP-to-HTTPS redirect rules via `curl -Iv`.
- Verified Pages API status (`status=built`, `https_enforced=true`).
- `npm run check` passed.
- `git diff --check` passed.
- Local pages returned `200` during preview testing.
- Browser testing confirmed the homepage rendered without the old numbered-concept framing.
- Active homepage and old direct link behavior work.
- Language selector works.
- Sun/moon day-night switch works.
- The homepage no longer presents itself as a concept chooser.
- The active homepage has a warmer real-photo hero/program-card layout, social-icon contact buttons, phone number under the address, and no public V1 donation note in the footer.
- Archived pages are retained for reference only and should not be kept current unless explicitly requested.
- The 2026-05-11 Codex review was triaged into `TODO.md` and archived at `Archive/reviews/Diez-42 Codex Review 2026-05-11.md`.

## Important Caveats

- The organization details came from user-provided research notes and must be verified before public launch.
- Current hero scenes are AI-generated illustrations; previously selected real photographs remain in the repository as historical assets. Image rights remain part of ongoing site stewardship.
- Ongoing editorial review of the four homepage languages remains appropriate as programs and contact details change.
- GitHub Pages is serving from `main` at the custom domain `diez42.org` with HTTPS fully enabled and enforced.

## 11 November 2026 — v315.0

Expanded to a Spanish-first ES/EN static site with all 14 supplied programs, WhatsApp/QR joins, printable schedule, support and projects pages, donations, volunteer/team WhatsApp enquiry forms, partners and privacy/cookie pages. The corrected user-supplied address is Avenida de Andalucía 27, local 7A, 29010 Málaga. Unknown contact and content details remain `[PENDIENTE]`. Football video converted to web MP4 with a generated poster frame.
