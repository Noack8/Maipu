import { useState } from 'react'
import Navbar from './components/Navbar'
import ContactBar from './components/ContactBar'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Soluciones from './pages/Soluciones'
import Soporte from './pages/Soporte'
import Socio from './pages/Socio'
import CasosExito from './pages/CasosExito'
import AcercaDe from './pages/AcercaDe'
import './App.css'

const PAGES = {
  inicio: Inicio,
  productos: Productos,
  soluciones: Soluciones,
  soporte: Soporte,
  socio: Socio,
  'casos-exito': CasosExito,
  'acerca-de': AcercaDe,
}

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const Page = PAGES[activeSection] ?? Inicio

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        <Page />
      </main>
      <ContactBar />
    </>
  )
}

export default App