import CardCarousel from '../components/CardCarousel'
import { casosExitoMX } from '../data/casosExitoMX'
import { casosExitoIntl } from '../data/casosExitoIntl'

function CasosExito({ onViewDetail }) {
  return (
    <div className="casos-exito-page" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '60px 0', overflow: 'hidden' }}>

      {/* ===== BLOQUE MÉXICO ===== */}
      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0b1f3a', margin: 0 }}>
            En México
          </h2>
        </div>
        
        {/* Fila 1 */}
        <CardCarousel items={casosExitoMX} initialSlide={0} onItemClick={(item) => onViewDetail(item, 'casos-exito')}/>
        
        {/* Fila 2: Usamos un margen superior negativo fuerte para pegarla a la fila 1 */}
        <div style={{ marginTop: '-40px' }}>
          <CardCarousel items={casosExitoMX} initialSlide={5} />
        </div>
      </div>

      {/* ===== BLOQUE INTERNACIONAL ===== */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0b1f3a', margin: 0 }}>
            Internacionales
          </h2>
        </div>

        {/* Fila 1 */}
        <CardCarousel items={casosExitoIntl} initialSlide={0} onItemClick={(item) => onViewDetail(item, 'casos-exito')}/>
        
        {/* Fila 2: Pegada a la fila 1 */}
        <div style={{ marginTop: '-40px' }}>
          <CardCarousel items={casosExitoIntl} initialSlide={2} onItemClick={(item) => onViewDetail(item, 'casos-exito')}/>
        </div>
      </div>
      
    </div>
  )
}

export default CasosExito