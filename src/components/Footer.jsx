import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link to="/terms">Terms & Conditions</Link>
          <span className="footer-sep">·</span>
          <a href="mailto:fromfadedtograded@gmail.com">Contact</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} From Faded To Graded. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
