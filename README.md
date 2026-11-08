# TriByte — student guide + Pocket Post

> **Status:** Pre-build / research-backed specification, not yet a working application.  
> **Company:** TriByte  
> **Working product name:** Pocket Post (**placeholder only; not trademark-checked**)  
> **Context:** UCD Innovation Academy, IA20130  
> **Audience:** UCD Erasmus, exchange and international students, including full-degree students.

## The concept

**Discover Dublin through students who've been there.**

TriByte is a student team developing Irish-themed physical souvenirs. The digital companion has **two linked jobs**:

1. **Explore Dublin (primary):** find practical, student-written advice about settling in and discovering Dublin. Use a category-filtered list first; then a map for recommendations tied to real places.
2. **Make a postcard (companion):** create a playful downloadable visual keepsake using personal photos. The physical product's QR code introduces this experience, but access is public in the first release.

This is **not** a social network or a replacement for Google Maps. Its hypothesis is that experience-based, UCD-relevant context (cost, transport, student practicality) is more useful to newcomers than generic location listings. We have not validated that hypothesis yet.

## What we're building, in order

| Stage | Deliverable | Why it comes first |
|---|---|---|
| **R0 — Foundation** | Vite app, docs, working checks | Establish a maintainable project |
| **R1 — Testable guide** | Mobile landing page + 12–18 real, reviewed tips; category-filtered list; general advice | Test usefulness before building complex UI |
| **R2 — Map** | Real geographic pins for place-specific tips; accessible list remains available | Validate whether location navigation adds value |
| **R3 — Postcard** | Guided 3:2 photo postcard + preview + client-side PNG download | Connect the souvenir to a personal creative experience |
| **R4 — Polish** | Second 4:5 template; improvements supported by user tests | Add depth after core flows work |

**Do not build** accounts, public self-service posting, automatic publication, comments, likes, ratings, cloud photo albums, payments or customer-only unlocking yet. A contribution workflow is a *future experiment*, with human review required before anything is public.

## Repo status: start here

If you have **only created the GitHub repository**, you haven't done anything wrong. You do not need a second repo. Clone the existing one, add these docs, and scaffold the app **inside it**. See [setup instructions](docs/setup.md).

If you already ran the Vite command and have a `tribyte-web` folder, keep it. Follow the alternate steps in `docs/setup.md`; don't scaffold a duplicate project.

## Documentation map

- [Setup](docs/setup.md) — From a new GitHub repo to a running app
- [Product requirements](docs/PRD.md) — Goals, user journeys, P0/P1 requirements and non-goals
- [Build plan](docs/build-plan.md) — Small milestones and commit suggestions
- [Codex prompts](docs/codex-prompts.md) — One task at a time, starting with documentation review
- [Decisions](docs/decisions.md) — Confirmed versus hypothetical product choices
- [Content model](docs/content-guide.md) — Categories, posts, map rules and cold-start plan
- [Technical architecture](docs/technical-architecture.md) — Suggested modules, stack and map trade-offs
- [Privacy and moderation](docs/privacy-moderation.md) — Public content, photo privacy and consent
- [Research and testing](docs/user-testing.md) — Interviews, tasks, success measures and logs
- [Brand direction](docs/branding.md) — Visual system shared by packaging and website
- [Portfolio evidence](docs/portfolio-log.md) — Traceable individual contributions for recruitment
- [Agent instructions](AGENTS.md) — Rules and guardrails for Codex

## Working principles

- **Real students, real content:** example copy and mock map pins must never be presented as genuine recommendations.
- **One complete useful slice at a time:** first let students *find* useful tips; then add a map; then build the postcard maker.
- **Practicality before polish:** functionality and feedback matter more than decorative animations.
- **Portable, private postcards:** image files stay in the browser for the postcard creator; users download them and share on their preferred platforms.
- **Honest ownership:** TriByte is a group project. Record individual contributions and never invent usage metrics, testimonials or tests.
