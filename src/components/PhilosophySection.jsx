import { useEffect, useRef } from 'react'
import { philosophy } from '../data/content'
import './PhilosophySection.css'

export default function PhilosophySection() {
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
    <section className="philosophy" id="philosophy" aria-label="Writing philosophy" ref={sectionRef}>
      <div className="container">
        <div className="philosophy__inner">
          {/* Decorative "Why" in background */}
          <span className="philosophy__bg-word" aria-hidden="true">Write</span>

          <div className="philosophy__content reveal">
            <span className="label label-lavender">Writing Philosophy</span>
            <div className="divider" />
            <h2 className="philosophy__heading display-md">{philosophy.heading}</h2>

            <blockquote className="philosophy__quote">
              <span className="philosophy__open-quote" aria-hidden="true">&ldquo;</span>
              <p>{philosophy.body}</p>
              <span className="philosophy__close-quote" aria-hidden="true">&rdquo;</span>
            </blockquote>

            <p className="philosophy__sig script" aria-label="Harshika Gahlot's signature">Harshika</p>
          </div>
        </div>
      </div>
    </section>
  )
}
