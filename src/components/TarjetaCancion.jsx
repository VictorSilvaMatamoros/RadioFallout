// src/components/TarjetaCancion.jsx
import React from 'react';

function TarjetaCancion({ nombre, imagen, onPlay }) {
  return (
    <div className="tarjeta-cancion" onClick={onPlay} style={{ cursor: 'pointer' }}>
      <img src={imagen} alt={nombre} className="imagen-cancion" />
      <h3 className="nombre-cancion">{nombre}</h3>
      <div className="detalles">
        <p className="mensaje-fallout">🎵 Escucha ahora!</p>
      </div>
    </div>
  );
}

export default TarjetaCancion;
