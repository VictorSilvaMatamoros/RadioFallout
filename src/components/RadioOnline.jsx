// src/components/RadioOnline.jsx
/** 
import React, { useEffect, useState, useCallback, useRef } from 'react';
import TarjetaCancion from './TarjetaCancion';

function RadioOnline() {
  const [canciones, setCanciones] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fin, setFin] = useState(false);
  const audioRef = useRef(null); // 🎧 Referencia al audio
  const [cancionActual, setCancionActual] = useState(null); // La canción que suena

  const limite = 10;

  const obtenerCanciones = useCallback(async () => {
    if (loading || fin) return;

    setLoading(true);
    try {
      const respuesta = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=rock&index=${pagina}&limit=${limite}`
      );
      const datos = await respuesta.json();

      if (datos.data.length === 0) {
        setFin(true);
      } else {
        setCanciones((prev) => [...prev, ...datos.data]);
        setPagina((prev) => prev + limite);
      }
    } catch (error) {
      console.error('Error al cargar canciones', error);
    }
    setLoading(false);
  }, [pagina, loading, fin]);

  useEffect(() => {
    obtenerCanciones();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const alturaVentana = window.innerHeight;
      const alturaDocumento = document.documentElement.scrollHeight;

      if (scrollTop + alturaVentana >= alturaDocumento - 100) {
        obtenerCanciones();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [obtenerCanciones]);

  // 🎵 Función para reproducir una canción desde el principio
  const reproducirCancion = (previewUrl) => {
    // Si hay una canción sonando, pausamos y la reiniciamos
    if (audioRef.current) {
      audioRef.current.pause(); // Pausa la canción actual
      audioRef.current.currentTime = 0; // Reinicia al principio
    }

    if (cancionActual === previewUrl) {
      setCancionActual(null); // Si ya estaba sonando, lo detenemos
      return;
    }

    const nuevoAudio = new Audio(previewUrl);
    nuevoAudio.play();
    audioRef.current = nuevoAudio;
    setCancionActual(previewUrl);

    nuevoAudio.onended = () => {
      setCancionActual(null); // Reset al terminar
    };
  };

  return (
    <div>
      <h2>🎶 Canciones de Deezer</h2>
      <div className="lista-canciones">
        {canciones.map((cancion, index) => (
          <TarjetaCancion
            key={index}
            nombre={`${cancion.title} - ${cancion.artist.name}`}
            imagen={cancion.album.cover_medium}
            onPlay={() => reproducirCancion(cancion.preview)} // ⏯️
          />
        ))}
      </div>
      {loading && <p>Cargando más canciones...</p>}
      {fin && <p>🎉 Has llegado al final de la lista.</p>}
    </div>
  );
}

export default RadioOnline;
*/