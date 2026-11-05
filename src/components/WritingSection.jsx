import { useEffect, useRef } from 'react'
import { articles } from '../data/content'
import ArticleCard from './ArticleCard.jsx'
import './WritingSection.css'

export default function WritingSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featured = articles.filter((a) => a.featured)
  const [mainFeature, ...rest] = featured

  return (
    <section className="writing" id="writing" aria-label="Selected Writing" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="writing__header reveal">
          <span className="label label-lavender">Words & Ideas</span>
          <div className="divider" />
          <h2 className="section-title">Selected Works</h2>
          <p className="writing__intro">
            A curated selection of articles, experiments, and observations across AI, 
            products, and ideas worth exploring.
          </p>
        </div>

        {/* Featured — large card */}
        {mainFeature && (
          <div className="writing__featured reveal reveal-delay-1">
            <ArticleCard article={mainFeature} variant="featured" />
          </div>
        )}

        {/* Grid — remaining featured */}
        <div className="writing__grid">
          {rest.map((article, i) => (
            <div key={article.id} className={`reveal reveal-delay-${(i % 3) + 2}`}>
              <ArticleCard article={article} variant="standard" />
            </div>
          ))}
        </div>

        {/* Archive CTA */}
        <div className="writing__cta reveal">
          <div className="ornament">
            <span className="ornament-text">More in the archive</span>
          </div>
          <a href="/archive" className="btn btn-outline" id="cta-archive">
            Browse All Writing
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
