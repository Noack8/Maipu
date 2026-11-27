function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-columns">
          
          <div className="footer-col">
            <h3>Soporte</h3>
            <ul>
              <li><a href="#">Soporte 1</a></li>
              <li><a href="#">Soporte 2</a></li>
              <li><a href="#">Soporte 3</a></li>
              <li><a href="#">Soporte 4</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Eventos</h3>
            <ul>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Presentaciones</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Acerca de Maipu México</h3>
            <ul>
              <li><a href="#">Company Profile</a></li>
              <li><a href="#">Milestone</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contactanos</h3>
            <p>Tel: <a href="tel:+525512345678">+52 55 1234 5678</a></p>
            <p>E-mail: <a href="mailto:contacto@maipu.mx">contacto@maipu.mx</a></p>
          </div>

        </div>

        {/* Línea inferior de Copyright */}
        <div className="footer-bottom">
          <p>COPYRIGHT: 2013-2026 Maipu International. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Aviso Legal</a>
            <a href="#">Privacidad</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer