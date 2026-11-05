import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <main className="notfound__main" id="main-content">
        <div className="container notfound__inner">
          <span className="notfound__num" aria-hidden="true">404</span>
          <h1 className="notfound__title">Page Not Found</h1>
          <p className="notfound__body">
            This page has wandered off. Perhaps it got lost in a good story.
          </p>
          <Link to="/" className="btn btn-outline" id="notfound-home">
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
