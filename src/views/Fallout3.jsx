import React, { useState } from "react";
import "./Fallout3.css";
import CancionesFallout3 from "./CancionesFallout3"; // Asegúrate de esta ruta

function Fallout3() {
  const [mostrarSoundtrack, setMostrarSoundtrack] = useState(false);

  return (
    <div className="fallout3-container">
      <nav className="fallout-nav">
        <button onClick={() => setMostrarSoundtrack(!mostrarSoundtrack)}>
          {mostrarSoundtrack ? "Radio Galaxia" : "Soundtrack"}
        </button>
      </nav>

      <h2>🎮 Bienvenido a la emisora de Fallout 3</h2>

      {!mostrarSoundtrack ? (
        <section className="radio-galaxia">
          <h3>📡 Radio Galaxia</h3>
          <CancionesFallout3 /> {/* Aquí se inserta el reproductor */}
        </section>
      ) : (
        <section className="soundtrack">
          <h3>🎼 Soundtrack Original</h3>
          <p>Aquí irán los temas instrumentales del juego.</p>
        </section>
      )}
    </div>
  );
}

export default Fallout3;
