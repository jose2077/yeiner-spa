import "./Location.css";
import location from "../assets/location.svg";
import watch from "../assets/watch.svg";
import message from "../assets/message.svg";
import wmessage from "../assets/wmessage.svg";
import gmaps from "../assets/gmaps.svg";

function Location() {
  return (
    <section className="location" id="ubicacion">

      <div className="location-header">
        <h2>NUESTRA UBICACIÓN</h2>

        <span>
          Visítanos y dale a tu vehículo el cuidado que merece.
        </span>
      </div>

      <div className="location-card">

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1790302618274!6m8!1m7!1sr4d4bPLLGNjNn18lk1ZA-A!2m2!1d7.065653022103098!2d-73.84627241709228!3f268.3379395947158!4f-21.24547328739142!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="location-info">

          <div className="location-item">
            <div className="location-icon"><img src={location} alt="" /></div>

            <div>
              <h3>Dirección</h3>
              <p>Sector la Y, frente a envía</p>
            </div>
          </div>

          <div className="location-item">
            <div className="location-icon"><img src={watch} alt="" /></div>

            <div>
              <h3>Horario de atención</h3>
              <p>Lunes a sábado<br />8:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="location-item">
            <div className="location-icon"><img src={message} alt="" /></div>

            <div>
              <h3>WhatsApp</h3>
              <p>311 622 2661</p>
            </div>
          </div>

          <div className="location-buttons">
            <a
            
              href="https://wa.me/573116222661"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <img src={wmessage} alt="" />
              Escribir por WhatsApp
            </a>

            <a
              href="https://maps.app.goo.gl/DevMM1Px6jUxL6LL8"
              target="_blank"
              rel="noopener noreferrer"
              className="maps-button"
            >
              <img src={gmaps} alt="" />
              Abrir en Google Maps
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Location;