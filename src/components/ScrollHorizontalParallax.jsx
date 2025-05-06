import React, { useRef, useEffect } from 'react';
import fondo from '../img/fondo.png';
import medio from '../img/Vault_111.jpg';
import frente from '../img/newvegas.jpg';
import '../CSS/ScrollHorizontalParallax.css';

function ScrollHorizontalParallax() {
  const contenedorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = contenedorRef.current.scrollLeft;

      document.querySelectorAll('.parallax-layer').forEach((layer) => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${scrollLeft * speed}px)`;
      });
    };

    const contenedor = contenedorRef.current;
    contenedor.addEventListener('scroll', handleScroll);

    return () => contenedor.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-contenedor" ref={contenedorRef}>
      <div className="parallax-layer fondo" data-speed="0.2">
        <img src={fondo} alt="Fondo" />
      </div>
      <div className="parallax-layer medio" data-speed="0.5">
        <img src={medio} alt="Capa Media" />
      </div>
      <div className="parallax-layer frente" data-speed="1">
        <img src={frente} alt="Capa Frontal" />
      </div>
    </div>
  );
}

export default ScrollHorizontalParallax;