import './Navbar.css'
import logo from '../assets/logo1.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <img src={logo} alt="Logo" className="navbar-logo" />

        <div className="navbar-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
        </div>

        <a href="#contacto" className="navbar-contact">
          Contacto
        </a>

      </div>
    </nav>
  )
}

export default Navbar