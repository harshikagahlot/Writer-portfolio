import { useEffect, useRef } from 'react'
import { closingNote } from '../data/content'
import './ClosingNote.css'

export default function ClosingNote() {
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
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="closing" id="note" aria-label="A personal closing note" ref={sectionRef}>
      <div className="container">
        <div className="closing__inner">
          {/* Left — decorative */}
          <div className="closing__deco" aria-hidden="true">
            <div className="closing__deco-line" />
            <span className="closing__deco-num label">01</span>
            <div className="closing__deco-line" />
          </div>

          {/* Center — Letter */}
          <article className="closing__letter reveal">
            <header className="closing__letter-header">
              <span className="label label-lavender">A Personal Note</span>
              <div className="divider" />
              <h2 className="closing__heading display-md">{closingNote.heading}</h2>
            </header>

            <div className="closing__body">
              {closingNote.paragraphs.map((para, i) => (
                <p key={i} className={`closing__para reveal reveal-delay-${i + 1}`}>
                  {para}
                </p>
              ))}
            </div>

            <footer className="closing__sig">
              <div className="divider" />
              <p className="script closing__sig-name">Harshika Gahlot</p>
            </footer>
          </article>
        </div>
      </div>
    </section>
  )
}
