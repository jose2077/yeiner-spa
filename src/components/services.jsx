import "./Services.css";
import interior from "../assets/Imagenes/interior_mazda.jpg";
import exterior from "../assets/Imagenes/lavado_exterior.jpg";
import motor from "../assets/Imagenes/motor_renault_blanco.jfif";
import headlights from "../assets/Imagenes/headlight.jfif";
import paintdecont from "../assets/Imagenes/paint_decont.jpg";
import blackrest from "../assets/Imagenes/blackrestoration.jpg";

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services-header">
        <h2>NUESTROS SERVICIOS</h2>

        <p>Todo lo que tu vehículo necesita</p>

        <span>
          Cuidamos cada detalle para que tu vehículo vuelva a lucir como nuevo.
        </span>
      </div>

      <div className="services-container">
        <div className="service-card">
          <div className="service-image">
            <img src={interior} alt="Lavado interior" />
          </div>

          <div className="service-content">
            <h3>Lavado Interior</h3>

            <p>
              Eliminación de manchas y olores.
            </p>

            <button>Ver servicio →</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img src={motor} alt="Lavado interior" />
          </div>

          <div className="service-content">
            <h3>Lavado de motor</h3>

            <p>
              Limpieza profunda y eliminación de suciedad y residuos.
            </p>

            <button>Ver servicio →</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img src={exterior} alt="Lavado motor" />
          </div>

          <div className="service-content">
            <h3>Lavado Exterior</h3>

            <p>
              Limpieza profunda y acabado
              impecable.
            </p>

            <button>Ver servicio →</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img src={headlights} alt="Restauración Farolas" />
          </div>

          <div className="service-content">
            <h3>Restauración de farolas</h3>

            <p>
              Restauración de farolas para recuperar su brillo, transparencia y apariencia original.
            </p>

            <button>Ver servicio →</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img src={paintdecont} alt="Descontaminación de pintura" />
          </div>

          <div className="service-content">
            <h3>Descontaminación de pintura</h3>

            <p>
              Eliminación de contaminantes adheridos a la pintura para recuperar su suavidad y brillo.
            </p>

            <button>Ver servicio →</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image">
            <img src={blackrest} alt="Restauración de plásticos" />
          </div>

          <div className="service-content">
            <h3>Restauración de plásticos</h3>

            <p>
              Restauración de plásticos exteriores para recuperar su color, brillo y apariencia original.
            </p>

            <button>Ver servicio →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
