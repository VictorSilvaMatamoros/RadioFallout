import React, { useRef } from "react";
import "../CSS/LogicaReproductor.css"; 

function LogicaReproductor({ titulo = "🎵 Reproductor", canciones }) {
  const audiosRef = useRef([]);

  const handlePlay = (indexActual) => {
    audiosRef.current.forEach((audio, i) => {
      if (i !== indexActual && audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  };

  const handleEnded = (indexActual) => {
    const siguienteIndex = (indexActual + 1) % canciones.length;
    const siguienteAudio = audiosRef.current[siguienteIndex];

    if (siguienteAudio) {
      audiosRef.current.forEach((audio, i) => {
        if (i !== siguienteIndex && audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      siguienteAudio.play();
    }
  };

  return (
    <div className="reproductor-container">
      <h3>{titulo}</h3>
      {canciones.map((cancion, index) => (
        <div key={index} className="tarjeta-cancion">
          <h4>{cancion.titulo}</h4>
          <p>{cancion.artista}</p>
          <audio
            controls
            ref={(el) => (audiosRef.current[index] = el)}
            onPlay={() => handlePlay(index)}
            onEnded={() => handleEnded(index)}
          >
            <source src={cancion.url} type="audio/mp3" />
            Tu navegador no soporta el audio.
          </audio>
        </div>
      ))}
    </div>
  );
}

export default LogicaReproductor;