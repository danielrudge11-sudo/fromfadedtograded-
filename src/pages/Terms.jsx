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
          <p className="terms-date">Coming soon</p>
          <div className="terms-placeholder">
            <p>Full terms and conditions will be published here shortly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
