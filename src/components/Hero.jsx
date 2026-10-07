import { useState } from 'react'
import './Hero.css'

import video from '../assets/1.mp4'
import video2 from '../assets/2.mp4'
import video3 from '../assets/3.mp4'

function Hero() {

  const videos = [video, video2, video3]

  const [currentVideo, setCurrentVideo] = useState(0)

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  return (

    <section className="hero">

      <video
        className="hero-video"
        src={videos[currentVideo]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p>ESPECIALISTAS EN LAVADO</p>

        <h1>
          Lavado y Detallado
          <br />
          Automotriz Profesional
        </h1>

        <div className="hero-buttons">
          <button>Ver servicios</button>
          <button>Contactarnos</button>
        </div>

      </div>

    </section>

  )
}

export default Hero