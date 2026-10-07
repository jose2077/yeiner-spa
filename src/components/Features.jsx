import "./Features.css";
import estrellas from "../assets/estrellas.svg";
import productos from "../assets/producto.svg";
import procesos from "../assets/procesos.svg";
import escudo from "../assets/escudo.svg";
import like from "../assets/like.svg";

function Features() {
  return (
    <section className="features">
      <div className="features-title">
        <h2>¿Por qué elegirnos?</h2>
      </div>

      <div className="features-container">
        <div className="feature">
          <div className="feature-icon">
            <img src={like} alt="" />
          </div>
          <h3>Clientes satisfechos</h3>
          <p>
            La satisfacción de nuestros clientes nos respalda.
Nos esforzamos por ofrecer un servicio de calidad en cada visita. La confianza de quienes nos eligen y sus recomendaciones son parte de lo que nos impulsa a seguir mejorando.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src={estrellas} alt="" />
          </div>
          <h3>Resultados notables</h3>
          <p>
            Un acabado que se nota. Cada servicio está pensado para devolverle a
            tu vehículo una apariencia limpia, cuidada y renovada, prestando
            atención a cada detalle para lograr un resultado que puedas ver
            desde el primer momento.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src={productos} alt="" />
          </div>
          <h3>Productos y equipos Premium</h3>
          <p>
            Trabajamos con productos y herramientas profesionales para obtener
            resultados superiores sin comprometer los materiales.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src={escudo} alt="" />
          </div>
          <h3>Compromiso con la calidad</h3>
          <p>
            Trabajamos bajo altos estándares para brindar resultados que cumplan
            con tus expectativas.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <img src={procesos} alt="" />
          </div>
          <h3>Técnicas seguras</h3>
          <p>
            Cada servicio sigue un protocolo definido para garantizar resultados
            de alta calidad en todas nuestras sedes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
