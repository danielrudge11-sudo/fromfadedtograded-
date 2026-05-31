import products from '../data/affiliateProducts.json'

export default function AffiliateGear() {
  const hasProducts = products.products.length > 0

  return (
    <section id="gear" className="section affiliate">
      <div className="container">
        <h2 className="section-title">Equipment I Use</h2>
        <p className="section-subtitle">Tools and supplies I use and trust for card restoration</p>

        {hasProducts ? (
          <div className="affiliate-products-grid">
            {products.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="affiliate-empty">
            <div className="affiliate-empty-icon">🛠️</div>
            <p className="affiliate-empty-title">Gear recommendations coming soon</p>
            <p className="affiliate-empty-text">
              Check back - I'll be adding my recommended tools and supplies here shortly.
            </p>
          </div>
        )}

        <div className="affiliate-disclosure">
          <InfoIcon />
          <span>
            Some links on this page are Amazon affiliate links - I may earn a small commission at no extra cost to you.
          </span>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      )}
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <p className="product-name">{product.name}</p>
        <p className="product-desc">{product.description}</p>
        <a
          href={product.amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="product-link"
        >
          View on Amazon
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}

function InfoIcon() {
  return (
    <svg className="disclosure-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
