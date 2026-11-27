// pages/Eventos.jsx
import { eventosData } from '../data/eventosData';
import ContactForm from '../components/ContactForm';

function Eventos() {
  return (
    <div className="page-container">
      <h1>Nuestros Eventos</h1>
      <div className="events-grid">
        {eventosData.map((evento) => (
          <div key={evento.id} className="event-card">
            <div className="event-image-placeholder">[Imagen del Evento]</div>
            <h3>{evento.titulo}</h3>
            <p className="event-date">{evento.fecha}</p>
            <p>{evento.descripcion}</p>
            {/* Botón opcional para ir a una página de detalle del evento */}
            <button className="card-button">Leer más</button>
          </div>
        ))}
      </div>
      {/* Formulario de interés */}
      <ContactForm
        title="¿Interesado en que Maipu participe en tu evento?"
        description="Déjanos tus datos y nos pondremos en contacto."
        formType="evento"
      />
    </div>
  );
}
export default Eventos;