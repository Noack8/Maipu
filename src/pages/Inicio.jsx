import { useEffect, useRef } from 'react'
import './Inicio.css'
import heroBg from '../assets/hero-bg.png' 
import maipuEdificio from '../assets/building.jpg' 

const AnimateOnScroll = ({ children }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="fade-in-section">
      {children}
    </div>
  )
}

function Inicio() {
  return (
     <div className="inicio-page">
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 31, 58, 0.3), rgba(11, 31, 58, 0.3)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Envolvemos el texto en este contenedor */}
        <div className="hero-text-container">
          <h1 className="hero-title" style={{ color: '#ffffff' }}>
            Soluciones TIC de Alto Nivel
          </h1>
          <p className="hero-subtitle" style={{ color: '#ffffff' }}>
            Resiliencia, Innovación, Inversión Inteligente & Estrategia | Corporativo y Gobierno
          </p>
        </div>
      </section>

      {/* Perfil Corporativo */}
      <AnimateOnScroll>
        <section className="perfil-corporativo">
          <h2>Perfil Corporativo</h2>
          <div className="perfil-content">
            
            <div className="perfil-text">
              <p>
                <strong>Maipu Communication Technologies</strong>, fundada en 1993, es líder en redes seguras, digitalización e IA aplicada, ciberseguridad e infraestructura de TI.
              </p>
              <p>
                Desde 2015 forma parte de <strong>China Electronics Corporation (CEC)</strong>, el grupo más grande de electrónica, semiconductores y TI en China. Ranking Fortune Global 500 por 14 años.
              </p>
              <p>
                Con <strong>+33 años de experiencia</strong>, construimos ecosistemas digitales seguros y autosuficientes.
              </p>
            </div>

            <div className="perfil-image-container">
              <img 
                src={maipuEdificio} 
                alt="Edificio Corporativo Maipu" 
                className="perfil-image" 
              />
            </div>
            
          </div>
        </section>
      </AnimateOnScroll>

      {/* Pilares Tecnológicos */}
      <AnimateOnScroll>
        <section className="pilares-tecnologicos">
          <h2>Telecomunicaciones de Alto Impacto</h2>
          <div className="pilares-grid">
            <div className="pilar-card">
              <h3>Arquitectura Libre de Licenciamiento</h3>
              <p>Funcionalidades avanzadas desbloqueadas desde el primer día, sin costos ocultos.</p>
            </div>
            <div className="pilar-card">
              <h3>Actualizaciones de Firmware Perpetuas</h3>
              <p>Tu infraestructura siempre al día y protegida, sin pagos recurrentes.</p>
            </div>
            <div className="pilar-card">
              <h3>Estabilidad Crítica</h3>
              <p>Sistemas diseñados para alta concurrencia, encriptación avanzada y máxima estabilidad.</p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  )
}

export default Inicio