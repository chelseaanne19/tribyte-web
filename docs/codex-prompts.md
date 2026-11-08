# Codex prompts — copy one at a time

Keep requests small. Paste a prompt **only after the preceding milestone works**. Codex should explain changes and checks before you make a commit. The project might initially contain only documentation, so start with `docs/setup.md`.

## Prompt 0 — Inspect the existing repository (first)

```text
Read AGENTS.md, README.md, docs/PRD.md, docs/decisions.md,
docs/build-plan.md, and docs/technical-architecture.md.

Context: I am a second-year CS student. TriByte is our company;
Pocket Post is only a placeholder product name. The website has two
features: a practical UCD/Dublin student guide (primary) and a guided
postcard generator (secondary). We want a working, tested project,
not a large feature set.

Inspect the repo and tell me whether Vite/React/TypeScript and ESLint
are already set up. If not, give me the exact next local setup steps
for this *existing* repo. Do not implement features, install anything,
commit, or push. Explain the key files and scripts in beginner terms.
If npm scripts are present, run build and lint and report exact results.
```

**Done when:** You understand what is already present and the app scaffold is ready.

## Prompt 1 — Branded landing page (M1)

```text
Read AGENTS.md and docs/PRD.md. Implement M1 only:
- Mobile-first TriByte homepage with the working product name Pocket Post.
- Retro Irish × contemporary travel journal visual direction.
- Explain: Discover Dublin through students who've been there.
- Primary CTA: Explore student tips; secondary CTA: Make a postcard.
- Both links must lead somewhere honest (a clearly labelled placeholder
  is okay before those experiences are implemented).
- Use simple accessible components and CSS; include visual focus states.

Do not add a map, mock student reviews presented as real, a database,
accounts, photos, analytics, or an editor. Before editing, give a
small file plan. After edits, run the available build/lint checks,
explain how I can test desktop/mobile, list changed files, and
suggest ONE focused commit message. Do not commit or push.
```

**Done when:** Primary and secondary navigation works and small-phone layout is readable.

## Prompt 2 — Curated guide, no map yet (M2)

```text
Read docs/content-guide.md, docs/privacy-moderation.md, and PRD.
Implement the M2 guide only:
- Six balanced categories (groceries, transport, budgeting,
  affordable food, study spots, things to do).
- A typed local data model (place or general tip), category filters,
  helpful empty state, clear details, and last-reviewed dates.
- Use ONLY supplied real approved data. If none exists, create
  clearly labelled fictional UI demo fixtures in a separate file
  that cannot be confused with verified student advice.
- Make the layout mobile-first, accessible and readable.

No map, geocoding, network submissions, admin UI, authentication,
backend, database or postcard features. Run build/lint. Explain
why your data structure supports both a list and a future map.
Provide manual verification steps and a commit suggestion.
```

**Done when:** A newcomer can browse and filter list recommendations, with explicit provenance.

## Prompt 3 — Optional map after content/guide test (M3)

```text
Read docs/PRD.md, docs/content-guide.md and
 docs/technical-architecture.md. Implement M3 only after M2 works
and the place tips have VERIFIED public coordinates.
Add a mobile-friendly interactive map with category filters and
clickable pin summaries linked to existing tip details.
General tips MUST remain in the list and must not be assigned a pin.
Keep equivalent accessible list controls. Check map-tile terms,
visible attribution and provider setup; explain any new dependency.
No invented pins, address guesses, accounts, posting, or database.
Run build/lint and provide a small manual map/list QA checklist.
```

**Done when:** Verified places map correctly and there is an equivalent non-map path.

## Prompt 4 — One working postcard (M4)

```text
Read docs/PRD.md and AGENTS.md. Implement ONE guided postcard
vertical slice: landscape 3:2, 1 locally selected image, optional
caption, preview, and PNG export in the browser.
Use no backend and never upload photos. Keep the controls simple,
mobile accessible, and handle unsupported formats gracefully.
Make downloaded PNG match preview; provide a way to edit without
losing session progress. Test with a real photo and report results.
Do not build the portrait template, stickers, social feed, account,
public posting or cloud storage. Do not commit.
```

**Done when:** A student can download a valid image on a phone.

## Prompt 5 — Second template only if warranted (M5)

```text
Implement a 4:5 portrait travel-journal postcard using three fixed
photo slots and shared export logic. Keep existing landscape
behaviour unchanged. Explain tests for both aspect ratios.
Do not add freeform editing or additional unrelated features.
```

## Prompt for understanding generated code

```text
Explain the last feature as if I'm new to React and CSS.
Which three files matter most? How does state flow through them?
What could break? How did you verify it? Give me one small piece
I could try changing myself, plus the command to check it.
```

## Prompt for review before a Git commit

```text
Review the current diff against the milestone's acceptance criteria.
Find unrelated changes, missing edge cases, accessibility problems,
privacy risks and obvious bugs. Run existing checks and report actual
results. Do not commit. Suggest a concise commit message.
```
