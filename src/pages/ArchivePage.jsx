import { useState, useEffect, useMemo } from 'react'
import { articles, categories } from '../data/content'
import ArticleCard from '../components/ArticleCard.jsx'
import Footer from '../components/Footer.jsx'
import './ArchivePage.css'

export default function ArchivePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Writing Archive | Harshika Gahlot'
    const timer = setTimeout(() => setRevealed(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = activeCategory === 'all' || a.category === activeCategory
      const matchSearch = searchQuery.trim() === '' ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  const allCategories = [
    { id: 'all', label: 'All' },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ]

  const counts = useMemo(() => {
    const c = { all: articles.length }
    categories.forEach((cat) => {
      c[cat.id] = articles.filter((a) => a.category === cat.id).length
    })
    return c
  }, [])

  return (
    <div className="archive-page">
      <main id="main-content">
        {/* Archive Header — editorial */}
        <header className={`archive-hero ${revealed ? 'revealed' : ''}`}>
          <div className="container">
            <div className="archive-hero__inner">
              <div className="archive-hero__bg-word" aria-hidden="true">Archive</div>

              <div className="archive-hero__content">
                <span className="label label-lavender">The Writing Archive</span>
                <div className="divider" />
                <h1 className="archive-hero__title">An Archive of Ideas</h1>
                <p className="archive-hero__sub">
                  A collection of thoughts, experiments, observations, and stories shaped into words.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Filter + Search Bar */}
        <div className="archive-controls">
          <div className="container archive-controls__inner">
            {/* Search */}
            <div className="archive-search">
              <label htmlFor="archive-search-input" className="sr-only">Search articles</label>
              <svg className="archive-search__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <input
                id="archive-search-input"
                type="search"
                placeholder="Search by title or keyword…"
                className="archive-search__input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  className="archive-search__clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Category filters */}
            <div className="archive-filters" role="group" aria-label="Filter by category">
              {allCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                  <span className="filter-btn__count">{counts[cat.id] || 0}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <section className="archive-grid-section" aria-label="Article grid">
          <div className="container">
            {filtered.length === 0 ? (
              <div className="archive-empty" role="status">
                <p className="archive-empty__text">
                  No articles found{searchQuery ? ` for "${searchQuery}"` : ''}.
                </p>
                <button className="btn btn-outline" onClick={() => { setSearchQuery(''); setActiveCategory('all') }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <p className="archive-results label" role="status" aria-live="polite">
                  {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                  {activeCategory !== 'all' && ` in ${allCategories.find(c => c.id === activeCategory)?.label}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                <div className="archive-grid">
                  {filtered.map((article, i) => (
                    <div
                      key={article.id}
                      className="archive-grid__item"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <ArticleCard article={article} variant="standard" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
