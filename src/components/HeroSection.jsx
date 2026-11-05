import { useEffect, useRef } from 'react'
import { siteConfig } from '../data/content'
import './HeroSection.css'

export default function HeroSection() {
  const portraitRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (portraitRef.current) {
        portraitRef.current.classList.add('revealed')
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      {/* Background decorative elements */}
      <div className="hero__bg-shape" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left — Content */}
        <div className="hero__content">
          <p className="label reveal reveal-delay-1">
            <span className="label__dot" aria-hidden="true" />
            Content · AI · Creative Writing
          </p>

          <h1 className="hero__headline display-lg reveal reveal-delay-2">
            {siteConfig.heroHeadline}
            <br />
            <em className="accent">{siteConfig.heroHeadlineAccent}</em>
          </h1>

          <p className="hero__subtitle reveal reveal-delay-3">
            <em>{siteConfig.heroSubtitle}</em>
          </p>

          <p className="hero__desc reveal reveal-delay-3">
            {siteConfig.heroDescription}
          </p>

          <div className="hero__ctas reveal reveal-delay-4">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('writing')}
              id="cta-explore"
            >
              {siteConfig.heroCTA1}
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo('contact')}
              id="cta-connect"
            >
              {siteConfig.heroCTA2}
            </button>
          </div>

          {/* Minimal metadata */}
          <div className="hero__meta reveal reveal-delay-4">
            <span className="label">BTech CSE · Writer · AI Enthusiast</span>
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="hero__portrait-wrap" ref={portraitRef} aria-hidden="false">
          <div className="hero__portrait-bg" aria-hidden="true" />
          <div className="hero__portrait-accent" aria-hidden="true" />
          <div className="hero__portrait-container">
            <img
              src="/images/harshika-portrait.jpg"
              alt="Portrait of Harshika Gahlot, writer"
              className="hero__portrait-img"
              width="480"
              height="560"
            />
          </div>
          {/* Decorative corner line */}
          <svg className="hero__corner-line" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M 0 120 L 0 0 L 120 0" fill="none" stroke="rgba(185,160,212,0.3)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span className="label" style={{ writingMode: 'vertical-rl', letterSpacing: '0.15em' }}>Scroll</span>
      </div>
    </section>
  )
}
