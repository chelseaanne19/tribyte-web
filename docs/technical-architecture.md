# Technical architecture — intentionally simple first

**Status:** Proposed; not implemented. The architecture must match the stage actually being built.

## Stack

- **Frontend:** React + TypeScript + Vite. Use scaffold's ESLint; plain CSS with reusable design variables.
- **R1 content:** small local typed data module (`src/data/tips.ts`, for example), no database or API.
- **R2 map:** evaluate an accessible map library such as **MapLibre GL JS** (or a simpler alternative like Leaflet) **only at map milestone**. A map library does not automatically provide map tiles or permission to use them: check provider terms, cost, licenses, required attribution and mobile performance.
- **R3 postcards:** browser-side `Canvas`/equivalent export; no image uploads or accounts.
- **Hosting:** static host such as Vercel/Netlify after R1. No provider account needed for local development.

## Suggested component boundaries (illustrative, not files to generate prematurely)

```text
src/
  app/           navigation and shared app layout
  components/    small shared accessible UI
  features/
    guide/       list, filters, tip details
    map/         later: place pins and map controls
    postcard/    later: editor, preview, export
  data/          approved public tip data only
  styles/        brand variables and global CSS
```

Initially, `App.tsx`, one component and a tip data file may be enough. Avoid generating dozens of empty files/folders.

## Browser navigation

Minimal paths: `/`, `/explore`, `/create`, optional `/scan`. Use simple client-side navigation or routing only when actually needed. Configure hosting's SPA fallback if direct `/explore` URLs otherwise 404.

## Map-data logic

```text
approved Tips ──> category filter ──> accessible list
      │                    │
      └─> place tips with verified coordinates ──> map pins

General transport/budget tips NEVER get fake coordinates.
```

When user taps a pin, reveal the same underlying public recommendation as the list, rather than maintaining duplicate map-only content. If a place has several student tips, group them under one location rather than placing overlapping indistinguishable pins.

## Why no backend initially?

A reviewed static dataset removes authentication, spam, database, API keys, moderation queues, GDPR storage, and operating costs while testing whether the *information* is useful. Manual publishing isn't scalable; that is acceptable for the first 12–18 tips.

Consider adding a database **only** if research shows students actually submit content, the team can moderate it, and safe consent/deletion processes exist. At that point write a new PRD and threat/privacy review.

## Postcard data flow

```text
user selects local photo
  -> browser decodes it
  -> fixed postcard preview with optional text
  -> user clicks download
  -> browser renders PNG and saves it locally
```

No public URLs, image upload endpoint, or server-side image storage. Handle JPEG/PNG/WebP; check HEIC/HEIF on real iPhones and provide an understandable message if unsupported. Watch memory usage for large photos and release object URLs.

## Accessibility and resilience

- All guide content must be available without interacting with the map; list and keyboard support are first-class requirements.
- Mobile: avoid tiny tap targets; maintain readable contrast and predictable page layout.
- Show meaningful empty states ('No reviewed tips in this category yet') rather than fabricated filler.
- A missing map tile or offline map must not hide guide content.
- Run Vite build/lint before every important commit and do real-device smoke tests.
