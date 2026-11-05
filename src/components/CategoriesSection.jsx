import { useEffect, useRef } from 'react'
import { categories } from '../data/content'
import './CategoriesSection.css'

const categoryIcons = {
  ideas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <path d="M6 10h1M9 10h1M12 10h1M15 10h1M18 10h1M6 14h4M14 14h4"/>
    </svg>
  ),
  creative: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
}

export default function CategoriesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="categories" id="categories" aria-label="Writing categories" ref={sectionRef}>
      <div className="container">
        <div className="categories__header reveal">
          <span className="label label-lavender">What I Write</span>
          <div className="divider" />
          <h2 className="section-title">Three Spaces of Exploration</h2>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <div key={cat.id} className={`cat-card reveal reveal-delay-${i + 1}`}>
              <div className="cat-card__icon">
                {categoryIcons[cat.id]}
              </div>
              <div className="cat-card__number label">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="cat-card__title">{cat.label}</h3>
              <p className="cat-card__desc">{cat.description}</p>
              {cat.link && (
                <a
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cat-card__link"
                  aria-label={`Visit ${cat.label}`}
                >
                  Explore <span aria-hidden="true">→</span>
                </a>
              )}
              {!cat.link && (
                <span className="cat-card__coming">Coming Soon</span>
              )}
              <div className="cat-card__accent" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
