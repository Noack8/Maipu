// pages/Inicio.jsx
import HeroSection from '../components/HeroSection';
import CardCarousel from '../components/CardCarousel';
import { casosExitoMX } from '../data/casosExitoMX';
import { casosExitoIntl } from '../data/casosExitoIntl';

function Inicio() {
  return (
    <div>
      <HeroSection />
      <CardCarousel items={casosExitoMX} title="Casos de Éxito en México" />
      <CardCarousel items={casosExitoIntl} title="Casos de Éxito Internacionales" />
    </div>
  );
}
export default Inicio;