# Product Requirements Document — TriByte digital experience

**Version:** 0.2 draft (replaces postcard-only v0.1)  
**Last updated:** 2026-11-08  
**Status:** Product direction agreed; demand, final design and feature priority must be validated  
**Company:** TriByte  
**Working name:** Pocket Post (**not final / not name-cleared**)  
**Module context:** UCD Innovation Academy IA20130

## 1. Problem and opportunity

International, Erasmus and exchange students in Dublin need practical, relevant advice when arriving and exploring. Existing maps show where places are; social platforms scatter experience-based recommendations across different audiences and platforms. We hypothesise a **small, student-curated guide** with context (e.g. approximate costs, transport, relevance to UCD) can help newcomers make decisions more confidently.

TriByte is also building Irish-themed physical keychains/souvenirs. Packaging may link via QR to the digital experience, which includes a **downloadable postcard maker**. The physical souvenir is not required for website access in the MVP.

**Not yet proven:** Students need another guide, trust peer submissions, will contribute, or will pay more for a souvenir because of the website. The primary research question is whether students can find recommendations they consider useful.

## 2. Audience and jobs to be done

**Primary readers:** Newer UCD Erasmus, exchange, and international students, including full-degree students.

**Initial contributors:** Current/informed international students who have firsthand Dublin experiences. Contributors may be at any stage of their stay.

**Job A (primary):** 'I need relevant, understandable advice about living or spending time in Dublin without searching across lots of platforms.'

**Job B (secondary):** 'I want to make something fun from my Ireland photos and keep/share it anywhere.'

**Value proposition under test:** *Discover Dublin through students who've been there.*

## 3. Product principles

1. Utility before novelty: a recommendation must help with a decision, not merely add a pin.
2. Student-specific context: why is this useful, what is the approximate cost/effort, and how can a newcomer get there?
3. Mix **settling in** and **discovering Dublin**; do not bias everything toward tourism.
4. Fun, lightly nostalgic visual identity. No forced serious farewell framing.
5. Public browsing, no account, mobile first, optional postcard creation.
6. Submissions are **reviewed before publication**. Private photos are private by default.
7. Measure observed behaviour, not compliments or speculative growth.

## 4. Initial categories (balanced C)

**Settling-in essentials:** Groceries; Transport; Budgeting & student life.  
**Discovering Dublin:** Affordable food & cafés; Study spots; Things to do & hidden gems.

A recommendation has a `type`:
- **Place:** tied to a verified public location and eligible for a map pin.
- **General tip:** not tied to one location; appears in the topic/list guide, **not** as a fabricated map pin.

For the cold start, aim for **12–18 genuinely collected, consented, reviewed tips**, roughly balanced across six categories (e.g. two or three per category). This is a collection target, not already-existing content.

## 5. Public user journeys

### A. Explore (primary)

1. Open site from direct URL or QR packaging route.
2. See a clear **Explore student tips** primary CTA and **Make a postcard** secondary CTA.
3. Browse category-filtered recommendations in a readable list; switch to map when available.
4. Open a recommendation to see: concise title, useful firsthand advice, category, place (if applicable), contribution/review date, and any verified practical details.
5. Find related advice or return to categories. No login or purchase required.

### B. Make a postcard (secondary)

1. Choose *Greetings from Ireland* (landscape 3:2, one photo) or later *My Irish Days* (portrait 4:5, three photos).
2. Upload local photo(s), choose from optional playful prompts, add a short caption.
3. Preview and download a PNG; no account, public upload or automatic posting.
4. Optionally receive a **non-blocking** invitation to contribute a student tip once a safe submission workflow exists.

### C. Contribute a tip (research first, live publishing later)

1. Team asks real contributors targeted prompts and records permission to publish.
2. Team verifies location/basic factual claims and reviews content for safety/relevance.
3. Approved posts are entered into an initial static data file; later, a submission form with a review queue may replace manual collection.
4. No direct public self-publishing at launch.

## 6. Staged requirements

### R1 / P0 — First usable guide release (do this first)

| ID | Requirement | Acceptance criterion |
|---|---|---|
| G-01 | Branded landing page | Audience and value explained within a short screen; Explore primary CTA and Postcard secondary CTA. |
| G-02 | Public mobile browsing | Visitors can read every published tip without login on small screens and keyboard. |
| G-03 | Balanced category navigation | Six categories (3 essentials, 3 discovery); select/reset filters and see matching counts or empty state. |
| G-04 | Useful tip card/detail | Show title, recommendation, category, appropriate location (if any), date/last-reviewed information and practical context. |
| G-05 | Curated local data | Starter data is genuinely sourced with consent, or explicitly labelled demo; no invented endorsements. |
| G-06 | General advice | Transport and budgeting tips work *without* forced map markers. |
| G-07 | Basic content safeguards | No public personal addresses, private student photos, precise private location or unreviewed public posts. |
| G-08 | Accessible states | Clear navigation, semantic controls, loading/empty/error states as applicable, adequate contrast. |
| G-09 | QA | Production build and lint pass; manually test phone and desktop flows. |

**Allowed R1 shortcut:** Use clearly labelled example content during UI development and replace it before any real-user usefulness test. Do not pretend example pins are genuine student posts.

### R2 / P1 — Interactive map of place recommendations

| ID | Requirement | Acceptance criterion |
|---|---|---|
| M-01 | Actual geographic map | Correctly placed pins using real verified coordinates; usable pan/zoom on mobile. |
| M-02 | Filter synchronisation | Categories affect both pins and list; non-geographic tips stay accessible in guide. |
| M-03 | Pin detail | Selecting a pin shows a useful tip summary and access to full details. |
| M-04 | Inclusive fallback | Keyboard and screen-reader users can access equivalent places in list form. |
| M-05 | Provider hygiene | Map tiles/styles have valid usage terms, visible attribution and no exposed private secrets. |

**Gate:** Prioritise the map only after R1's content is useful and enough posts are genuinely geolocated. Map is a desired product feature, not a reason to invent data.

### R3 / P1 — Guided postcard (complete one template first)

| ID | Requirement | Acceptance criterion |
|---|---|---|
| P-01 | Simple guided flow | User enters postcard editor from home and can navigate back without losing current-session state. |
| P-02 | One template | *Greetings from Ireland*, landscape 3:2 with one photo. |
| P-03 | Upload + errors | Accept common browser-supported images, clearly handle unsupported or broken files. |
| P-04 | Caption + optional playful prompt | Short optional text (provisional 120-character max); no compulsory sharing. |
| P-05 | Preview = export | Downloaded PNG has correct proportions, clear text and no missing image. |
| P-06 | Client-side photos | No server upload, cloud storage, account, or public photo feed. |
| P-07 | Mobile usability | Tested on at least one real iPhone and Android device if available; document any HEIC limitation. |

### R4 / P2 — After observing users

- *My Irish Days* portrait 4:5 / 3-photo layout, using shared editor/export logic.
- Better crop controls **only if** participants struggle.
- More categories/search **only if** real content volume justifies it.
- Reviewed community submission flow + database **only after** manual content collection proves useful.
- Student-to-student tips linked to postcard completion (optional, never an upload prerequisite).
- Controlled customer-only features only if there's evidence people want them and actual access control is designed.

## 7. Explicit non-goals

No login, student social profiles, follows, likes, ratings, public photo feed, unmoderated community posting, direct messages, paid access, payment processing, AI-written student testimonials, live transit routing engine, public personal location tracking, or high-complexity freeform image editor.

**Not a transport authority.** Time-sensitive fares, services and app advice need timestamps and links to official sources when stated as fact.

## 8. Navigation and physical packaging

- `/` — branded landing page with Guide primary CTA, Postcard secondary.
- `/explore` — curated guide, category list; map toggle after R2.
- `/create` — postcard experience (clearly marked 'coming soon' until functional).
- `/scan` — optional packaging entry path; initially may show or redirect to public landing page.
- Avoid hardcoding temporary product name in permanent URLs. Confirm domain + QR before printing.
- A shared QR link is *not* proof of product purchase.

## 9. Quality, privacy and moderation

- Respect contrast, focus, semantic controls, zoom, reduced motion and mobile touch targets.
- No personal photos or full student names in the repo without explicit permission and a real reason.
- Do not store private photos server-side for postcard creation.
- Publish only reviewed student recommendations; clearly state contribution/review dates.
- Do not present rough cost claims or transport arrangements as guaranteed/current.
- Map pins must refer to public places, not homes or sensitive personal locations.
- If collecting tips outside the static site (e.g. interview or form), use a separate, clearly communicated consent/retention process. See `privacy-moderation.md`.

## 10. Success criteria and research gates

**Before R1:** Interview several current/informed students about advice they *actually gave* or needed. Collect ~12–18 permissioned recommendations, subject to review.

**R1 guide pilot (around five newcomers):** Observe whether they can find a grocery, transport, study, and affordable-food recommendation relevant to their circumstances. Record task success, interpretation, trust, blockers, and whether they'd use it again. Proposed learning target: at least 4/5 can find a relevant piece of advice without coaching. Not statistical validation.

**R2 map comparison:** Give a location-finding task; record whether map or list is preferred and faster, and why. Don't assert map usefulness without evidence.

**R3 postcard pilot:** Check independent completion and valid PNG download; ask what they would naturally do with the file. Do not treat 'cute!' as proof of recurring demand.

**For the pitch/CV:** Use only true metrics with dates, participant counts and methods; distinguish qualitative feedback from measured adoption.

## 11. Open questions

- Do new students trust recommendations from other students? What makes one credible?
- Which three categories are used most often when users have a concrete task?
- Are posts too shallow to be useful? What minimum detail do readers expect?
- Does the map improve wayfinding or merely add novelty and complexity?
- Would students actually contribute if no public profile/reward exists?
- Does postcard creation reinforce the guide, or do users see them as separate products?
- Does the physical keychain's QR experience improve appeal or only serve as distribution?
- What is the final brand/product name? (Pocket Post is temporary.)
