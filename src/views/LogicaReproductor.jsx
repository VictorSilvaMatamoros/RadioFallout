import React, { useEffect, useRef, useState } from "react";
import "../CSS/LogicaReproductor.css";
import pipBoy from "../img/pipBoy.png"; // ✅ CORRECTO

function LogicaReproductor({ titulo = "🎵 Radio Galaxia", canciones }) {
  const audiosRef = useRef([]);
  const [indiceActual, setIndiceActual] = useState(null);

  const reproducirCancionAleatoria = () => {
    let nuevoIndice;
    do {
      nuevoIndice = Math.floor(Math.random() * canciones.length);
    } while (nuevoIndice === indiceActual && canciones.length > 1);

    setIndiceActual(nuevoIndice);
  };

  useEffect(() => {
    const iniciarConClick = () => {
      reproducirCancionAleatoria();
      window.removeEventListener("click", iniciarConClick);
    };

    window.addEventListener("click", iniciarConClick);
    return () => window.removeEventListener("click", iniciarConClick);
  }, []);

  useEffect(() => {
    if (indiceActual !== null) {
      const audio = audiosRef.current[indiceActual];
      if (audio) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) =>
            console.warn("Autoplay bloqueado por el navegador:", err)
          );
        }
      }
    }
  }, [indiceActual]);

  const handleEnded = () => {
    reproducirCancionAleatoria();
  };

  return (
    <div className="pipboy-wrapper">
      <img src={pipBoy} alt="Pip-Boy" className="pipboy-bg" />
      <div className="pantalla-pipboy">
        {indiceActual !== null && (
          <div className="cancion-activa">
            <h4>{canciones[indiceActual].titulo}</h4>
            <p>{canciones[indiceActual].artista}</p>
            <audio
              ref={(el) => (audiosRef.current[indiceActual] = el)}
              onEnded={handleEnded}
            >
              <source
                src={canciones[indiceActual].url}
                type="audio/mp3"
              />
              Tu navegador no soporta el audio.
            </audio>
          </div>
        )}
        {indiceActual === null && (
          <p className="espera-msg">
            ⚠️ Haz clic en cualquier parte para iniciar la radio...
          </p>
        )}
      </div>
    </div>
  );
}

export default LogicaReproductor;
