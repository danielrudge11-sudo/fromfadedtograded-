const TIERS = [
  {
    tier: 'Tier 1',
    name: 'General Clean & Polish',
    desc: 'Full surface clean and polish to bring out the best in your card.',
    price: '£17',
    per: '/card',
  },
  {
    tier: 'Tier 2',
    name: 'Light Damage',
    desc: 'Light dents, creases, scratches or edge lifts. Includes clean & polish.',
    price: '£30',
    per: '/card',
  },
  {
    tier: 'Tier 3',
    name: 'Heavy Damage',
    desc: 'Heavy dents, creases, scratches or edge lifts. Includes clean & polish.',
    price: '£45',
    per: '/card',
  },
]

export default function PricingTab() {
  return (
    <div>
      <div className="pricing-grid">
        {TIERS.map(item => (
          <div key={item.tier} className="price-card">
            <p className="price-card-tier">{item.tier}</p>
            <p className="price-card-name">{item.name}</p>
            <p className="price-card-desc">{item.desc}</p>
            <p className="price-card-price">
              {item.price}<span>{item.per}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="pricing-addon">
        <div>
          <p className="pricing-addon-label">Add-on</p>
          <p className="pricing-addon-name">Slab Cracks</p>
          <p className="pricing-addon-desc">Already graded? If your slab is cracked or damaged, I'll carefully crack it open and free your card - ready for restoration.</p>
        </div>
        <p className="pricing-addon-price">
          £5<span>/slab</span>
        </p>
      </div>

      <div className="pricing-upfront-banner">
        <span className="pricing-upfront-icon">💳</span>
        <span className="pricing-upfront-text">
          <strong>Payments are taken upfront</strong> before any work begins.
        </span>
      </div>

      <div className="pricing-upfront-banner">
        <span className="pricing-upfront-icon">🃏</span>
        <span className="pricing-upfront-text">
          <strong>Prefer to pay in Pokémon cards?</strong> I'm happy to accept Pokémon cards as payment - just note that a minimum value of <strong>£5 per card</strong> applies. Bulk commons and low-value Pokémon cards won't be accepted.
        </span>
      </div>

      <div className="pricing-quote-cta">
        <p className="pricing-quote-title">How to get a quote</p>
        <p className="pricing-quote-desc">
          To provide an accurate quote, I will need to see photos of both the front and back of your card first. Send them over on TikTok or Instagram and I'll assess the damage and confirm the price before any work is agreed.
        </p>
        <div className="pricing-quote-links">
          <a
            href="https://www.tiktok.com/@fromfadedtograded4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary pricing-quote-btn"
          >
            <TikTokIcon />
            Send photos on TikTok
          </a>
          <a
            href="https://www.instagram.com/fromfadedtograded"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary pricing-quote-btn"
          >
            <InstagramIcon />
            Send photos on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.52a8.17 8.17 0 0 0 4.78 1.52V6.59a4.85 4.85 0 0 1-1.01.1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
