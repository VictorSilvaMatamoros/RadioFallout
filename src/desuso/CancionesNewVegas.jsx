// src/components/CancionesFallout4.jsx
import React, { useRef } from "react";
import "./FalloutNewVegas.css"; // Asegúrate de tener tu CSS para Fallout 4

function CancionesNewVegas() {
  const canciones = [
    { titulo: "Ain't That A Kick In The Head", artista: "Dean Martin", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Ain't%20That%20A%20Kick%20In%20The%20Head.mp3" },
    { titulo: "Blue Moon", artista: "Frank Sinatra", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Blue%20Moon.mp3" },
    { titulo: "Butcher Pete (Part I)", artista: "Roy Brown", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Butcher%20Pete,%20Part%20I.mp3" },
    { titulo: "Butcher Pete (Part II)", artista: "Roy Brown", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Butcher%20Pete,%20Part%20II.mp3" },
    { titulo: "Civilization", artista: "Danny Kaye & The Andrews Sisters", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Civilisation.mp3" },
    { titulo: "Anything Goes", artista: "Cole Porter", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Cole%20Porter%20-%20Anything%20Goes%20(Official%20Audio).mp3" },
    { titulo: "Crazy He Calls Me", artista: "Billie Holiday", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Crazy%20He%20Calls%20Me.mp3" },
    { titulo: "Easy Living", artista: "Billie Holiday", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Easy%20Living.mp3" },
    { titulo: "Hangover Heart", artista: "Hank Thompson", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Hangover%20Heart.mp3" },
    { titulo: "I'm In Love With A Wonderful Guy", artista: "Tex Beneke & Margaret Whiting", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/I'm%20In%20Love%20With%20A%20Wonderful%20Guy.mp3" },
    { titulo: "Mad About The Boy", artista: "Dinah Washington", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Mad%20About%20The%20Boy.mp3" },
    { titulo: "Big Iron", artista: "Marty Robbins", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Marty%20Robbins%20-%20Big%20Iron%20(Lyrics).mp3" },
    { titulo: "Orange Colored Sky", artista: "Nat King Cole", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Orange%20Coloured%20Sky.mp3" },
    { titulo: "Mighty Mighty Man", artista: "Roy Brown", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Roy%20Brown%20-%20Mighty%20Mighty%20Man%20-%20Roy%20Brown.mp3" },
    { titulo: "Home On the Range", artista: "Roy Rogers", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Roy%20Rogers%20-%20Home%20On%20the%20Range%20-%20Remastered%20-%20Country%20Music%20Experience.mp3" },
    { titulo: "Something's Gotta Give", artista: "Sammy Davis Jr.", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Something's%20Gotta%20Give.mp3" },
    { titulo: "I Don't Want To Set The World On Fire", artista: "The Ink Spots", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Something's%20Gotta%20Give.mp3" },
    { titulo: "Into Each Life Some Rain Must Fall", artista: "The Ink Spots & Ella Fitzgerald", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/The%20Ink%20Spots%20-%20Into%20Each%20Life%20Some%20Rain%20Must%20Fall.mp3" },
    { titulo: "It's A Sin To Tell A Lie", artista: "The Ink Spots", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/The%20Ink%20Spots%20-%20It's%20A%20Sin%20To%20Tell%20A%20Lie.mp3" },
    { titulo: "Maybe", artista: "The Ink Spots", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/The%20Ink%20Spots%20-%20Maybe%20(Official%20Audio).mp3" },
    { titulo: "Way Back Home", artista: "Bob Crosby and The Bobcats", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Way%20Back%20Home.mp3" },
    { titulo: "Why Don't You Do Right", artista: "Peggy Lee", url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/FalloutNewVegas_radio/Why%20Don't%20You%20Do%20Right.mp3" },
  ];

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
    <div>
      <h3>🎶 Canciones de Fallout 4</h3>

      {canciones.map((cancion, index) => (
        <div key={index} className="tarjeta-cancion">
          <h4>{cancion.titulo}</h4>
          <p>{cancion.artista || "Artista desconocido"}</p>
          <audio
            controls
            ref={(el) => (audiosRef.current[index] = el)}
            onPlay={() => handlePlay(index)}
            onEnded={() => handleEnded(index)}
          >
            <source src={cancion.url} type="audio/mp3" />
            Tu navegador no soporta el reproductor de audio.
          </audio>
        </div>
      ))}
    </div>
  );
}

export default CancionesNewVegas;
