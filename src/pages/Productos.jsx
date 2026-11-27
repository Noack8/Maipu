import { useState } from 'react'
// Importamos nuestros datos centralizados
import { PRODUCTS_BY_SUBTAB } from '../data/productsData'

const CATEGORIES = ['Router', 'Switch', 'WLAN', 'Cloud&AI', 'Storage&Server', 'Security', 'M2M', 'GPON', 'VoIP']
// Subcategorías de la sección Router
const SUB_TABS = ['Core Router', 'Aggregation Router', 'Access Router', '4G/5G Router']

function Productos({ onNavigate }) {
  // Estado para la categoría principal (Router, Switch, etc.)
  const [activeCategory, setActiveCategory] = useState('Router')
  // Estado para la subcategoría (Core Router, etc.)
  const [activeSubTab, setActiveSubTab] = useState('Core Router')

  // Obtenemos los productos de la subcategoría seleccionada
  const currentProducts = PRODUCTS_BY_SUBTAB[activeSubTab] || []

  return (
    <div className="product-page">
      <div className="product-layout">
        
        {/* BARRA LATERAL */}
        <aside className="product-sidebar">
          <ul>
            {CATEGORIES.map(cat => (
              <li key={cat}>
                <button 
                  className={activeCategory === cat ? 'active' : ''}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat} <span>›</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="product-main">
          {/* BREADCRUMB DINÁMICO: Router > Core Router */}
          <div className="breadcrumb">
            {activeCategory} &gt; {activeSubTab}
          </div>
          
          <div className="search-bar-container">
            <input type="text" placeholder="Search products..." />
            <button className="search-btn">search</button>
          </div>

          <div className="product-content-box">
            <div className="box-header">
              <h2>{activeCategory}</h2>
              <a href="#">overview&gt;</a>
            </div>

            {/* PESTAÑAS (TABS) */}
            <div className="sub-tabs">
              {SUB_TABS.map(tab => (
                <button 
                  key={tab} 
                  className={activeSubTab === tab ? 'active' : ''}
                  onClick={() => setActiveSubTab(tab)} // Cambia la pestaña activa
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* CUADRÍCULA DE PRODUCTOS */}
            <div className="product-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map(prod => (
                  <div key={prod.id} className="product-card">
                    {/* Aquí usamos onNavigate para que cuando hagan clic los lleve a la página de detalle */}
                    <a 
                      href={`/producto/${prod.id}`} 
                      className="product-link"
                      onClick={(e) => {
                        e.preventDefault(); // Evita que la página recargue
                        // Aquí le decimos a App.jsx que cambie a la página de detalles
                        // (Necesitaremos configurar esto en App.jsx más adelante)
                        if(onNavigate) onNavigate('detalle-producto'); 
                      }}
                    >
                      <img src={prod.img} alt={prod.name} />
                      <p>{prod.name}</p>
                    </a>
                  </div>
                ))
              ) : (
                <p style={{ padding: '20px' }}>No hay productos en esta categoría aún.</p>
              )}
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

export default Productos