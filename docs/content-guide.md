# Student tips: content model, categories and seed plan

## Why content quality is the product

People already have generic maps. TriByte should answer student-specific questions: *Can I afford it? Is it practical from UCD? What should I know before going?* One detailed, recent first-hand tip is more valuable than ten generic one-line pins.

## Six categories — equal starting representation

| Key | Label | Type examples | Starter prompt |
|---|---|---|---|
| `groceries` | Groceries | Place / general | Where do you shop for a reasonable weekly budget? |
| `transport` | Transport | General / public place | What transport mistake do you wish you'd avoided? |
| `budgeting` | Budgeting & student life | General / place | What saved you money as a new student? |
| `food` | Affordable food & cafés | Place | Where's your go-to affordable meal? |
| `study` | Study spots | Place | Where do you actually get work done? |
| `explore` | Things to do & hidden gems | Place | What's an affordable Dublin discovery worth sharing? |

**Collection target:** 12–18 approved contributions, roughly 2–3 per category, before the guide usefulness test. Do not fill gaps with invented public reviews. Empty categories should be honestly labelled until real content exists.

## Recommendation quality checklist

Every tip should answer:

1. **What** is being recommended (short, searchable title)?
2. **Why** should another student care (firsthand practical detail)?
3. **For whom / when** is it useful (e.g. new arrival, studying near UCD)?
4. **Where** (only for a public place, based on verified details)?
5. **How current** is it (submitted date, reviewed date; cost is approximate and dated)?
6. **Who can publish it** (contributor has consented to the exact public version)?

Keep tips short enough for mobile; suggest **60–500 characters** for body content as a starting editorial limit, not a hard product rule.

## Suggested TypeScript shape (design proposal, not implemented)

```ts
type TipCategory =
  | 'groceries' | 'transport' | 'budgeting'
  | 'food' | 'study' | 'explore';

type Tip = {
  id: string;
  title: string;
  body: string;
  category: TipCategory;
  kind: 'place' | 'general';
  // Required only when kind is 'place'; coordinates must be verified.
  place?: {
    name: string;
    latitude: number;
    longitude: number;
    address?: string; // public business/institution address only
  };
  publicAttribution?: string; // e.g. "Exchange student" or approved alias
  submittedAt: string; // ISO YYYY-MM-DD
  reviewedAt: string;  // ISO YYYY-MM-DD
  costNote?: string;   // explicitly approximate and dated
  transportNote?: string;
  officialSourceUrl?: string; // for changeable factual claims
};
```

**Important constraints:**

- A `general` tip must have **no pin**; a `place` tip must have **verified public coordinates** to display on the map.
- Never make up a rating, price, student quote, or review count.
- Initial data is a *read-only, reviewed* local TypeScript/JSON module. Keep private permission evidence **out of the public repo**.
- If UI needs filler examples, isolate them in `demoTips` and mark them **fictional demonstration content**. Never mix with the published approved dataset.
- A submitted, unreviewed post should never reach the public build.

## Initial content workflow (no backend)

1. Ask a real student a targeted question; do not ask only for 'anything you'd recommend'.
2. Record their answer privately, and ask for permission to publish **an edited public version** (and optional alias/photo separately).
3. Confirm a place exists and pin a public address only. Check high-risk/time-sensitive facts against official sources when feasible; record when checked.
4. Rewrite lightly for clarity with contributor permission; avoid changing meaning.
5. Publish approved public copy into a static dataset. Record `submittedAt` and `reviewedAt`.
6. Recheck dated claims periodically; remove stale entries if no longer defensible.

## Why map + list both matter

- **Map:** discovering public cafés, supermarkets, study locations, attractions; 'what's close to campus?'
- **List / guide:** transport concepts, fare advice, grocery budgeting, app suggestions, and all tips accessible with keyboard or assistive technology.
- All map posts also appear in list. General tips never disappear just because the map filter is active.

## Prompt bank for later submissions

**Playful story hooks:** 'What did you do instead of studying?', 'Your favourite unexpected Dublin discovery?', 'What made a rainy day better?'  
**Practical hooks:** 'Where did you save money on groceries?', 'What's one Leap Card or public transport tip?', 'Where's an affordable meal near UCD?', 'What's a study spot you'd return to?'  
**Bridge prompt:** 'What's one thing a new student could learn from this experience?'

Storytelling is the *style*. Practicality is the *purpose*.
