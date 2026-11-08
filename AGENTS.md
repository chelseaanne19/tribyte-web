# Codex / coding agent instructions — TriByte

Read **README.md**, **docs/PRD.md**, **docs/decisions.md**, **docs/build-plan.md**, and the relevant specialist doc before writing code. This project is a learning and internship-portfolio project for a second-year CS student. Explain major decisions in accessible language.

## Product contract

- **TriByte** is the company. **Aon Scéal** is a 
 product/collection name.
- Audience: UCD Erasmus, exchange and international students; initial geography is UCD and Dublin, not all of Ireland.
- Main utility: **practical student recommendations**. Balance 3 settling-in categories (transport, groceries, budgeting) and 3 discovery categories (food, study spots, things to do).
- A *place* recommendation may have a geographic marker. *General advice* must remain accessible without a fake marker.
- **Student posts must come from real, consented contributions or clearly marked demo fixtures. Never invent published testimonials, local recommendations, statistics or user identities.**
- Digital companion: public QR-linked branded landing page; guide as primary action, guided postcard creator as secondary. No paywall.
- Visual style: retro Irish × modern travel journal; playful, warm, not overly sentimental.

## Product scope and stages

1. **R1:** usable accessible category-filtered guide from curated local data. No database and no publicly writable forms.
2. **R2:** map only for genuinely geolocated place tips; preserve equivalent list view and keyboard access. Check tile licenses/usage terms and attribution before shipping.
3. **R3:** one landscape 3:2 postcard, 1 browser-local image, optional caption and PNG export.
4. **R4:** second portrait 4:5 postcard with 3 images, after R3 works and is tested.
5. **Later / unapproved:** user accounts, automated submissions, moderation dashboard, public galleries, likes/comments, analytics SDKs, payments, customer-exclusive content, cloud photo storage, AI-generated reviews.

The 'next task' is explicitly limited to its milestone. **Do not implement later stages without the user's request.**

## Technical guardrails

- Frontend preference: React + TypeScript + Vite, plain maintainable CSS; ESLint from scaffold.
- Begin with small static, typed local tip data. Do not add a backend, database, maps SDK or routing package until a milestone needs one.
- All public tips must have a review date/source record and public permission. Never commit names, email addresses, contact details, private research notes or real student photos without permission.
- When implementing maps, location records require real verified coordinates from approved locations; do not geocode guesses or place arbitrary pins. Show attribution and provide accessible list alternative. Never expose a private map-provider token.
- Postcard photo selection/preview/export stays **client-side** with no upload. Reject unsupported images gracefully; warn if data is lost on reload. Preview/export must align.
- Accessibility: semantic HTML, keyboard functionality, readable focus states and colour contrast, mobile screens, alternative content for non-map users.
- Never add unnecessary libraries, hidden telemetry, external image trackers or unlicensed logos/photos. Avoid Guinness/UCD marks unless rights are cleared.

## How to work

For each requested change:

1. Restate the **single milestone**, exact files likely affected, and acceptance criteria.
2. Inspect files before editing; if the repo only contains docs, explain how to scaffold Vite within the existing repo.
3. Keep changes minimal and reviewable. Don't add features 'just in case'.
4. Run `npm run build`, `npm run lint`, and any relevant configured tests **when those scripts exist**. Report actual results; do not claim checks ran when they didn't.
5. Give beginner-friendly manual verification steps, changed files, trade-offs, and a focused Conventional Commit suggestion.
6. Do **not** commit, push, deploy, buy domains or connect external services unless explicitly requested.
7. If product docs conflict, flag it and propose a small doc change instead of silently changing requirements.



## Design system

TriByte uses a vintage Irish postcard aesthetic.

### Brand colours
- Aged Paper: #F8F0DE
- Stamp Green: #245641
- Faded Ink: #55765A
- Postmark Blue: #526B79
- Vintage Rust: #BE6948
- Dark Ink: #293D33

### Rules
- Use existing CSS variables rather than hardcoded colours.
- Keep the interface mobile-first and accessible.
- Prefer subtle vintage details over visual clutter.
- Preserve paper textures, stamp motifs and Irish
  illustration assets where appropriate.
- Use blue and rust sparingly.
- Maintain strong contrast for text and buttons.
- Do not introduce new brand colours without
  updating the design documentation.