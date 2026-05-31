const CAN_FIX = [
  {
    name: 'Edge & Corner Lifts',
    desc: "Very minor lifts can be put back into place with humidity and heat. More serious lifts depend on whether adhesive remains underneath - humidity and heat can reactivate it, but if there isn't enough adhesive it may not go fully flat.",
  },
  {
    name: 'Creases',
    desc: "Various types: 'broken', 'unbroken' and 'bubble' - the course of action changes depending on type. Creases are the most difficult and time consuming part of restoration. Expect a 50–80% reduction in appearance, as card fibres have a 'memory' of where they used to be.",
  },
  {
    name: 'Dents',
    desc: 'Minor dents can respond well to humidification and pressing. Deeper dents will improve but may not fully disappear.',
  },
  {
    name: 'Curl and Warping',
    desc: 'Can be significantly improved through humidification and heat pressing. Severe or long-term curl can take multiple rounds as the fibres develop a memory of the curled position.',
  },
  {
    name: 'Scratches on the Holofoil / Surface',
    desc: 'The front of a Pokémon card is plastic, so minor scratches can be buffed out using a mixture of polishes. Deep scratches can only be reduced. Scratches on the back are more risky - the back is card rather than plastic, so typically these are just polished to brighten the colour.',
  },
  {
    name: 'Dirt & Pokémould',
    desc: "Those black dots on the back or edges of a card are actually mould. This can be lifted off with the cleaning process, along with any other dirt on the card.",
  },
]

const CANNOT_FIX = [
  {
    name: 'Whitening',
    desc: 'Where paint has physically flaked off the card. Restoration cannot bring back what has been lost.',
  },
  {
    name: 'Print Lines',
    desc: 'A small issue with the ink during the production process. Print lines run through the whole card and cannot be fixed.',
  },
  {
    name: 'Sun and Heat Fading',
    desc: 'Colours faded from UV or heat exposure are permanently lost and cannot be reversed.',
  },
  {
    name: 'Torn or Missing Card Stock',
    desc: 'If part of the card is physically missing, there is nothing restoration can do.',
  },
  {
    name: 'Water Damage Staining',
    desc: 'Warping from water damage can often be improved, but staining is permanent.',
  },
]

export default function CanCannotTab() {
  return (
    <>
    <div className="can-cannot-grid">
      <div className="cc-column">
        <div className="cc-column-header">
          <div className="cc-column-icon cc-can-icon">✓</div>
          <span className="cc-column-title cc-can-title">What CAN be restored</span>
        </div>
        {CAN_FIX.map(item => (
          <div key={item.name} className="cc-item cc-can-item">
            <p className="cc-item-name">{item.name}</p>
            <p className="cc-item-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="cc-column">
        <div className="cc-column-header">
          <div className="cc-column-icon cc-cannot-icon">✕</div>
          <span className="cc-column-title cc-cannot-title">What CAN'T be restored</span>
        </div>
        {CANNOT_FIX.map(item => (
          <div key={item.name} className="cc-item cc-cannot-item">
            <p className="cc-item-name">{item.name}</p>
            <p className="cc-item-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="cc-unsure-cta">
      <p className="cc-unsure-title">Not sure if your card qualifies?</p>
      <p className="cc-unsure-desc">
        Send me photos of the front and back and I'll give you an honest assessment - no obligation.
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
    </>
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
