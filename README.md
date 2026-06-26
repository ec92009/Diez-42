# Diez42

Static V1 website draft for the Diez42 charity website.

The goal of this first pass is intentionally plain: build a clean static V1 homepage before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 as a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. Registry details should be verified against the municipal record and the organization before public launch; the public-facing spelling should remain `Diez42`.

Current visible version: `v118.1`.
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
http://localhost:8042/?v=118.1
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
- No analytics.

## Content Caveats

- All public-identity details should be verified before launch: formal name, CIF, registered address wording, association scope, statutory aims, and preferred contact channels.
- Social presence appears to use `diez42malaga` / `Diez42Malaga`, but final links should come from the organization.
- The Diez42 logo is now used in the header and homepage. Current program imagery uses selected Diez42 photos; confirm usage permissions as part of ongoing site stewardship.
- Spanish, English, and Brazilian Portuguese copy are lightweight draft translations, not final multilingual editorial copy.

## V2 Notes

Payments should be revisited only after the legal entity, Spanish bank details, donor receipt language, and Stripe account ownership are settled.
