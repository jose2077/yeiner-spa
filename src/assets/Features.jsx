import './Features.css'
import estrellas from '../assets/estrellas.svg'

function Features() {
  return (
    <section className="features">

  <div className="features-container">

    <div className="feature">
      <img src={estrellas} alt="" />
      <h3>Calidad</h3>
      <p>Cuidamos cada detalle para obtener un acabado impecable.</p>
    </div>

    <div className="feature">
     <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />
        </svg>
      <h3>Rapidez</h3>
      <p>Servicio eficiente sin descuidar el resultado final.</p>
    </div>

    <div className="feature">
      {/* SVG */}
      <h3>Profesionalismo</h3>
      <p>Técnicas y productos pensados para cada vehículo.</p>
    </div>

    <div className="feature">
      {/* SVG */}
      <h3>Confianza</h3>
      <p>Tu vehículo está en manos de personas comprometidas.</p>
    </div>

    <div className="feature">
      {/* SVG */}
      <h3>Experiencia</h3>
      <p>Atención enfocada en conseguir el mejor resultado.</p>
    </div>

  </div>

</section>
  )
}

export default Features