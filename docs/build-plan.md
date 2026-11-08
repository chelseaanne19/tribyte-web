# Build plan — small, testable Codex milestones

**Current state:** GitHub repo created; application may not be scaffolded. **Start with M0.**  
**Rule:** Do not request the entire platform in one Codex prompt. Ship one usable vertical slice at a time.

| Milestone | Deliverable | Verify before moving on | Example commit |
|---|---|---|---|
| **M0 — Local foundation** | Clone existing repo; scaffold React + TypeScript + Vite + ESLint; add docs | `npm run dev`, `npm run build`, `npm run lint` work | `chore: scaffold app and document product scope` |
| **M1 — Branded front door** | Responsive homepage, Guide and Postcard CTAs; guide placeholder | Phone + desktop; links work; no invented functionality | `feat: add TriByte landing page` |
| **M2 — Useful guide list** | Six categories; curated typed local dataset; filtering; tip details; useful general tips | Genuine or *labelled demo* content; filter + reset work; keyboard accessible | `feat: add curated student tips guide` |
| **M2b — Test with students** | Five newcomer tasks on list experience; collect observations | Test log and one prioritised change | `docs: record guide usability findings` |
| **M3 — Map** | Interactive map for verified public place coordinates; list alternative; pin-detail links | Pins correct; filter sync; attribution visible; no false markers | `feat: add location-based tips map` |
| **M4 — Postcard vertical slice** | 3:2 template; one photo; caption; preview; PNG download | Photo never uploaded; export visually matches preview; browser tested | `feat: create landscape postcard generator` |
| **M5 — Pilot and polish** | Usability fixes from real tests; optional second 4:5 template if warranted | Re-test improvements, record real results | `fix: address student pilot feedback` |
| **M6 — Contributions (not approved yet)** | Consider a reviewed submission queue and storage only after evidence of demand | Separate PRD and privacy review required | No implementation until explicitly scoped |

## M0 checklist — if you have only a GitHub repo

See `docs/setup.md`. Do not create a second repository, and don't run `npm create vite ...` into a separate folder unless you intentionally want to move files later.

- [ ] Repository cloned to your computer (or existing Vite folder connected to it)
- [ ] Docs copied into repository root
- [ ] App runs locally and includes ESLint
- [ ] `node_modules/` ignored by git
- [ ] Build/lint run and output recorded
- [ ] Initial small commit pushed intentionally by you

## Scope gates

**M1 → M2:** A visitor can navigate to the guide from the landing page. No user submissions yet.

**M2 → M3:** Have enough consented, verified place recommendations to justify a map, and at least one task where location matters. If not, improve content quality and list utility first.

**M3 → M4:** Guide works as a complete, useful experience. Postcard can then be implemented as a separate feature, not a blocker to guide usability.

**M4 → M5:** One fully working template beats two broken templates. Only add portrait when export, error handling and mobile checks pass.

## Git habits (to discuss in internships)

- Make small commits for a single change. `feat:`, `fix:`, `docs:`, `chore:` help communicate intent.
- For each feature: write acceptance criteria → implement → build/lint → manually test → inspect diff → commit.
- Optional branches: `feat/guide-list`, `feat/map`, `feat/postcard`. No need for elaborate processes as a solo beginner.
- Never commit test participant names, private photos, credentials or `node_modules`.
- Record why you chose a map over list, or delayed a backend, in `docs/decisions.md`.

## Recommended first three actions

1. Follow `docs/setup.md` to prepare your **existing** repository.
2. Run **Prompt 0** in `docs/codex-prompts.md` (inspection only).
3. Run **Prompt 1** (landing page only), check it yourself, then commit.
