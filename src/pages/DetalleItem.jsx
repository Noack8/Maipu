// src/pages/DetalleItem.jsx
import './DetalleItem.css'

function DetalleItem({ item, onBack }) {
  if (!item) return null;

  return (
    <div className="detalle-page">
      <button className="btn-volver" onClick={onBack}>
        ← Volver
      </button>

      <div className="detalle-header">
        <h1>{item.titulo}</h1>
        {item.fecha && <p className="detalle-fecha">{item.fecha}</p>}
      </div>

      <div className="detalle-imagen">
        <span>[Espacio para imagen grande del proyecto]</span>
      </div>

      <div className="detalle-contenido">
        <h3>Descripción</h3>
        <p>{item.descripcion}</p>
        
        {/* Texto de relleno para simular más información */}
        <p>
          Toda la información detallada de este caso de éxito: 
          el reto que enfrentaba el cliente, la solución implementada por Maipu, 
          los productos utilizados y los resultados obtenidos.
        </p>
      </div>
    </div>
  )
}

export default DetalleItem