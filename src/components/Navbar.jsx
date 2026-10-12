import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo1.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            <a href="#inicio" onClick={closeMenu}>Inicio</a>
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#galeria" onClick={closeMenu}>Galería</a>
          </div>

          <a
            href="https://wa.me/573116222661"
            className="navbar-contact"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar