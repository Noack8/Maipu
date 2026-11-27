function ContactBar() {
  return (
    <footer className="contact-bar" aria-label="Barra de contacto">
      <a href="tel:+525512345678" className="contact-item">
        <span aria-hidden="true">📞</span> +52 55 1234 5678
      </a>
      <a href="mailto:contacto@maipu.mx" className="contact-item">
        <span aria-hidden="true">✉️</span> contacto@maipu.mx
      </a>
      <a
        href="https://wa.me/525512345678"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <span aria-hidden="true">💬</span> WhatsApp
      </a>
    </footer>
  )
}

export default ContactBar