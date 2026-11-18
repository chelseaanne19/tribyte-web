export const categories = [
  { id: 'groceries', label: 'Groceries', group: 'Settling in' },
  { id: 'transport', label: 'Transport', group: 'Settling in' },
  { id: 'budgeting', label: 'Budgeting & student life', group: 'Settling in' },
  { id: 'food', label: 'Affordable food & cafés', group: 'Discovering Dublin' },
  { id: 'study', label: 'Study spots', group: 'Discovering Dublin' },
  { id: 'explore', label: 'Things to do & hidden gems', group: 'Discovering Dublin' },
] as const

export type TipCategory = typeof categories[number]['id']

type TipContent = {
  id: string
  title: string
  body: string
  category: TipCategory
  practicalNote: string
  reviewedAt: string // ISO YYYY-MM-DD
  officialSourceUrl?: string
  // Anonymous stable response ID: reuse for every tip from the same survey response.
  contributorId: string
  sourceRecord: string // Public-safe provenance only; never raw responses or contact details.
  permission: 'approved-public-copy'
  submittedAt: string
  publicAttribution?: string
}

export type Tip = TipContent & (
  | { kind: 'general'; place?: never }
  | {
      kind: 'place'
      place: {
        name: string
        address: string // Public location only.
        // Optional for the list. A future map may use only this verified bundle.
        coordinates?: {
          latitude: number
          longitude: number
          verificationSourceUrl: string
          verifiedAt: string
        }
      }
    }
)

// Public copy approved by the project owner on 2026-11-17.
// Both survey respondents permitted review, light editing and publication.
// Reuse response IDs: these 11 tips come from TWO contributors, not eleven.
// No exact branches/coordinates were supplied; these are unpinned general tips.
// Raw responses and private permission evidence remain outside this repository.
export const approvedTips: readonly Tip[] = [
  {
    "id": "apple-maps",
    "title": "Planning journeys with Apple Maps",
    "body": "I use Apple Maps to compare possible routes and choose one that suits me. In my experience, live delay information can be limited.",
    "category": "transport",
    "kind": "general",
    "practicalNote": "Personal experience, not a guarantee of live service information.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-11",
    "contributorId": "response-01",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Anonymous"
  },
  {
    "id": "leap-options",
    "title": "Check your Leap Card options early",
    "body": "A personalised student or young-adult Leap Card helped me when I arrived. Check which card you’re eligible for, and use live service updates when travelling.",
    "category": "transport",
    "kind": "general",
    "practicalNote": "Check current eligibility and service information with the relevant provider. No fare discount is asserted here.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-11",
    "contributorId": "response-01",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Anonymous"
  },
  {
    "id": "budget-groceries",
    "title": "Budget grocery shopping",
    "body": "I usually shop at Aldi or Lidl when trying to save money.",
    "category": "groceries",
    "kind": "general",
    "practicalNote": "A personal shopping preference; no particular branch or price is specified.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-11",
    "contributorId": "response-01",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Anonymous"
  },
  {
    "id": "loyalty-discounts",
    "title": "Ask about discounts",
    "body": "Join the loyalty schemes of shops you regularly visit, and ask at the till whether they offer student discounts.",
    "category": "budgeting",
    "kind": "general",
    "practicalNote": "Offers and eligibility vary. Ask the shop about its current terms.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-11",
    "contributorId": "response-01",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Anonymous"
  },
  {
    "id": "food-suggestions",
    "title": "Food suggestions to explore",
    "body": "For meals in Dublin, I’d suggest looking into Chiya, Shawarma Company, Abrakebabra, Pocha near Jervis, and Xian for a spice bag.",
    "category": "food",
    "kind": "general",
    "practicalNote": "Exact branches were not supplied. Check the venue before visiting; no halal certification or current menu claim is made.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-11",
    "contributorId": "response-01",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Anonymous"
  },
  {
    "id": "prepare-leap",
    "title": "Prepare before arriving",
    "body": "I’d recommend sorting out a Leap Card before arriving in Ireland.",
    "category": "transport",
    "kind": "general",
    "practicalNote": "A student’s preparation tip. Check current ordering and eligibility options with the provider.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-16",
    "contributorId": "response-02",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Leanne"
  },
  {
    "id": "grocery-offers",
    "title": "Look for grocery offers",
    "body": "I shop at Centra for its money-saving offers.",
    "category": "groceries",
    "kind": "general",
    "practicalNote": "No branch or current promotion is specified. Check the offers available when shopping.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-16",
    "contributorId": "response-02",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Leanne"
  },
  {
    "id": "dundrum-discounts",
    "title": "Ask about student discounts",
    "body": "I recommend checking for student discounts when shopping in Dundrum.",
    "category": "budgeting",
    "kind": "general",
    "practicalNote": "Ask individual shops about current offers and eligibility.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-16",
    "contributorId": "response-02",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Leanne"
  },
  {
    "id": "chimac",
    "title": "CHIMAC",
    "body": "I enjoyed the chicken Caesar wrap at CHIMAC.",
    "category": "food",
    "kind": "general",
    "practicalNote": "A personal meal experience. Exact branch was not supplied; menus and availability can change.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-16",
    "contributorId": "response-02",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Leanne"
  },
  {
    "id": "caffe-nero",
    "title": "Caffè Nero",
    "body": "I liked studying at Caffè Nero for its friendly staff, coffee and pastries. The café I visited had Wi-Fi and sockets.",
    "category": "study",
    "kind": "general",
    "practicalNote": "The contributor did not specify the branch. Wi-Fi and sockets are a report about their visit, not a guarantee at every café.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-16",
    "contributorId": "response-02",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Leanne"
  },
  {
    "id": "arrival-budget",
    "title": "Prepare a budget",
    "body": "Try to save before arriving: I’ve found Dublin expensive. Social media can help you find restaurant offers.",
    "category": "budgeting",
    "kind": "general",
    "practicalNote": "Personal budgeting advice. Check any advertised offer directly with the restaurant.",
    "reviewedAt": "2026-11-17",
    "submittedAt": "2026-11-16",
    "contributorId": "response-02",
    "sourceRecord": "Consented student survey; lightly edited public copy approved 17 November 2026.",
    "permission": "approved-public-copy",
    "publicAttribution": "Leanne"
  }
]
