import { useState } from "react";
import './Fallout4.css'; // Estilo exclusivo para esta vista
import CancionesFallout4 from "./CancionesFallout4"; // Asegúrate de esta ruta
function Fallout4() {
  const [mostrarSoundtrack, setMostrarSoundtrack] = useState(false);

  return (
    <div className="fallout4-container">
      <nav className="fallout-nav">
        <button onClick={() => setMostrarSoundtrack(!mostrarSoundtrack)}>
          {mostrarSoundtrack ? "Diamond City" : "Soundtrack"}
        </button>
      </nav>

      <h2>🏙️ Bienvenido a la emisora de Fallout 4</h2>

      {!mostrarSoundtrack ? (
        <section className="radio-diamond">
          <h3>📻 Diamond City Radio</h3>
          <CancionesFallout4 />
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

export default Fallout4;
