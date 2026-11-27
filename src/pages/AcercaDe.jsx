// pages/AcercaDe.jsx
import MapEmbed from '../components/MapEmbed';
import ContactForm from '../components/ContactForm';

function AcercaDe() {
  return (
    <div className="page-container">
      <h1>Acerca de Maipu México</h1>
      <section className="company-profile">
        <h2>Perfil de la Compañía</h2>
        <p>[Texto descriptivo de la empresa, su misión y visión]</p>
      </section>
      <section className="contact-info">
        <h2>Información de Contacto</h2>
        <p>Dirección: [Dirección de la empresa]</p>
        <p>Teléfono: [Número de teléfono]</p>
        <p>Correo: [Correo electrónico]</p>
        <MapEmbed />
      </section>
      <ContactForm
        title="¿Tienes más dudas sobre nuestros productos o manuales?"
        description="Déjanos tu nombre y correo para enviarte la información que necesitas."
        formType="contacto"
      />
    </div>
  );
}
export default AcercaDe;