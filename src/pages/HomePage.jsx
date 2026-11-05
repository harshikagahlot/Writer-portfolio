import { useEffect } from 'react'
import HeroSection from '../components/HeroSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import WritingSection from '../components/WritingSection.jsx'
import CategoriesSection from '../components/CategoriesSection.jsx'
import PhilosophySection from '../components/PhilosophySection.jsx'
import QuotesSection from '../components/QuotesSection.jsx'
import ClosingNote from '../components/ClosingNote.jsx'
import ContactSection from '../components/ContactSection.jsx'
import Footer from '../components/Footer.jsx'

// Global reveal observer — initialises once per page load
function useRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function HomePage() {
  useRevealObserver()

  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <WritingSection />
      <PhilosophySection />
      <QuotesSection />
      <ClosingNote />
      <ContactSection />
      <Footer />
    </main>
  )
}
