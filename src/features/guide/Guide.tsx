import { useState, type Ref } from 'react'
import { approvedTips, categories, type TipCategory } from '../../data/tips'

const dateFormatter = new Intl.DateTimeFormat('en-IE', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
})

export function Guide({ headingRef }: { headingRef: Ref<HTMLHeadingElement> }) {
  const [category, setCategory] = useState<TipCategory | 'all'>('all')
  const tips = approvedTips
  const visibleTips = tips.filter((tip) => category === 'all' || tip.category === category)
  const selectedLabel = categories.find((item) => item.id === category)?.label

  return (
    <section className="guide" aria-labelledby="guide-title">
      <a href="#top">← Back to home</a>
      <p className="status">Aon Scéal · UCD & Dublin</p>
      <h1 id="guide-title" ref={headingRef} tabIndex={-1}>Your student guide</h1>
      <p className="guide-intro">Settling in or heading out? Browse six topics for student life around UCD and Dublin.</p>
      <aside className="guide-notice" aria-label="Content status">
        <p><strong>Verified student advice is still being collected.</strong> No student recommendations are published yet.</p>
      </aside>

      <fieldset className="guide-filters">
        <legend>Filter by category</legend>
        <button type="button" aria-pressed={category === 'all'} onClick={() => setCategory('all')}>All categories ({tips.length})</button>
        {['Settling in', 'Discovering Dublin'].map((group) => (
          <div className="filter-group" key={group}>
            <p>{group}</p>
            <div className="filter-buttons">
              {categories.filter((item) => item.group === group).map((item) => (
                <button type="button" key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>
                  {item.label} ({tips.filter((tip) => tip.category === item.id).length})
                </button>
              ))}
            </div>
          </div>
        ))}
      </fieldset>

      <p className="guide-count" role="status">{visibleTips.length} reviewed tips · {selectedLabel ?? 'All categories'}</p>
      {visibleTips.length === 0 ? (
        <div className="guide-empty">
          <h2>No reviewed tips{selectedLabel ? ` for ${selectedLabel.toLowerCase()}` : ''} yet</h2>
          <p>We’ll add advice here after it has been collected, checked and approved for sharing.</p>
          {category !== 'all' && <button type="button" onClick={() => setCategory('all')}>Reset to all categories</button>}
        </div>
      ) : (
        <ul className="tip-list">
          {visibleTips.map((tip) => (
            <li key={tip.id}>
              <article className="tip-card">
                <p className="tip-meta">{categories.find((item) => item.id === tip.category)?.label} · {tip.kind === 'place' ? 'Public place' : 'General tip'}</p>
                <h2>{tip.title}</h2>
                <p>{tip.body}</p>
                <details>
                  <summary>Practical details & source</summary>
                  <p>{tip.practicalNote}</p>
                  {tip.kind === 'place' && <p><strong>{tip.place.name}</strong><br />{tip.place.address}</p>}
                  <p>Source: {tip.sourceRecord}</p>
                  {tip.publicAttribution && <p>Shared by: {tip.publicAttribution}</p>}
                  {tip.officialSourceUrl && <p><a href={tip.officialSourceUrl}>Check the official source</a></p>}
                </details>
                <p className="tip-meta">Last reviewed: <time dateTime={tip.reviewedAt}>{dateFormatter.format(new Date(`${tip.reviewedAt}T00:00:00Z`))}</time></p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
