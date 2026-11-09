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
  sourceRecord: string
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
        latitude: number
        longitude: number
        verificationSourceUrl: string
        verifiedAt: string
      }
    }
)

// Add only reviewed, permissioned public copy here. Keep consent evidence private.
export const approvedTips: readonly Tip[] = []

