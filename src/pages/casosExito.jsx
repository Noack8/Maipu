import CardCarousel from '../components/CardCarousel'
import { casosExitoMX } from '../data/casosExitoMX'
import { casosExitoIntl } from '../data/casosExitoIntl'

function CasosExito() {
  return (
    <div className="casos-exito-page" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '60px 0', overflow: 'hidden' }}>
      
      {/* ===== BLOQUE MÉXICO ===== */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0b1f3a', margin: 0 }}>
            Casos de Éxito en México
          </h2>
        </div>
        
        {/* Fila 1 */}
        <CardCarousel items={casosExitoMX} initialSlide={0} />
        
        {/* Fila 2: marginTop negativo para pegarla a la fila 1 */}
        <div style={{ marginTop: '-30px' }}>
          <CardCarousel items={casosExitoMX} initialSlide={5} />
        </div>
      </div>

      {/* ===== BLOQUE INTERNACIONAL ===== */}
      <div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0b1f3a', margin: 0 }}>
            Casos de Éxito Internacionales
          </h2>
        </div>

        {/* Fila 1 */}
        <CardCarousel items={casosExitoIntl} initialSlide={0} />
        
        {/* Fila 2: marginTop negativo para pegarla a la fila 1 */}
        <div style={{ marginTop: '-30px' }}>
          <CardCarousel items={casosExitoIntl} initialSlide={2} />
        </div>
      </div>
      
    </div>
  )
}

export default CasosExito