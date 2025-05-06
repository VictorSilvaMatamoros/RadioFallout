import React, { useRef, useState, useEffect } from 'react';
import '../CSS/ScrollHorizontal.css';

function ScrollHorizontal() {
  const contenedorRef = useRef(null);
  const [scrollMax, setScrollMax] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const scrollInterval = useRef(null); // Referencia para el intervalo de desplazamiento

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (contenedor) {
      setScrollMax(contenedor.scrollWidth - contenedor.clientWidth); // Calcula el máximo desplazamiento
    }

    const handleKeyDown = (e) => {
      if (!contenedor || scrollInterval.current) return; // Evita múltiples intervalos

      const velocidad = 5; // Ajusta la velocidad del desplazamiento
      if (e.key === 'ArrowRight') {
        scrollInterval.current = setInterval(() => {
          contenedor.scrollBy({ left: velocidad, behavior: 'auto' });
          setScrollValue(contenedor.scrollLeft);
        }, 16); // Aproximadamente 60 FPS
      } else if (e.key === 'ArrowLeft') {
        scrollInterval.current = setInterval(() => {
          contenedor.scrollBy({ left: -velocidad, behavior: 'auto' });
          setScrollValue(contenedor.scrollLeft);
        }, 16);
      }
    };

    const handleKeyUp = () => {
      clearInterval(scrollInterval.current); // Detiene el desplazamiento
      scrollInterval.current = null;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      clearInterval(scrollInterval.current); // Limpia el intervalo al desmontar
    };
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();

    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    const velocidad = 3; // Ajusta este valor para aumentar la velocidad
    contenedor.scrollBy({
      left: e.deltaY * velocidad,
      behavior: 'smooth',
    });

    setScrollValue(contenedor.scrollLeft); // Actualiza el valor del control deslizante
  };

  const handleSliderInput = (e) => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;

    const newValue = parseInt(e.target.value, 10);
    setScrollValue(newValue);
    contenedor.scrollLeft = newValue; // Mueve el contenedor en tiempo real
  };

  return (
    <div>
      <div
        className="scroll-contenedor"
        ref={contenedorRef}
        onWheel={handleWheel}
        tabIndex={0} // Permite que el contenedor reciba eventos de teclado
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

      {/* Barra de desplazamiento */}
      <input
        type="range"
        min="0"
        max={scrollMax}
        value={scrollValue}
        onInput={handleSliderInput} // Cambiado a onInput para tiempo real
        className="scroll-slider"
      />
    </div>
  );
}

export default ScrollHorizontal;