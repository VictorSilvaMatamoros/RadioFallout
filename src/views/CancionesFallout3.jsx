// src/components/ReproductorFallout.jsx
import React, { useRef } from "react";
import "./Fallout3.css";

function CancionesFallout3() {
  const canciones = [
    {
      titulo: "Swing Doors",
      artista: "Allan Gray",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Allan_Gray_Swing_Doors.mp3",
    },
    {
      titulo: "Crazy He Calls Me",
      artista: "Billie Holiday",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Billie_Holiday%20_Crazy_He_Calls_Me.mp3",
    },
    {
      titulo: "Easy Living",
      artista: "Billie Holiday",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Billie%20Holiday-%20Easy%20Living.mp3",
    },
    {
      titulo: "Jazzy Interlude",
      artista: "Billy Munn",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Billy%20Munn%20-%20Jazzy%20Interlude.mp3",
    },
    {
      titulo: "Happy Times",
      artista: "Bob Crosby and The Bobcats",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Bob%20Crosby%20and%20The%20Bobcats%20-%20Happy%20Times.mp3",
    },
    {
      titulo: "Way Back Home",
      artista: "Bob Crosby and The Bobcats",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Bob%20Crosby%20and%20The%20Bobcats%20-%20Way%20Back%20Home.mp3",
    },
    {
      titulo: "Civilization",
      artista: "Danny Kaye and The Andrews Sisters",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Danny%20Kaye%20and%20The%20Andrews%20Sisters%20-%20Civilization.mp3",
    },
    {
      titulo: "Rhythm For You",
      artista: "Eddy Christiani and Frans Poptie",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Eddy%20Christiani%20and%20Frans%20Poptie%20-%20Rythm%20For%20You.mp3",
    },
    {
      titulo: "Fox Boogie",
      artista: "Gerhard Trede",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Gerhard%20Trede%20-%20Fox%20Boogie.mp3",
    },
    {
      titulo: "Jolly Days",
      artista: "Gerhard Trede",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Gerhard%20Trede%20-%20Jolly%20Days.mp3",
    },
    {
      titulo: "I'm Tickled Pink",
      artista: "Jack Shaindlin",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Jack%20Shaindlin%20-%20I'm%20Tickled%20Pink.mp3",
    },
    {
      titulo: "Let's Go Sunning",
      artista: "Jack Shaindlin",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Jack%20Shaindlin%20-%20Let's%20Go%20Sunning.mp3",
    },
    {
      titulo: "Butcher Pete (Part 1)",
      artista: "Roy Brown",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Roy%20Brown%20-%20Butcher%20Pete%20(Part%201).mp3",
    },
    {
      titulo: "Mighty Mighty Man",
      artista: "Roy Brown",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Roy%20Brown%20-%20Mighty%20Mighty%20Man.mp3",
    },
    {
      titulo: "Boogie Man",
      artista: "Sid Phillips",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Sid%20Phillips%20-%20Boogie%20Man.mp3",
    },
    {
      titulo: "A Wonderful Guy",
      artista: "Tex Beneke and Margaret Whiting",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/Tex%20Beneke%20and%20Margaret%20Whiting%20-%20A%20Wonderful%20Guy.mp3",
    },

    {
      titulo: "Into Each Life Some Rain Must Fall",
      artista: "The Ink Spots and Ella Fitzgerald",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/The%20Ink%20Spots%20and%20Ella%20Fitzgerald%20-%20Into%20Each%20Life%20Some%20Rain%20Must%20Fall.mp3",
    },
    {
      titulo: "I Don't Want to Set the World on Fire",
      artista: "The Ink Spots",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/The%20Ink%20Spots%20-%20I%20Don't%20Want%20to%20Set%20the%20World%20on%20Fire.mp3",
    },
    {
      titulo: "Maybe",
      artista: "The Ink Spots",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout3_radio/The%20Ink%20Spots%20-%20Maybe.mp3",
    },
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
      <h3>🎵 Canciones de la radio</h3>

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
            Tu navegador no soporta el reproductor de audio.
          </audio>
        </div>
      ))}
    </div>
  );
}

export default CancionesFallout3;
