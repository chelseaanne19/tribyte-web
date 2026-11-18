# TriByte / Aon Scéal — small demo handoff

## Current status

- Landing page and both CTAs connect to the existing guide and postcard components.
- Guide: six category controls, counts, reset/empty states and expandable details are implemented. **11 approved tips from two contributors** are published across five categories. Things to do remains empty.
- Content: both respondents consented to review, light editing and publication; the project owner approved the public wording on 17 November 2026. One response is one contributor, even if it yields several tips. See `content-guide.md`.
- Postcard: vintage one-photo 3:2 template with an original clover frame, decorative postal cancellation and warm paper shading, optional 120-character caption, canvas preview and PNG download. Photos are browser-only. Navigation away/back preserves session edits; reload clears them. Unsupported HEIC/HEIF requires JPEG conversion. Files are limited to 20 MB / 40 megapixels.
- Map: **not implemented**; no verified coordinates are available. General advice and unlocated place tips remain available in the list.
- Routes: app navigation uses `/#explore` and `/#create`. `vercel.json` redirects `/scan` to `/`, `/explore` to `/#explore`, and `/create` to `/#create`. These redirects apply on Vercel; local Vite preview does not process `vercel.json`.
- No accounts, uploads, analytics, database, map keys or new dependencies.

## Verification performed

Production build and ESLint passed during the handoff preparation. A local Node harness exercised the existing canvas renderer with an empty preview, landscape/portrait/panoramic images, output dimensions and a long caption. This checks drawing calculations, not browser decoding or actual PNG saves. No automated browser or physical-phone test has been performed. Do the short sequence below before presenting.

## Desktop and phone demo sequence

1. Run `npm ci` on a teammate's fresh clone, then `npm run build` and `npm run lint`. Run `npm run dev` and open its printed URL. For a phone on the same trusted Wi-Fi, use `npm run dev -- --host 0.0.0.0` and open the printed Network URL (do not expose this development server to the internet).
2. Open the guide from home. Select each category, check counts/empty states, then reset to all categories. Use Tab and Enter/Space. Expected counts: transport 3, groceries 2, budgeting 3, food 2, study 1, things to do 0; all categories 11.
3. Verify each category shows the correct records, dates, attribution and details. A general tip must work without a place or coordinates. Never describe tip count as number of contributors.
4. Open the postcard creator. Check download is disabled before selecting a photo. Choose a landscape JPEG; enter a caption; check crop and full caption. Download PNG, open it and compare it with the preview (1500 × 1000).
5. Repeat with a portrait PNG/WebP and a 120-character caption. Try a broken file or unsupported HEIC: expect a clear error and the previous valid photo to remain.
6. Navigate home → guide → postcard, including browser Back/Forward: the selected photo/caption should persist. Reload: edits should clear as explained. In browser Network tools, selecting/editing/exporting a photo must make no upload request.
7. On a phone, check no horizontal page scrolling, reachable controls and PNG saving (on iPhone the image may open for saving rather than immediately appearing in Downloads). Check at 200% desktop zoom too.
8. After a reviewed deployment, open `/scan`, `/explore` and `/create` directly, refresh them, and confirm the expected destination. Test using the final public URL before printing a QR code.

## Deploy from the existing GitHub repository to Vercel — manual review first

1. Review `git status` and the diff. Confirm no private CSV, private wording, contacts or consent evidence is staged. Ignore rules do not remove previously tracked files; this preparation found no tracked spreadsheet exports. Keep original research outside the repo. Review the existing uncommitted postcard files too.
2. Only after your review, commit and push the intended changes to the existing GitHub repo. **Neither action has been performed for this handoff.**
3. In Vercel choose **Add New → Project**, import that GitHub repository, and select its application root (the directory containing `package.json`).
4. Choose **Vite**. Build command: `npm run build`. Output directory: `dist`. Installation: the package-lock-based default (`npm ci` is also suitable). Choose a Node version supported by both the installed Vite version and Vercel; Node 24 LTS is an appropriate target for this scaffold. No environment variables or API keys are needed.
5. Review settings, then deploy manually. Confirm the build succeeds and run the desktop/phone sequence against its URL. Git integration can deploy subsequent pushes automatically, so treat later pushes as publishing actions too.

Official references: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Vercel for GitHub](https://vercel.com/docs/deployments/git/vercel-for-github).

## Outstanding before claiming a complete populated demo

- Approved content is now loaded with submission/review dates and consent metadata; do not imply all suggested venues have verified branches or facilities.
- Real-device preview/export checks and a monitored correction/removal contact before public launch.
- Optional map waits for genuinely verified coordinates; it is not needed to demonstrate the usable list.

The photo picker retains its filename after a successful selection; failed files clear the picker so the same file can be retried. Preview and exported PNG use the same decorative canvas renderer. The postal motif is fictional artwork, not official postage.
