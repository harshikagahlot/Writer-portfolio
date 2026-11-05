import { Link } from 'react-router-dom'
import { siteConfig } from '../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Top row */}
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">{siteConfig.name}</p>
            <p className="footer__sig script" aria-hidden="true">Harshika</p>
            <p className="footer__tagline label">{siteConfig.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__nav-col">
              <p className="footer__nav-title label">Navigate</p>
              <Link to="/" className="footer__link">Home</Link>
              <a href="/#about" className="footer__link">About</a>
              <a href="/#writing" className="footer__link">Writing</a>
              <Link to="/archive" className="footer__link">Archive</Link>
              <a href="/#contact" className="footer__link">Contact</a>
            </div>
            <div className="footer__nav-col">
              <p className="footer__nav-title label">Writing</p>
              <a
                href={siteConfig.social.dev}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="DEV Community profile"
              >
                DEV Community
              </a>
              <a
                href={siteConfig.social.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                aria-label="Product and Perspective blog"
              >
                Product & Perspective
              </a>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy label">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="footer__made label">
            Crafted with curiosity &amp; care.
          </p>
        </div>
      </div>
    </footer>
  )
}
