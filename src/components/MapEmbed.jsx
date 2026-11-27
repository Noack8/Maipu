// src/components/MapEmbed.jsx
function MapEmbed() {
  return (
    <div className="map-container">
      <iframe
        // Aquí usamos las coordenadas exactas de tu enlace
        src="https://maps.google.com/maps?q=19.441112,-99.1965961&z=15&output=embed"
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