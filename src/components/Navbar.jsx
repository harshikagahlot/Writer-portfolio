import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/content'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Trap focus & close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const isHome = location.pathname === '/'

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) { window.location.href = `/#${id}`; return }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo / Signature */}
        <Link to="/" className="navbar__logo" aria-label="Harshika Gahlot — Home">
          <span className="navbar__name">{siteConfig.name}</span>
          <span className="navbar__signature script" aria-hidden="true">Harshika</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <button className="nav-link nav-btn" onClick={() => scrollTo('about')}>About</button>
          <button className="nav-link nav-btn" onClick={() => scrollTo('writing')}>Writing</button>
          <NavLink to="/archive" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Archive</NavLink>
          <button className="nav-link nav-btn" onClick={() => scrollTo('contact')}>Contact</button>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`navbar__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <NavLink to="/" end className="mobile-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <button className="mobile-link" onClick={() => scrollTo('about')}>About</button>
          <button className="mobile-link" onClick={() => scrollTo('writing')}>Writing</button>
          <NavLink to="/archive" className="mobile-link" onClick={() => setMenuOpen(false)}>Archive</NavLink>
          <button className="mobile-link" onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
        <p className="mobile-menu__sig script">Harshika</p>
      </div>
    </header>
  )
}
