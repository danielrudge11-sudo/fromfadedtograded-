import { useState } from 'react'

export default function Header() {
  const [imgError, setImgError] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#home" className="header-logo">
            {!imgError && (
              <img
                src="/logo.png"
                alt="From Faded To Graded"
                className="header-logo-img"
                onError={() => setImgError(true)}
              />
            )}
            <div className="header-logo-text">
              From Faded <span>To Graded</span>
            </div>
          </a>

          <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#services">Pricing & FAQ</a>
            <a href="#contact">Contact</a>
            <a href="#gear">Gear</a>
            <a href="/terms">T&Cs</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
