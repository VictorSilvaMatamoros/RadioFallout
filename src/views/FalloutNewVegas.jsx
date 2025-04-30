import { useState } from "react";
import './FalloutNewVegas.css'; // Estilo exclusivo para esta vista

function FalloutNewVegas() {
  const [mostrarSoundtrack, setMostrarSoundtrack] = useState(false);

  return (
    <div className="vegas-container">
      <nav className="fallout-nav">
        <button onClick={() => setMostrarSoundtrack(!mostrarSoundtrack)}>
          {mostrarSoundtrack ? "Radio New Vegas" : "Soundtrack"}
        </button>
      </nav>

      <h2>🎰 Bienvenido a la emisora de Fallout: New Vegas</h2>

      {!mostrarSoundtrack ? (
        <section className="radio-vegas">
          <h3>🎙️ Radio New Vegas</h3>
          <p>Aquí irán las canciones de la radio del Mojave.</p>
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

export default FalloutNewVegas;
