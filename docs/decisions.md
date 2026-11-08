# Decision log — confirmed, provisional, deferred

The log is **not** proof of user demand. Record changes and their rationale as the product evolves.

| Date | Decision | Status | Rationale / revisit trigger |
|---|---|---|---|
| 2026-11-07 | Company name is TriByte | **Confirmed** | Team name, distinct from product. |
| 2026-11-07 | Pocket Post as product/collection label | **Placeholder** | Do not assume domain or trademark availability. |
| 2026-11-07 | Retro Irish × modern travel journal | **Confirmed direction** | Warm, playful physical-digital identity, not an emotional farewell product. |
| 2026-11-07 | Branded homepage before tools | **Confirmed** | QR scan should introduce the brand; users then choose an action. |
| 2026-11-07 | Public/free access | **Confirmed for MVP** | Enables real-user testing; customer-only unlocking might be tested later. |
| 2026-11-07 | Guided postcard creator, not freeform editor | **Confirmed** | Lower technical overhead and clearer usability. |
| 2026-11-07 | Two postcard formats: 3:2 and 4:5 | **Planned** | Both styles appealing; build one first and validate. |
| 2026-11-07 | Browser-only postcard images | **Confirmed for MVP** | No image server needed, more straightforward privacy. |
| 2026-11-08 | Community tips become a central product feature | **Confirmed direction** | Practical utility may solve a stronger problem than generic postcards. Must validate. |
| 2026-11-08 | Map is primarily for **practical recommendations** | **Confirmed direction** | Location pins should help find useful public places, not act as generic photo feed. |
| 2026-11-08 | **Balanced C**: settling-in + discovering Dublin | **Confirmed** | Three essentials topics and three exploration topics; initial coverage near UCD/Dublin. |
| 2026-11-08 | Guide **primary** CTA, postcard **secondary** | **Provisional UX choice** | Recommended to support utility-first concept; test against student behaviour. |
| 2026-11-08 | List-first, then map for verified place tips | **Provisional build sequence** | Maps don't fix the cold-start problem; reduces upfront complexity. |
| 2026-11-08 | Initial content manually collected/reviewed | **Confirmed for pilot** | Better safety, low technical overhead, traceable provenance. |
| 2026-11-08 | Public user-submission form and database | **Deferred** | Only if actual demand, staffing and moderation workflow are established. |
| 2026-11-08 | React + TypeScript + Vite + ESLint, simple CSS | **Working technical choice** | Good learning and deployment path; change only with clear reason. |
| 2026-11-08 | Stable `/scan` packaging URL | **Planned** | Useful entry point, not proof of purchase. Confirm final URL before printing. |

## Open questions

1. Which categories solve a *specific current need* most often?
2. Does the map outperform the list for locating recommendations?
3. Do contributors want names shown, pseudonyms or anonymity?
4. How will TriByte maintain content accuracy after the class/project ends?
5. Does guide-first UX meaningfully reinforce souvenir sales and postcard use?

## New decision template

**Date:**  
**Question / options:**  
**Decision and status:**  
**Why (evidence vs assumption):**  
**Trade-off:**  
**Revisit when:**
