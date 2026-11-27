import { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Eventos from './pages/Eventos';
import AcercaDe from './pages/AcercaDe';
import Footer from './components/Footer';
import './App.css';

const PAGES = {
  inicio: Inicio,
  eventos: Eventos,
  'acerca-de': AcercaDe,
};

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const Page = PAGES[activeSection] || Inicio;

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="main-content">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
export default App;