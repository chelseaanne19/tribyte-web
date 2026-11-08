import { useEffect, useRef, useState } from 'react'
import './App.css'

// Replace the contents of these decorative slots with original artwork when ready.
function HandwrittenNote() {
  return <p className="handwritten artwork-slot artwork-slot--note" aria-hidden="true">A few notes from Ireland —</p>
}

function PostalMotif() {
  return (
    <div className="postal-motif artwork-slot artwork-slot--stamp" aria-hidden="true">
      <div className="postmark"><span>TRIBYTE</span><b>✳</b><span>DUBLIN · IRELAND</span></div>
    </div>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const hasMounted = useRef(false)
  const isGuide = hash === '#explore'
  const isPlaceholder = isGuide || hash === '#create'

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    // Announce navigation changes without focusing the heading on initial load.
    if (hasMounted.current) {
      headingRef.current?.focus({ preventScroll: true })
      window.scrollTo(0, 0)
    }
    hasMounted.current = true
  }, [isPlaceholder, isGuide])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell" id="top">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="TriByte home"><span className="logo-placeholder">TriByte</span><span className="logo-caption">Logo placeholder</span></a>
          <p className="postal-heading vintage-title" lang="ga">aon scéal</p>
          <PostalMotif />
        </header>

        <main id="main" tabIndex={-1}>
          {isPlaceholder ? (
            <section className="placeholder" aria-labelledby="destination-title">
              <p className="status">Coming soon</p>
              <h1 id="destination-title" ref={headingRef} tabIndex={-1}>
                {isGuide ? 'Your student guide' : 'Make a postcard'}
              </h1>
              <p>{isGuide
                ? 'Practical UCD and Dublin tips will appear here once they’ve been collected, reviewed and approved for sharing. No recommendations are published yet.'
                : 'A guided photo postcard creator is planned for a later release. The editor and downloads aren’t available yet.'}</p>
              <a className="button button-secondary" href="#top"><span className="button-label">Back to home</span> <span className="button-stamp" aria-hidden="true">✳</span></a>
            </section>
          ) : (
          <section className="hero" aria-labelledby="welcome-title">
            <div className="hero-copy">
              <HandwrittenNote />
              <div className="dictionary-entry">
                <h1 id="welcome-title" ref={headingRef} tabIndex={-1} lang="ga">Aon Scéal?</h1>
                <p className="dictionary-meta"><span aria-label="Approximate pronunciation">ayn shkale</span> <span aria-hidden="true">·</span> Irish <span lang="ga">(Gaeilge)</span></p>
                <p className="dictionary-meaning">“Any news?” <span aria-hidden="true">/</span> “What's the story?”</p>
                <p className="dictionary-explanation">A friendly Irish way to ask what’s new — and an invitation to share a story.</p>
              </div>
              <div className="hero-discovery">
              <p className="intro">Discover Dublin through the students who know it best. Find local tips, favourite spots and stories worth sharing.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#explore"><span className="button-label">Explore student tips</span> <span className="button-stamp" aria-hidden="true">✳</span></a>
                <a className="button button-secondary" href="#create"><span className="button-label">Make a postcard</span> <span className="button-stamp" aria-hidden="true">✳</span></a>
              </div>
              <p className="availability">In the making: the guide and postcard creator are coming soon.</p>
              </div>
            </div>
          </section>

          )}
        </main>

        <footer className="site-footer">
          <p>TriByte · Aon Sceal · Project for module IA20130</p>
        </footer>
      </div>
    </>
  )
}

export default App
