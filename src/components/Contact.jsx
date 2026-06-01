export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Got a battered card and not sure where to start? Drop me a message - I'm happy to help.</p>

        <div className="contact-buttons">
          <a
            href="https://www.tiktok.com/@fromfadedtograded4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-btn"
          >
            <TikTokIcon />
            Message on TikTok
          </a>
          <a
            href="https://www.instagram.com/fromfadedtograded"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-btn"
          >
            <InstagramIcon />
            Message on Instagram
          </a>
          <a
            href="mailto:fromfadedtograded@gmail.com"
            className="btn btn-primary contact-btn"
          >
            <MailIcon />
            Email me
          </a>
        </div>

        <p className="contact-note">
          DMs are preferred - send photos of the front and back of your card and I'll give you a free, no-obligation assessment and confirm the price before anything is agreed.
        </p>
      </div>
    </section>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.52a8.17 8.17 0 0 0 4.78 1.52V6.59a4.85 4.85 0 0 1-1.01.1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
