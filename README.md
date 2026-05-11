# Diez42

Static V1 website draft for the Diez42 charity website.

The goal of this first pass is intentionally plain: build a clean static V1 homepage before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 as a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. Registry details should be verified against the municipal record and the organization before public launch; the public-facing spelling should remain `Diez42`.

Current visible version: `v72.9`.
Default viewer language: Spanish, with an English toggle retained.
Current controls use one flag button for language and one sun/moon button for day/night.
Confirmed WhatsApp and phone: `+34 600 33 97 94`.
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
http://localhost:8042/?v=72.9
```

## Structure

- `index.html` is the active V1 homepage.
- `concepts/04-quiet-foundation.html` redirects old links back to the homepage.
- `Archive/concepts/` contains earlier concept directions for reference only.
- `Media/` contains user-provided Diez42 logo source exports.
- `assets/logo-horizontal.png` and `assets/logo-vertical.png` are cropped web-use logo assets derived from the provided exports.
- `assets/styles.css` contains all shared styling.
- `assets/site-version.js` applies the visible version from cache-bust query strings or page labels.
- `assets/site-controls.js` powers the flag language toggle, sun/moon theme toggle, draft translations, and persisted choices in `localStorage`.

## Working Direction

The current homepage is institutional, registry-forward, and transparency-focused. The archived concepts remain available only as a reference bank for ideas, fonts, colors, sections, and language.

## Editing Rule

Only `index.html` is the active public page. Do not update `Archive/concepts/` just to keep it current. Use the archive as an idea library only, and pull ideas into the homepage or shared assets when needed.

## V1 Scope

- Static copy and image placeholders.
- Confirmed WhatsApp and phone action.
- Confirmed Instagram/Facebook links and mailing address.
- Warm hero/program photo placeholders with an explicit AI-photo disclosure.
- Bilingual EN/ES switch.
- Day/night theme switch.
- Active homepage plus archived reference concepts.
- No public concept chooser on the homepage.
- No payments.
- No backend.
- No donation form.
- No analytics.

## Content Caveats

- All public-identity details should be verified before launch: formal name, CIF, registered address wording, association scope, statutory aims, and preferred contact channels.
- Social presence appears to use `diez42malaga` / `Diez42Malaga`, but final links should come from the organization.
- The Diez42 logo is now used in the header and homepage. Remaining program imagery uses local AI-generated placeholders; replace those with real Diez42 photos before launch.
- Spanish copy is a lightweight mock translation, not final bilingual editorial copy.

## V2 Notes

Payments should be revisited only after the legal entity, Spanish bank details, donor receipt language, and Stripe account ownership are settled.
