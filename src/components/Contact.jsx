const CONTACTS = [
  {
    label: 'TikTok',
    value: '@fromfadedtograded4',
    href: 'https://www.tiktok.com/@fromfadedtograded4',
    icon: 'tiktok',
    external: true,
  },
  {
    label: 'Instagram',
    value: '@fromfadedtograded',
    href: 'https://www.instagram.com/fromfadedtograded',
    icon: 'instagram',
    external: true,
  },
  {
    label: 'Email',
    value: 'fromfadedtograded@gmail.com',
    href: 'mailto:fromfadedtograded@gmail.com',
    icon: 'mail',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Got a battered card and not sure where to start? Drop me a message - I'm happy to help.</p>

        <div className="contact-grid">
          {CONTACTS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="contact-card"
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="contact-icon">
                {item.icon === 'mail' && <MailIcon />}
                {item.icon === 'tiktok' && <TikTokIcon />}
                {item.icon === 'instagram' && <InstagramIcon />}
              </div>
              <div>
                <p className="contact-label">{item.label}</p>
                <p className="contact-value">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="contact-note">
          DMs are preferred - message me on TikTok or Instagram and I'll get back to you as soon as possible.
        </p>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.52a8.17 8.17 0 0 0 4.78 1.52V6.59a4.85 4.85 0 0 1-1.01.1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
