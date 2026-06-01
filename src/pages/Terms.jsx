import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-top-bar">
        <div className="container">
          <Link to="/" className="terms-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="terms-content">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-date">Last updated: May 2026</p>

          <p className="terms-intro">
            By sending your cards to FromFadedToGraded you agree to the following terms and conditions. Please read them carefully before submitting any cards for restoration.
          </p>

          <div className="terms-section">
            <h2 className="terms-section-title">1. Sending Your Card</h2>
            <ul className="terms-list">
              <li>Cards must be securely packaged. We recommend penny sleeves, top loaders and bubble wrap as a minimum.</li>
              <li>We strongly recommend sending via Royal Mail Special Delivery or an equivalent tracked and insured service.</li>
              <li>A prepaid return label must be included in the package. We are not responsible for return postage costs.</li>
              <li>We are not liable for any damage caused during transit to us or back to you.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">2. Card Condition on Arrival</h2>
            <ul className="terms-list">
              <li>All cards are filmed and photographed on arrival before any work begins. This establishes the pre-restoration condition.</li>
              <li>If a card arrives in worse condition than described, we will contact you before proceeding.</li>
              <li>You are responsible for accurately describing the condition of your card when making a submission request.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">3. Restoration Work</h2>
            <ul className="terms-list">
              <li>We will carry out the agreed restoration work to the best of our ability.</li>
              <li>Results cannot be guaranteed. The extent of improvement depends on the nature and severity of the damage.</li>
              <li>We do not guarantee any specific grading outcome. Restoration work may or may not improve a grading result.</li>
              <li>Some damages cannot be restored; these are outlined on our website.</li>
              <li>The entire restoration process is filmed for transparency.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">4. Liability & Damage</h2>
            <ul className="terms-list">
              <li>We take every precaution to care for your card during the restoration process.</li>
              <li>In the unlikely event that damage occurs during restoration, we will inform you immediately and honestly.</li>
              <li>Our liability is limited to the agreed service fee paid. We strongly recommend insuring high value cards during transit.</li>
              <li>We are not responsible for any loss of grading value, market value or sentimental value arising from restoration work.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">5. Turnaround Time</h2>
            <ul className="terms-list">
              <li>Turnaround times vary depending on the volume of cards we are working on.</li>
              <li>An estimated timeframe will be provided when your submission is confirmed.</li>
              <li>We will keep you updated on progress and any delays.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">6. Content & Filming</h2>
            <ul className="terms-list">
              <li>The restoration process may be filmed and shared on our TikTok and Instagram channels (FromFadedToGraded).</li>
              <li>If you do not wish your card to appear in any content, please inform us before sending.</li>
              <li>Your personal details will never be shared publicly.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">7. Returns</h2>
            <ul className="terms-list">
              <li>Cards will be returned via the prepaid label included with your submission.</li>
              <li>Cards will be returned in a penny sleeve, top loader and bubble mailer as a minimum.</li>
              <li>We are not responsible for any damage caused during return transit.</li>
            </ul>
          </div>

          <div className="terms-footer-note">
            <p>By sending your card to FromFadedToGraded you confirm that you have read, understood and agreed to these terms and conditions.</p>
            <p>For any questions please contact us via DM on <a href="https://www.tiktok.com/@fromfadedtograded4" target="_blank" rel="noopener noreferrer">TikTok</a> or <a href="https://www.instagram.com/fromfadedtograded" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
