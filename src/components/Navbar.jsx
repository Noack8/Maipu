import { useState } from 'react'
import logo from '../assets/logo_en.png'
import { SECTIONS } from '../config/sections'

function Navbar({ activeSection, onNavigate }) {
  const [hoveredSection, setHoveredSection] = useState(null)

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
          <li 
            key={section.id} 
            className="nav-item"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <button
              type="button"
              className={`topbar-link${activeSection === section.id ? ' is-active' : ''}`}
              onClick={() => onNavigate(section.id)}
            >
              {section.label}
            </button>

            {/* MEGA MENU DESPLEGABLE */}
            {section.submenu && hoveredSection === section.id && (
              <div className="mega-menu">
                <div className="mega-menu-inner">
                  {section.submenu.map((col, idx) => (
                    <div key={idx} className="mega-column">
                      <h4>{col.title}</h4>
                      <ul>
                        {col.items.map((item, i) => (
                          <li key={i}><a href="#">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar