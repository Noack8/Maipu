// components/ContactForm.jsx
import { useState } from 'react';

function ContactForm({ title, description, formType }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar por email (ej. Formspree)
    console.log('Enviando por email:', { nombre, email, mensaje });
    alert('¡Gracias! Tu mensaje ha sido enviado.');
  };

  const handleWhatsApp = () => {
    const texto = `Hola, soy ${nombre}. Mi correo es ${email}. ${mensaje}`;
    const url = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(texto)}`; // Reemplaza con el número real
    window.open(url, '_blank');
  };

  return (
    <section className="contact-form-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Enviar por Email</button>
          <button type="button" className="btn-whatsapp" onClick={handleWhatsApp}>Enviar por WhatsApp</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;