# Diez 42

Static V1 mock selector for the Diez 42 charity website.

The goal of this first pass is intentionally plain: help the client choose a main-page visual direction before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 / Diez 42 as `Asociación para el Desarrollo e Integración Diez 42`, a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. These details should be verified against the municipal registry and the organization before public launch.

Current visible version: `v71.5`.

Remote repository: `https://github.com/ec92009/Diez-42` (private).

## Preview

Run from the repo root:

```sh
python3 -m http.server 8042
```

Open:

```text
http://localhost:8042/?v=71.5
```

## Structure

- `index.html` is the concept selector hub.
- `concepts/` contains five separate homepage mockups.
- `assets/styles.css` contains all shared styling.
- `assets/site-version.js` applies the visible version from cache-bust query strings or page labels.
- `assets/site-controls.js` powers the EN/ES and day/night controls and persists choices in `localStorage`.

## Concept Options

1. Cup of Cold Water: faith-rooted, Matthew 10:42-forward, warm and personal.
2. Neighbor Hands: practical, local, service-led, and easy to understand quickly.
3. Field Notes: editorial/photo-led, designed for ongoing program updates.
4. Quiet Foundation: institutional, registry-forward, and transparency-focused.
5. Open Table: welcoming, communal, and centered on belonging.

## V1 Scope

- Static copy and image placeholders.
- Bilingual EN/ES switch.
- Day/night theme switch.
- Persistent concept switcher on every concept page.
- No payments.
- No backend.
- No donation form.
- No analytics.

## Content Caveats

- All public-identity details should be verified before launch: formal name, CIF, registered address wording, association scope, statutory aims, and preferred contact channels.
- Social presence appears to use `diez42malaga` / `Diez42Malaga`, but final links should come from the organization.
- Current imagery uses local AI-generated placeholders. Replace with provided Diez42 photos before launch.
- Spanish copy is a lightweight mock translation, not final bilingual editorial copy.

## V2 Notes

Payments should be revisited only after the legal entity, Spanish bank details, donor receipt language, and Stripe account ownership are settled.
