import { categories, type Tip, type TipCategory } from '../../data/tips.ts'

export const topicLabels: Record<TipCategory, string> = {
  transport: 'Transport', groceries: 'Groceries', budgeting: 'Budgeting',
  food: 'Food', study: 'Study spots', explore: 'Things to do',
}

function normalise(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('en-IE')
}

export function filterTips(tips: readonly Tip[], category: TipCategory | 'all', query: string) {
  const terms = normalise(query).trim().split(/\s+/).filter(Boolean)
  return tips.filter((tip) => {
    if (category !== 'all' && tip.category !== category) return false
    const text = normalise([
      tip.title, tip.body, tip.practicalNote, topicLabels[tip.category],
      categories.find((item) => item.id === tip.category)?.label,
      tip.kind === 'place' ? `${tip.place.name} ${tip.place.address}` : '',
    ].join(' '))
    return terms.every((term) => text.includes(term))
  })
}

export function tipPreview(body: string) {
  if (body.length <= 135) return body
  const excerpt = body.slice(0, 135)
  const lastSpace = excerpt.lastIndexOf(' ')
  return `${excerpt.slice(0, lastSpace > 90 ? lastSpace : 135).trimEnd()}…`
}
