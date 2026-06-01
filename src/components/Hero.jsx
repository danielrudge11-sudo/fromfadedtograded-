import { useState } from 'react'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-logo-wrap">
          {imgError ? (
            <span className="hero-logo-fallback">FFTG</span>
          ) : (
            <img
              src="/logo.png"
              alt="From Faded To Graded"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <h1 className="hero-tagline">
          Bringing battered Pokémon cards<br />
          <span>back to life</span>
        </h1>

        <p className="hero-sub">
          Professional card restoration - reducing and removing dents, creases, scratches and more.
        </p>

        <a href="#contact" className="btn btn-primary hero-cta">
          Get in Touch
        </a>
      </div>
    </section>
  )
}
