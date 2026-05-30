# Diez42

Static V1 website draft for the Diez42 charity website.

The goal of this first pass is intentionally plain: build a clean static V1 homepage before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 as a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. Registry details should be verified against the municipal record and the organization before public launch; the public-facing spelling should remain `Diez42`.

Current visible version: `v89.2`.
Default viewer language: Spanish, with a compact selector for English, Brazilian Portuguese, Italian, French, Ukrainian, Russian, Lithuanian, Belarusian, Arabic (Morocco), and Arabic (Algeria).
Current controls use one language selector with Brazilian Portuguese and Italian available, one sun/moon button for day/night, and a subtle visible version pill.
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
http://localhost:8042/?v=89.2
```

## Automation

The repo includes a hardened HTTPS monitor at [`scripts/monitor_https_certificate.sh`](/Users/ecohen/Dev/Diez-42/scripts/monitor_https_certificate.sh). It checks the GitHub Pages API, validates `http://diez42.org/` and `https://diez42.org/`, attempts to enable HTTPS when GitHub allows it, and stores its state under `${CODEX_HOME:-$HOME/.codex}/automations/monitor-diez-42-https-certificate/`.

## Structure

- `index.html` is the active V1 homepage.
- `privacy.html`, `terms.html`, and `data-deletion.html` provide the public policy pages expected on public-facing websites.
- `concepts/04-quiet-foundation.html` redirects old links back to the homepage.
- `Archive/concepts/` contains earlier concept directions for reference only.
- `Media/` contains user-provided Diez42 logo source exports.
- `assets/logo-horizontal.png` and `assets/logo-vertical.png` are cropped web-use logo assets derived from the provided exports.
- `assets/styles.css` contains all shared styling.
- `assets/site-version.js` applies the visible version from cache-bust query strings or page labels.
- `assets/site-controls.js` powers the language selector, sun/moon theme toggle, draft translations, right-to-left Arabic rendering, and persisted choices in `localStorage`.

## Working Direction

The current homepage balances warm welcome with practical clarity: a photo-led hero, program cards, confirmed contact actions, and a restrained transparency section. The archived concepts remain available only as a reference bank for ideas, fonts, colors, sections, and language.

## Editing Rule

Only `index.html` is the active public page. Do not update `Archive/concepts/` just to keep it current. Use the archive as an idea library only, and pull ideas into the homepage or shared assets when needed.

## V1 Scope

- Static copy and image placeholders.
- Static privacy policy, terms, and data deletion instruction pages.
- Confirmed WhatsApp action and phone number text.
- Confirmed Instagram/Facebook links and mailing address.
- Warm hero/program photo placeholders with an explicit AI-photo disclosure.
- Inline icons for WhatsApp, Instagram, and Facebook contact buttons.
- Footer kept minimal with no V1 donation note on the page.
- Multilingual selector for ES, EN, PT-BR, IT, FR, UK, RU, LT, BE, AR-MA, and AR-DZ.
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
- Spanish and additional language copy are lightweight draft translations, not final multilingual editorial copy.

## V2 Notes

Payments should be revisited only after the legal entity, Spanish bank details, donor receipt language, and Stripe account ownership are settled.
