import { useRef, useState, type Ref } from 'react'
import { approvedTips, type TipCategory } from '../../data/tips'
import { filterTips, topicLabels } from './filterTips'

const dateFormatter = new Intl.DateTimeFormat('en-IE', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
})
const topicOrder: TipCategory[] = ['transport', 'groceries', 'budgeting', 'food', 'study', 'explore']

export function Guide({ headingRef }: { headingRef: Ref<HTMLHeadingElement> }) {
  const [category, setCategory] = useState<TipCategory | 'all'>('all')
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const visibleTips = filterTips(approvedTips, category, query)
  // Keep topics with approved content available even when a search has no matches.
  const availableTopics = topicOrder.filter((id) => approvedTips.some((tip) => tip.category === id))

  function clearSearch() {
    setQuery('')
    searchRef.current?.focus()
  }

  return (
    <section className="guide" aria-labelledby="guide-title">
      <a href="#top">← Back to home</a>
      <header className="guide-header">
        <h1 id="guide-title" ref={headingRef} tabIndex={-1}>Your student guide</h1>
        <p>Real tips from students on getting around, saving money and exploring the city.</p>
      </header>

      <div className="guide-search">
        <label htmlFor="guide-search">Find a student tip</label>
        <div className="guide-search-controls">
          <input ref={searchRef} id="guide-search" type="search" value={query}
            placeholder="Search groceries, Leap Card, cafés..."
            onChange={(event) => setQuery(event.target.value)} aria-controls="guide-results" />
          {query && <button type="button" onClick={clearSearch}>Clear search</button>}
        </div>
      </div>

      <div className="guide-filters" role="group" aria-label="Filter tips by topic">
        <button type="button" aria-pressed={category === 'all'} onClick={() => setCategory('all')}>All</button>
        {availableTopics.map((id) => (
          <button type="button" key={id} aria-pressed={category === id} onClick={() => setCategory(id)}>
            {topicLabels[id]}
          </button>
        ))}
      </div>

      <p className="guide-count" role="status" aria-live="polite" aria-atomic="true">
        {visibleTips.length} {visibleTips.length === 1 ? 'tip' : 'tips'}
        {category !== 'all' ? ` in ${topicLabels[category]}` : ''}{query.trim() ? ` matching “${query.trim()}”` : ''}
      </p>
      <div id="guide-results">
        {visibleTips.length === 0 ? (
          <div className="guide-empty">
            <h2>{approvedTips.length === 0 ? 'Student tips are on their way' : 'No tips found'}</h2>
            <p>{approvedTips.length === 0 ? 'We’ll share advice once it has been reviewed and approved.' : 'Try a different word or choose another topic.'}</p>
            {query && <button type="button" onClick={clearSearch}>Clear search</button>}
            {category !== 'all' && <button type="button" onClick={() => setCategory('all')}>Show all topics</button>}
          </div>
        ) : (
          <ul className="tip-list">
            {visibleTips.map((tip) => (
              <li key={tip.id}>
                <article className="tip-card" aria-labelledby={`tip-${tip.id}`}>
                  <p className="tip-category">{topicLabels[tip.category]}</p>
                  <h2 id={`tip-${tip.id}`}>{tip.title}</h2>
                  <div className="tip-postcard">
                    <p>{tip.body}</p>
                  </div>
                  {tip.kind === 'place' && <p><strong>{tip.place.name}</strong><br />{tip.place.address}</p>}
                  {tip.officialSourceUrl && <p><a href={tip.officialSourceUrl}>Check the official source</a></p>}
                  <details>
                    <summary aria-label={`Read more about the source of ${tip.title}`}>Read more</summary>
                    <div className="tip-details">
                      <p className="tip-meta">Source: {tip.sourceRecord}</p>
                      <p className="tip-meta">Submitted: <time dateTime={tip.submittedAt}>{dateFormatter.format(new Date(`${tip.submittedAt}T00:00:00Z`))}</time></p>
                    </div>
                  </details>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="guide-disclaimer">Student recommendations are based on personal experiences. Check official sources for changing prices and transport details.</p>
    </section>
  )
}
