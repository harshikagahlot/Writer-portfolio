import { useEffect, useRef } from 'react'
import { originalQuotes } from '../data/content'
import './QuotesSection.css'

export default function QuotesSection() {
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

  // If no quotes configured, show placeholder invitation
  if (originalQuotes.length === 0) {
    return (
      <section className="quotes" id="fragments" aria-label="Fragments of thought" ref={sectionRef}>
        <div className="container">
          <div className="quotes__header reveal">
            <span className="label label-lavender">Fragments of Thought</span>
            <div className="divider" />
            <h2 className="section-title">Little Things I Believe</h2>
          </div>
          <div className="quotes__placeholder reveal reveal-delay-1">
            <p className="quotes__placeholder-text">
              Some thoughts are still taking shape.
              <br />
              <em>Original reflections coming soon.</em>
            </p>
            <div className="quotes__placeholder-line" aria-hidden="true" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="quotes" id="fragments" aria-label="Fragments of thought" ref={sectionRef}>
      <div className="container">
        <div className="quotes__header reveal">
          <span className="label label-lavender">Fragments of Thought</span>
          <div className="divider" />
          <h2 className="section-title">Little Things I Believe</h2>
        </div>

        <div className="quotes__grid">
          {originalQuotes.map((quote, i) => (
            <figure key={quote.id} className={`quote-card reveal reveal-delay-${i + 1}`}>
              <blockquote className="quote-card__text">
                <span aria-hidden="true">&ldquo;</span>
                {quote.text}
                <span aria-hidden="true">&rdquo;</span>
              </blockquote>
              {quote.context && (
                <figcaption className="quote-card__context label">{quote.context}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
