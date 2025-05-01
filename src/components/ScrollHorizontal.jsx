import React, { useRef } from 'react';
import '../CSS/ScrollHorizontal.css';

function ScrollHorizontal() {
  const contenedorRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();

    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    contenedor.scrollBy({
      left: e.deltaY,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="scroll-contenedor"
      ref={contenedorRef}
      onWheel={handleWheel}
    >
      <section className="seccion seccion-fallout3">
        <h2>Fallout 3</h2>
        <a href="/fallout3">Ir a Radio Galaxy</a>
      </section>

      <section className="seccion seccion-fallout-new-vegas">
        <h2>Fallout New Vegas</h2>
        <a href="/newvegas">Ir a New Vegas Radio</a>
      </section>

      <section className="seccion seccion-fallout4">
        <h2>Fallout 4</h2>
        <a href="/fallout4">Ir a Diamond City Radio</a>
      </section>
    </div>
  );
}

export default ScrollHorizontal;
