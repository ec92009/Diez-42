# Diez42 Summary

## Conversation Summary

The project started as a simple static V1 website for a neighbor's charity, Diez42, intended for GitHub Pages hosting under the GitHub repo `ec92009/Diez-42`. Payments and donations were explicitly deferred to V2. Early discussion covered Stripe only as future context: the charity should own its own Stripe account and connect its own Spanish bank account when that work begins.

The requested build started as a five-option homepage exploration similar to prior concept-board work. The active public surface has now been simplified into a real V1 homepage at `index.html`; the earlier exploratory concepts remain in `Archive/concepts/` only as a reference bank. The user explicitly decided that archived pages should not be kept current unless requested. The site remains shared CSS, static HTML, no build step, and a local preview on port `8042`.

The user later supplied better public context for Diez42: it appears to be formally registered in Málaga as a local social-action association serving immigrants, refugees, and other newcomers. Public notes mention language classes, job training, parent and family activities, exercise, art, practical help, community support, food distribution, children's English activities, Christian/Matthew 10:42 roots, and an Elevāt women's artisan/co-op project. This context was integrated into the mock copy with a verify-before-launch caveat. The user later clarified that the public-facing spelling must always be `Diez42`.

The site now has compact top-right controls: a language selector with Brazilian Portuguese and Italian available, a sun/moon day-night toggle, and a subtle visible version pill. Preferences are saved in `localStorage` so the selected language and theme persist on the homepage. Static privacy policy, terms, and data deletion instruction pages are linked from the footer as a baseline for public-facing websites.

In a later working session, the user asked for the five options to feel more varied, for Spanish to become the default language everywhere, for the controls to collapse to one button per toggle, for the theme toggle to use sun/moon icons, and for the language toggle to use flags. The project then moved from chooser mode into homepage mode: future edits should focus on the active homepage and shared assets, not keeping archived mock pages current.

The user provided Diez42 logo/media assets in `Media/`. Cropped web-ready logo files were created under `assets/`, and the logo is now used on the homepage. After that, the user asked to remove all public references to the active page being an old numbered concept. The homepage no longer uses chooser, selected-direction, or old option-number framing; `concepts/04-quiet-foundation.html` now redirects old links back to the homepage.

The confirmed WhatsApp and phone number is `+34 600 33 97 94`. The active homepage contact section now links to WhatsApp via `https://wa.me/34600339794` and phone via `tel:+34600339794`.

The user also provided social links for Instagram (`https://www.instagram.com/diez42malaga?igsh=cXNmanN1dmV6Mndy`) and Facebook (`https://www.facebook.com/share/1XxCNeBHnF/?mibextid=wwXIfr`). The physical mailing address is `Avenida de Andalucía 27, 29006 Málaga`; postal-code lookup found `29006` for Avenida de Andalucía 27 in Málaga.

Matthew 10:42 was added as a small cited note in the archived exploration so the verse behind the name is available without dominating the active homepage. The note uses KJV text in English and Reina-Valera 1909 text in Spanish, with source links included in the archived page.

In the latest session, the user reacted that the active homepage had become too sad and had no photos. The homepage was warmed back up with an AI-placeholder hero image, three program photo cards, softer welcome-oriented copy, and an explicit AI-photo disclosure. The contact buttons now include inline icons for WhatsApp, Instagram, and Facebook. The contact section was then tightened so the phone number sits under the physical mailing address instead of as a right-side action button, and the footer's public V1 donation note was removed. GitHub PR #1 from `garyguate` was inspected; it only removed the draft banner and bumped to `v72.4`, which is already superseded by current `main`, and it is now stale/conflicting.

In a follow-up session on May 30, 2026, the custom domain `diez42.org` was successfully set up. We identified that the Let's Encrypt certificate provisioning was stuck at GitHub Pages (returning a certificate mismatch for `*.github.io`). To trigger provisioning, we cleared the CNAME via the Pages API and re-applied `diez42.org`, which successfully kicked off the certificate generation. Once the certificate was approved by Let's Encrypt, we enforced HTTPS. The site is now fully secure and live at `https://diez42.org/` with HTTP-to-HTTPS redirects. We also documented the HTTPS monitoring automation script in the README.

## Current State

- Current visible version: `v89.2`.
- Default viewer language: Spanish, with English, Brazilian Portuguese, Italian, French, Ukrainian, Russian, Lithuanian, Belarusian, Arabic (Morocco), and Arabic (Algeria) available through the selector.
- Header controls: one compact language selector, one sun/moon button for day/night, and one visible version pill.
- The provided Diez42 logo is now used in the global header, and the active homepage has restored AI-placeholder program photos for warmth while real media is pending.
- Versioning follows the PhotosByElie-style date-based SOP: `89` is days since `2026-02-28`; `.2` is the third user-visible build for the day.
- Repo: `https://github.com/ec92009/Diez-42`.
- Local preview: `http://localhost:8042/?v=89.2`.
- Main files:
- `index.html`: active homepage.
- `privacy.html`, `terms.html`, `data-deletion.html`: static public policy pages.
- Contact details on active homepage: WhatsApp action, phone number `+34 600 33 97 94` under the mailing address, Instagram, Facebook, and mailing address `Avenida de Andalucía 27, 29006 Málaga`.
- `concepts/04-quiet-foundation.html`: redirect for old direct links.
- `Archive/concepts/`: old exploratory pages retained for reference only.
- `Media/`: user-provided horizontal and vertical Diez42 PNG/MP4 logo exports.
- `assets/logo-horizontal.png`, `assets/logo-vertical.png`: cropped web-ready logo assets derived from `Media/`.
- `assets/styles.css`: layout, responsive behavior, day/night theme.
- `assets/site-controls.js`: language selector, sun/moon theme toggle, translations, right-to-left Arabic rendering, and preference persistence.
- `assets/site-version.js`: internal link versioning helper.
- Open PR note: GitHub PR #1 is stale/conflicting and should not be merged as-is unless rebased and updated with new work.

## Verification Performed

- Verified SSL certificate validity and HTTP-to-HTTPS redirect rules via `curl -Iv`.
- Verified Pages API status (`status=built`, `https_enforced=true`).
- Verified monitor script `scripts/monitor_https_certificate.sh` outputs `status=ready`, `blocker=none`.
- `npm run check` passed.
- `git diff --check` passed.
- Local pages returned `200` during preview testing.
- Browser testing confirmed the homepage rendered without the old numbered-concept framing.
- Active homepage and old direct link behavior work.
- Language selector works.
- Sun/moon day-night switch works.
- The homepage no longer presents itself as a concept chooser.
- The active homepage has a warmer hero/program-photo layout, social-icon contact buttons, phone number under the address, and no public V1 donation note in the footer.
- Archived pages are retained for reference only and should not be kept current unless explicitly requested.
- The 2026-05-11 Codex review was triaged into `TODO.md` and archived at `Archive/reviews/Diez-42 Codex Review 2026-05-11.md`.

## Important Caveats

- The organization details came from user-provided research notes and must be verified before public launch.
- Remaining placeholder program photos are local AI-generated images and should still be replaced with real Diez42 images when available.
- Spanish and additional language translations are draft-level and should be reviewed by fluent speakers before launch.
- GitHub Pages is serving from `main` at the custom domain `diez42.org` with HTTPS fully enabled and enforced.
