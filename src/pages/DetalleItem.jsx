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
        {item.imagen ? (
          <img src={item.imagen} alt={item.titulo} />
        ) : (
          <span>[Espacio para imagen grande]</span>
        )}
      </div>

      <div className="detalle-contenido">
        <h3>Descripción del Proyecto</h3>
        <p className="descripcion-corta">{item.descripcion}</p>

        <div className="texto-largo">
          {item.contenido ? (
            <p>{item.contenido}</p>
          ) : (
            <p>
              Toda la información detallada de este caso: el reto que enfrentaba el cliente, 
              la solución implementada, los productos utilizados y los resultados obtenidos.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetalleItem