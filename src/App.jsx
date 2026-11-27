// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import CasosExito from './pages/CasosExito' // Asegúrate de que el archivo se llame así
import Eventos from './pages/Eventos'
import AcercaDe from './pages/AcercaDe'
import DetalleItem from './pages/DetalleItem'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [selectedItem, setSelectedItem] = useState(null)
  const [previousPage, setPreviousPage] = useState('inicio')

  const handleViewDetail = (item, fromPage) => {
    setSelectedItem(item)
    setPreviousPage(fromPage)
    setActiveSection('detalle')
  }

  const handleBack = () => {
    setSelectedItem(null)
    setActiveSection(previousPage)
  }

  const handleNavigate = (section) => {
    setSelectedItem(null)
    setActiveSection(section)
  }

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