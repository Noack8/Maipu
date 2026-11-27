import logo from '../assets/logo_en.png'
import { SECTIONS } from '../config/sections'

function Navbar({ activeSection, onNavigate }) {
  return (
    <nav className="topbar" aria-label="Navegación principal">
      <a
        href="#inicio"
        className="topbar-brand"
        onClick={(e) => { e.preventDefault(); onNavigate('inicio'); }}
      >
        <img src={logo} alt="Maipu" className="topbar-logo" />
      </a>

      <ul className="topbar-links">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={`topbar-link${activeSection === section.id ? ' is-active' : ''}`}
              onClick={() => onNavigate(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar