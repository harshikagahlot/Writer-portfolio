import { useState } from 'react'
import './ArticleCard.css'

const categoryLabels = {
  ai: 'AI & Technology',
  ideas: 'Ideas & Perspectives',
  creative: 'Creative Writing',
}

const categoryColors = {
  ai: '#1f3045',
  ideas: '#2a1f30',
  creative: '#1f2a2a',
}

function CoverPlaceholder({ article }) {
  const color = article.coverColor || categoryColors[article.category] || '#1f1f2a'
  const initials = article.title.split(' ').slice(0, 2).map(w => w[0]).join('')

  return (
    <div className="card__cover-placeholder" style={{ background: color }}>
      <span className="card__cover-initials" aria-hidden="true">{initials}</span>
      <div className="card__cover-pattern" aria-hidden="true" />
    </div>
  )
}

export default function ArticleCard({ article, variant = 'standard' }) {
  const [imgFailed, setImgFailed] = useState(false)
  const Tag = article.link ? 'a' : 'div'
  const linkProps = article.link
    ? { href: article.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  const showImage = article.coverImage && !imgFailed

  return (
    <Tag
      className={`card card--${variant}`}
      {...linkProps}
      aria-label={`${article.title} — ${categoryLabels[article.category]}`}
    >
      {/* Cover */}
      <div className="card__cover">
        {showImage ? (
          <img
            src={article.coverImage}
            alt={`Cover for ${article.title}`}
            className="card__cover-img"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <CoverPlaceholder article={article} />
        )}
      </div>

      {/* Content */}
      <div className="card__content">
        <div className="card__meta">
          <span className="card__category label">{categoryLabels[article.category]}</span>
          <span className="card__source label">{article.source}</span>
        </div>

        <h3 className="card__title">{article.title}</h3>
        <p className="card__desc">{article.description}</p>

        <div className="card__footer">
          <div className="card__tags">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="card__tag">{tag}</span>
            ))}
          </div>
          {article.link && (
            <span className="card__read-link" aria-hidden="true">
              Read →
            </span>
          )}
        </div>
      </div>
    </Tag>
  )
}
