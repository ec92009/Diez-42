# Diez42

Static V1 website draft for the Diez42 charity website.

The goal of this first pass is intentionally plain: build a clean static V1 around the selected visual direction before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 as a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. Registry details should be verified against the municipal record and the organization before public launch; the public-facing spelling should remain `Diez42`.

Current visible version: `v72.1`.
Default viewer language: Spanish, with an English toggle retained.
Current controls use one flag button for language and one sun/moon button for day/night.

Remote repository: `https://github.com/ec92009/Diez-42` (private).

## Preview

Run from the repo root:

```sh
python3 -m http.server 8042
```

Open:

```text
http://localhost:8042/?v=72.1
```

## Structure

- `index.html` is the selected-direction hub.
- `concepts/04-quiet-foundation.html` is the active working concept.
- `Archive/concepts/` contains the four earlier concept directions for reference.
- `assets/styles.css` contains all shared styling.
- `assets/site-version.js` applies the visible version from cache-bust query strings or page labels.
- `assets/site-controls.js` powers the flag language toggle, sun/moon theme toggle, draft translations, and persisted choices in `localStorage`.

## Selected Direction

Concept 4, Quiet Foundation, is the current working base. It is institutional, registry-forward, and transparency-focused.

Archived reference concepts:

1. Cup of Cold Water: faith-rooted, Matthew 10:42-forward, warm and personal.
2. Neighbor Hands: practical, local, service-led, and easy to understand quickly.
3. Field Notes: editorial/photo-led, designed for ongoing program updates.
5. Open Table: welcoming, communal, and centered on belonging.

## V1 Scope

- Static copy and image placeholders.
- Bilingual EN/ES switch.
- Day/night theme switch.
- Active Concept 4 page plus archived reference concepts.
- Top-first selected-direction hub with archived concept cards.
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
