# Diez42

Static V1 website draft for the Diez42 charity website.

The goal of this first pass is intentionally plain: build a clean static V1 homepage before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 as a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. Registry details should be verified against the municipal record and the organization before public launch; the public-facing spelling should remain `Diez42`.

Current visible version: `v314.10`.
Default viewer language: English, with Spanish and Brazilian Portuguese available in the settings panel.
Current controls use a compact settings panel for language, day/night theme, glass transparency, glass blur, and the visible version.
Review route: `review/elies-website/`, kept as a noindex mirror of the liquid-glass public homepage.
Confirmed WhatsApp and phone: `+34 600 33 97 94`; the phone number is shown under the mailing address while WhatsApp remains a contact action.
Confirmed social links: Instagram `https://www.instagram.com/diez42malaga?igsh=cXNmanN1dmV6Mndy`; Facebook `https://www.facebook.com/share/1XxCNeBHnF/?mibextid=wwXIfr`.
Physical mailing address: `Avenida de Andalucía 27, 29006 Málaga`.

Remote repository: `https://github.com/ec92009/Diez-42`.

## Preview

Run from the repo root:

```sh
python3 -m http.server 8042
```

Open:

```text
http://localhost:8042/?v=314.10
```

Noindex review mirror:

```text
http://localhost:8042/review/elies-website/
```

## Structure

- `index.html` is the active liquid-glass V1 homepage.
- `privacy.html`, `terms.html`, and `data-deletion.html` provide the public policy pages expected on public-facing websites.
- `concepts/04-quiet-foundation.html` redirects old links back to the homepage.
- `Archive/concepts/` contains earlier concept directions for reference only.
- `Media/` contains user-provided Diez42 logo source exports.
- `assets/logo-horizontal.png` and `assets/logo-vertical.png` are cropped web-use logo assets derived from the provided exports.
- `assets/social-preview.png`, favicon PNGs, `assets/favicon.ico`, and `site.webmanifest` provide static SEO/social preview and browser icon assets.
- `assets/styles.css` contains shared styling for the policy pages and older static surfaces.
- `assets/site-version.js` applies the visible version from cache-bust query strings or page labels.
- `assets/site-controls.js` powers the Spanish, English, and Brazilian Portuguese language selector, sun/moon theme toggle, draft translations, and persisted choices in `localStorage`.
- `review/elies-website/` contains the noindex mirror route and the scoped liquid-glass CSS/JS used by the public homepage.

## Working Direction

The current homepage balances warm welcome with practical clarity: a full-bleed photo hero, frosted navigation, program cards, confirmed contact actions, and a restrained transparency section. The archived concepts remain available only as a reference bank for ideas, fonts, colors, sections, and language.

## Editing Rule

Only `index.html` is the active public page. Do not update `Archive/concepts/` just to keep it current. Use the archive as an idea library only, and pull ideas into the homepage or shared assets when needed.

## V1 Scope

- Static copy and real Diez42 photo placeholders pending final approval.
- Static privacy policy, terms, and data deletion instruction pages.
- Confirmed WhatsApp action and phone number text.
- Confirmed Instagram/Facebook links and mailing address.
- Warm hero/program photos selected from the shared Diez42 photo folder.
- Inline icons for WhatsApp, Instagram, and Facebook contact buttons.
- Footer kept minimal with no V1 donation note on the page, plus site creation and maintenance credit for Web-By-Elie.com.
- Static titles, descriptions, canonical URLs, homepage Open Graph/Twitter preview metadata, and favicon references.
- Settings panel with language, day/night theme, and glass controls.
- Active homepage plus archived reference concepts.
- No public concept chooser on the homepage.
- No payments.
- No backend.
- No donation form.
- Privacy-safe sessionless WST aggregate page views and CTA presses; no visitor identifiers or form contents.

## Content Caveats

- All public-identity details should be verified before launch: formal name, CIF, registered address wording, association scope, statutory aims, and preferred contact channels.
- Social presence appears to use `diez42malaga` / `Diez42Malaga`, but final links should come from the organization.
- The Diez42 logo is now used in the header and homepage. Current program imagery uses selected Diez42 photos; confirm usage permissions as part of ongoing site stewardship.
- Spanish, English, and Brazilian Portuguese copy are lightweight draft translations, not final multilingual editorial copy.

## V2 Notes

Payments should be revisited only after the legal entity, Spanish bank details, donor receipt language, and Stripe account ownership are settled.

The homepage Programs section contains all 11 Diez42 programs in Spanish, English, Portuguese, and German, with language-specific optimized full-length posters in `assets/programs/`. Original source artwork remains in pCloud.

Program posters display their original localized embedded headings in the shared 9:16 web layout. Lower card panels use logo blue with white copy. Cards use an automatic carousel showing three at a time on desktop, two on tablets, and one on phones; source image files are preserved.

The homepage hero alternates three AI-generated scenes inspired by the real Diez42 rooms (food distribution, adult education, and social support) every seven seconds with a 1.2-second crossfade. Text stays stationary. Visitors can pause or advance photos; reduced-motion preferences start the hero paused, and hidden tabs suspend the timer. Optimized JPEG copies are stored in `assets/photos/hero-food-distribution.jpg` `assets/photos/hero-adult-education.jpg`, and `assets/photos/hero-social-support-notes.jpg`.

On phones, the complete wide hero scene appears above the welcome copy so participants remain visible.

The food-distribution photograph anchors to the top right; education and social-support photographs stay centered as the browser resizes. The desktop hero follows the photographs’ original proportions. Hero text stays 16px from the browser’s left edge; phones retain the complete scene above the copy.

The interface uses the logo blue `#3F77B9` with `#355E8D` and pale blue surfaces. Header logo dimensions are 96 × 68px, without a separate Diez42 text label; the mobile settings gear stays in the header’s top-right corner.

The footer uses the same logo-blue background with white text and links.

The program carousel supports previous/next controls, touch swiping, and Arrow/Home/End keys when focused. Cards advance left by one every six seconds while visible, with a pause/play button and a direct-access program menu. Autoplay pauses on hover, keyboard focus, touch interaction, and hidden tabs; reduced-motion preferences start playback paused. The last group resets to the first without animating backward. All 11 localized cards remain in the static HTML; without JavaScript they use the original grid.
