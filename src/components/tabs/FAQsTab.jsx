export default function FAQsTab() {
  return (
    <div>
      <div className="faq-option">
        <div className="faq-option-header">
          <span className="faq-badge">Option 1</span>
          <p className="faq-option-title">Post your cards</p>
        </div>
        <ul className="faq-steps">
          <li className="faq-step">
            <span className="faq-step-num">1</span>
            <span className="faq-step-text">
              Send your cards to my home address via a <strong>tracked postal service</strong> to ensure safe and confirmed delivery.
              <span className="faq-step-hint">💡 Please package your card carefully - sleeve it, place it in a toploader, and wrap in bubble wrap before putting it in your envelope or box. This protects your card in transit.</span>
            </span>
          </li>
          <li className="faq-step">
            <span className="faq-step-num">2</span>
            <span className="faq-step-text">
              Upon arrival, I will film the unboxing and send you the footage as <strong>proof of receipt</strong>.
            </span>
          </li>
          <li className="faq-step">
            <span className="faq-step-num">3</span>
            <span className="faq-step-text">
              I will carry out the restoration work and document each step, so you have a full record of everything that was done to your card.
            </span>
          </li>
          <li className="faq-step">
            <span className="faq-step-num">4</span>
            <span className="faq-step-text">
              Please ensure a <strong>pre-paid tracked return label</strong> is included in your parcel so I can return your card once the work is complete.
              <span className="faq-step-hint">💡 Royal Mail can arrange this at your local Post Office - they will provide a silver bag and a pre-printed return label to place inside your package.</span>
            </span>
          </li>
          <li className="faq-step">
            <span className="faq-step-num">5</span>
            <span className="faq-step-text">
              I will film the repackaging of your card before it is sent back, so you can see exactly what is being returned to you.
            </span>
          </li>
        </ul>
      </div>

      <div className="faq-option">
        <div className="faq-option-header">
          <span className="faq-badge">Option 2</span>
          <p className="faq-option-title">Drop off / pick up in person</p>
          <span className="faq-badge-preferred">Preferred</span>
        </div>
        <ul className="faq-locations">
          <li className="faq-location">
            <span className="faq-location-dot" />
            <span>
              I am based in <strong>West London (Acton)</strong> and am available to meet locally for drop-off and collection.
            </span>
          </li>
          <li className="faq-location">
            <span className="faq-location-dot" />
            <span>
              I also operate out of <strong>central London, near Liverpool Street Station</strong> one day per week, and can arrange to meet there if more convenient.
            </span>
          </li>
        </ul>
      </div>

      <p className="faq-general-note">
        Full name, address and bank transfer details will be provided privately once you're ready to go ahead. Payments are taken upfront.
      </p>
    </div>
  )
}
