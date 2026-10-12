
import { useState, useEffect } from "react";
import "./Features.css";

import estrellas from "../assets/estrellas.svg";
import productos from "../assets/producto.svg";
import procesos from "../assets/procesos.svg";
import escudo from "../assets/escudo.svg";
import like from "../assets/like.svg";

const features = [
  {
    icon: like,
    title: "Clientes satisfechos",
    description:
      "La satisfacción de nuestros clientes nos respalda. Nos esforzamos por ofrecer un servicio de calidad en cada visita. La confianza de quienes nos eligen y sus recomendaciones son parte de lo que nos impulsa a seguir mejorando.",
  },
  {
    icon: estrellas,
    title: "Resultados notables",
    description:
      "Un acabado que se nota. Cada servicio está pensado para devolverle a tu vehículo una apariencia limpia, cuidada y renovada, prestando atención a cada detalle para lograr un resultado que puedas ver desde el primer momento.",
  },
  {
    icon: productos,
    title: "Productos y equipos Premium",
    description:
      "Trabajamos con productos y herramientas profesionales para obtener resultados superiores sin comprometer los materiales.",
  },
  {
    icon: escudo,
    title: "Compromiso con la calidad",
    description:
      "Trabajamos bajo altos estándares para brindar resultados que cumplan con tus expectativas.",
  },
  {
    icon: procesos,
    title: "Técnicas seguras",
    description:
      "Cada servicio sigue un protocolo definido para garantizar resultados de alta calidad en todas nuestras sedes.",
  },
];

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const previousFeature = () => {
    setActiveIndex(
      (current) => (current - 1 + features.length) % features.length
    );
  };

  const nextFeature = () => {
    setActiveIndex((current) => (current + 1) % features.length);
  };

  return (
    <section className="features" id="features">
      <div className="features-title">
        <h2>¿Por qué elegirnos?</h2>
      </div>

      <div className="features-container">
        {features.map((feature, index) => (
          <div
            className={`feature ${index === activeIndex ? "active" : ""}`}
            key={feature.title}
          >
            <div className="feature-icon">
              <img src={feature.icon} alt="" />
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="features-controls">
        <button
          className="features-arrow"
          onClick={previousFeature}
          aria-label="Característica anterior"
        >
          ‹
        </button>

        <div className="features-dots">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              className={`features-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver característica ${index + 1}: ${feature.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          className="features-arrow"
          onClick={nextFeature}
          aria-label="Siguiente característica"
        >
          ›
        </button>
      </div>
      
<a href="#ubicacion" className="features-scroll">
  <span>NUESTRA UBICACIÓN</span>
  <span className="features-scroll-arrow">⌄</span>
</a>

    </section>
  );
}

export default Features;
