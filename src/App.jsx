import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import CasosExito from './pages/CasosExito'
import Eventos from './pages/Eventos'
import AcercaDe from './pages/AcercaDe'
import DetalleItem from './pages/DetalleItem' // 1. Importamos la nueva página
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [selectedItem, setSelectedItem] = useState(null) // 2. Guarda los datos
  const [previousPage, setPreviousPage] = useState('inicio') // 3. Para saber a dónde volver

  // Función para ir a los detalles
  const handleViewDetail = (item, fromPage) => {
    setSelectedItem(item)
    setPreviousPage(fromPage)
    setActiveSection('detalle')
  }

  // Función para volver atrás
  const handleBack = () => {
    setSelectedItem(null)
    setActiveSection(previousPage)
  }

  // Función normal de navegación (limpia los detalles si cambias de página)
  const handleNavigate = (section) => {
    setSelectedItem(null)
    setActiveSection(section)
  }

  // Renderizamos el componente según el estado
  let PageComponent
  if (activeSection === 'inicio') PageComponent = <Inicio />
  if (activeSection === 'casos-exito') PageComponent = <CasosExito onViewDetail={handleViewDetail} />
  if (activeSection === 'eventos') PageComponent = <Eventos onViewDetail={handleViewDetail} />
  if (activeSection === 'acerca-de') PageComponent = <AcercaDe />
  if (activeSection === 'detalle') PageComponent = <DetalleItem item={selectedItem} onBack={handleBack} />

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="app-main">
        {PageComponent}
      </main>
      <Footer />
    </>
  )
}

export default App