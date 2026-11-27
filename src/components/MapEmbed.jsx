// components/MapEmbed.jsx
function MapEmbed() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=..." // Pega aquí el enlace que copiaste
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Maipu México"
      ></iframe>
    </div>
  );
}
export default MapEmbed;