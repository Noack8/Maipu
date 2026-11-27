// components/HeroSection.jsx
import './HeroSection.css';
// 1. Importas la imagen arriba
import heroImage from '../assets/hero-main.jpg'; 

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Libre Licenciamiento</h1>
        <p className="hero-subtitle">
          Impulsando la conectividad y el éxito de las empresas en México.
        </p>
        
        {/* 2. Reemplazas el texto por la etiqueta <img> */}
        <div className="hero-image-container">
          <img src={heroImage} alt="Maipu México" className="hero-image" />
        </div>
        
      </div>
    </section>
  );
}
export default HeroSection;