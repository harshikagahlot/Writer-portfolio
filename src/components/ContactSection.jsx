import { useEffect, useRef } from 'react'
import { siteConfig } from '../data/content'
import './ContactSection.css'

export default function ContactSection() {
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

  const links = [
    siteConfig.email && {
      id: 'contact-email',
      label: 'Email',
      href: `mailto:${siteConfig.email}`,
      value: siteConfig.email,
      icon: 'mail',
    },
    {
      id: 'contact-dev',
      label: 'DEV Community',
      href: siteConfig.social.dev,
      value: 'dev.to/harshika_gahlot',
      icon: 'dev',
    },
    {
      id: 'contact-blog',
      label: 'Product & Perspective',
      href: siteConfig.social.blog,
      value: 'productandperspective.blogspot.com',
      icon: 'blog',
    },
    siteConfig.social.linkedin && {
      id: 'contact-linkedin',
      label: 'LinkedIn',
      href: siteConfig.social.linkedin,
      value: 'linkedin.com/in/harshikagahlot',
      icon: 'linkedin',
    },
  ].filter(Boolean)

  return (
    <section className="contact" id="contact" aria-label="Contact Harshika" ref={sectionRef}>
      <div className="container">
        <div className="contact__inner">
          <div className="contact__header reveal">
            <span className="label label-lavender">Get In Touch</span>
            <div className="divider" />
            <h2 className="contact__heading display-md">
              Let's Create Something Meaningful.
            </h2>
            <p className="contact__sub">
              Have an idea, an opportunity, or simply something worth discussing?
              <br />I'd love to hear from you.
            </p>
          </div>

          <div className="contact__links reveal reveal-delay-2">
            {!siteConfig.email && (
              <div className="contact__email-note">
                <span className="label">
                  📮 Email — <em style={{ color: 'var(--gray)', fontStyle: 'italic' }}>Coming soon — configure in src/data/content.js</em>
                </span>
              </div>
            )}

            {links.map((link) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.icon !== 'mail' ? '_blank' : undefined}
                rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                className="contact__link"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className="contact__link-left">
                  <span className="contact__link-label label">{link.label}</span>
                  <span className="contact__link-value">{link.value}</span>
                </div>
                <svg className="contact__link-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
