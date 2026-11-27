// src/pages/Eventos.jsx
import { eventosData } from '../data/eventosData'
import ContactForm from '../components/ContactForm'
import './Eventos.css'

function Eventos({ onViewDetail }) {
  return (
    <div className="eventos-page">
      <h1>Nuestros Eventos</h1>
      
      <div className="events-list">
        {eventosData.map((evento) => (
          <div key={evento.id} className="event-card-full">
            <div className="event-image-placeholder">
              <span>Imagen del Evento</span>
            </div>
            <div className="event-details">
              <h3>{evento.titulo}</h3>
              <p className="event-date">{evento.fecha}</p>
              <p className="event-desc">{evento.descripcion}</p>
              <button 
                className="card-button"
                onClick={() => onViewDetail(evento, 'eventos')}
              >
                Leer más
              </button>
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