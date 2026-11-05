import { useEffect, useRef } from 'react'
import './AboutSection.css'

export default function AboutSection() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" aria-label="About Harshika" ref={sectionRef}>
      <div className="container">
        {/* Oversized editorial "About" word — inspired by Reference 1 */}
        <div className="about__editorial-wrap">
          <span className="about__oversized" aria-hidden="true">About</span>

          {/* Portrait overlapping the oversized text */}
          <div className="about__portrait-block reveal">
            <img
              src="/images/harshika-portrait.jpg"
              alt="Harshika Gahlot"
              className="about__portrait"
            />
          </div>

          {/* Story text floating beside */}
          <div className="about__text reveal reveal-delay-2">
            <span className="label label-lavender">The Story</span>
            <div className="divider" />

            <h2 className="about__heading section-title">
              A Writer Who Thinks Like a Curious Mind.
            </h2>

            <p className="about__body">
              I am a final-year B.Tech CSE student — but that is not the most interesting thing about me. 
              What genuinely excites me is writing: the act of sitting with an idea until it becomes something 
              worth saying out loud.
            </p>

            <p className="about__body">
              I write about AI, products, brands, and the kind of observations that most people notice 
              but rarely talk about. I am curious about why things work the way they do — why users 
              behave the way they do, why some brands feel alive and others feel hollow, 
              why a tool changes everything until a better one arrives.
            </p>

            <p className="about__body">
              I believe authentic writing comes from genuine curiosity. I try not to write about things 
              I do not actually care about, and I try to offer something real — not just a 
              summary of what everyone already knows.
            </p>

            <div className="about__tags">
              <span className="tag">Content Writing</span>
              <span className="tag">AI & Automation</span>
              <span className="tag">Brand & Product</span>
              <span className="tag">Creative Writing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
