import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import CasosExito from './pages/CasosExito'
import Eventos from './pages/Eventos'
import AcercaDe from './pages/AcercaDe'
import './App.css'

const PAGES = {
  'inicio': Inicio,
  'casos-exito': CasosExito,
  'eventos': Eventos,
  'acerca-de': AcercaDe,
}

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const Page = PAGES[activeSection] ?? Inicio

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="app-main">
        <Page />
      </main>
      <Footer />
    </>
  )
}

export default App