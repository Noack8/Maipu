// components/HeroSection.jsx
import './HeroSection.css'; // Crearemos este archivo para los estilos

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Libre Licenciamiento</h1>
        <p className="hero-subtitle">
          Impulsando la conectividad y el éxito de las empresas en México.
        </p>
        {/* Aquí iría una imagen de fondo o un collage de imágenes de la marca */}
        <div className="hero-image-placeholder">
          [Espacio para Imagen Principal]
        </div>
      </div>
    </section>
  );
}
export default HeroSection;