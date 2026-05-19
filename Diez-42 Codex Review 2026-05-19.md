# Diez-42 Codex Review 2026-05-19

Timestamp: 2026-05-19 02:02:56 CEST

1/ General architecture

- The single static homepage is the right architecture for V1: no payment, CMS, or donation plumbing should be introduced before legal and banking facts are confirmed.
- Archived concept pages are correctly treated as reference material, not active product surface.
- The language/theme/version scripts are small enough to keep, but they need QA coverage because they carry most of the site behavior.

2/ UI

- The logo, warmer hero, and program photo cards make the page feel less abstract.
- The remaining AI-placeholder imagery should be treated as launch-blocking content, not merely polish.
- The compact flag and sun/moon controls are clean, though final production may not need theme switching.

3/ UX

- Spanish default is correct for the local audience.
- Contact actions are much more practical now that WhatsApp, phone, social links, and mailing address are visible.
- The site still needs official/legal identity confidence before it can move from warm mock to trusted public presence.

4/ Testing

- `npm run check` covers script syntax only.
- Add static QA for links, old redirect behavior, language toggle persistence, theme persistence, SEO metadata, and accessibility basics.
- Real-device mobile review matters because this audience will likely arrive through WhatsApp/social links.

5/everything else

- PR #1 is stale/conflicting and should not be merged as-is.
- DNS for `diez42.org` remains a deployment dependency.
- Donation/payment should stay explicitly out of V1.

6/ My suggetions:

1. Verify legal identity, CIF/registry wording, address, email, and final public contact details with Diez42.
2. Replace AI-placeholder photos with approved real photos and usage permission.
3. Have a fluent Spanish speaker review all Spanish copy before launch.
4. Add SEO/Open Graph/favicon metadata and a basic accessibility pass.
5. Add link/toggle/version static QA, then configure the reserved domain when DNS access is available.
