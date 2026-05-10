# Diez 42

Static V1 mock selector for the Diez 42 charity website.

The goal of this first pass is intentionally plain: help the client choose a main-page visual direction before real copy, photos, legal language, and future donation/payment work are added.

Working content notes currently describe Diez42 / Diez 42 as `Asociación para el Desarrollo e Integración Diez 42`, a Málaga social-action association serving immigrants, refugees, and other newcomers through practical support, education, training, family activities, food support, and community connection. These details should be verified against the municipal registry and the organization before public launch.

## Preview

Run from the repo root:

```sh
python3 -m http.server 8042
```

Open:

```text
http://localhost:8042/
```

## Structure

- `index.html` is the concept selector hub.
- `concepts/` contains five separate homepage mockups.
- `assets/styles.css` contains all shared styling.
- `assets/site-version.js` applies the visible version from cache-bust query strings or page labels.

## V1 Scope

- Static copy and image placeholders.
- No payments.
- No backend.
- No donation form.
- No analytics.

## V2 Notes

Payments should be revisited only after the legal entity, Spanish bank details, donor receipt language, and Stripe account ownership are settled.
