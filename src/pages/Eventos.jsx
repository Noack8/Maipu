import { eventosData } from '../data/eventosData'
import ContactForm from '../components/ContactForm'
import './Eventos.css' // Archivo nuevo para estilos de eventos

function Eventos() {
  return (
    <div className="eventos-page">
      <h1>Nuestros Eventos</h1>
      
      <div className="events-list">
        {eventosData.map((evento) => (
          <div key={evento.id} className="event-card-full">
            <div className="event-image-placeholder">
              {/* [Imagen del Evento] */}
              <span>Imagen del Evento</span>
            </div>
            <div className="event-details">
              <h3>{evento.titulo}</h3>
              <p className="event-date">{evento.fecha}</p>
              <p className="event-desc">{evento.descripcion}</p>
              <button className="card-button">Leer más</button>
            </div>
          </div>
        ))}
      </div>

      <ContactForm
        title="¿Interesado en que Maipu participe en tu evento?"
        description="Déjanos tus datos y nos pondremos en contacto."
        formType="evento"
      />
    </div>
  )
}

export default Eventos