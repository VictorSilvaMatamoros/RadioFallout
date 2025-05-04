import '../CSS/Fallout4.css'; // Estilo exclusivo para esta vista
import { Link } from "react-router";
import LogicaReproductor from "./LogicaReproductor"; // Asegúrate de esta ruta
function Fallout4() {

  const cancionesFallout4 = [
    {
      titulo: "He's a Demon, He's a Devil, He's a Doll",
      artista: "Betty Hutton",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/He's%20a%20Demon,%20He's%20a%20Devil,%20He's%20a%20Doll.mp3",
    },
    {
      titulo: "It's All Over But the Crying",
      artista: "The Ink Spots",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/It's%20All%20Over%20But%20the%20Crying.mp3",
    },
    {
      titulo: "It's a Man",
      artista: "Betty Hutton",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/It's%20a%20Man.mp3",
    },
    {
      titulo: "Keep a Knockin'",
      artista: "Little Richard",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Keep%20a%20Knockin'.mp3",
    },
    {
      titulo: "One More Tomorrow",
      artista: "Frankie Carle",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/One%20More%20Tomorrow.mp3",
    },
    {
      titulo: "Orange Colored Sky",
      artista: "Nat King Cole",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Orange%20Colored%20Sky.mp3",
    },
    {
      titulo: "Personality",
      artista: "Lloyd Price",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Personality.mp3",
    },
    {
      titulo: "Pistol Packin' Mama",
      artista: "Bing Crosby & The Andrews Sisters",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Pistol%20Packin'%20Mama.mp3",
    },
    {
      titulo: "Right Behind You Baby",
      artista: "Ray Smith",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Right%20Behind%20You%20Baby.mp3",
    },
    {
      titulo: "Rocket 69",
      artista: "Connie Allen",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Rocket%2069.mp3",
    },
    {
      titulo: "Sixty Minute Man",
      artista: "The Dominoes",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Sixty%20Minute%20Man.mp3",
    },
    {
      titulo: "The End of the World",
      artista: "Skeeter Davis",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/The%20End%20of%20the%20World.mp3",
    },
    {
      titulo: "The Wanderer",
      artista: "Dion",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/The%20Wanderer.mp3",
    },
    {
      titulo: "Undecided",
      artista: "John Kirby and The Onyx Club Boys",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Undecided.mp3",
    },
    {
      titulo: "Uranium Fever",
      artista: "Elton Britt",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Uranium%20Fever.mp3",
    },
    {
      titulo: "Uranium Rock",
      artista: "Warren Smith",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Uranium%20Rock.mp3",
    },
    {
      titulo: "Whole Lotta Shakin' Goin' On",
      artista: "Jerry Lee Lewis",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Whole%20Lotta%20Shakin'%20Goin'%20On.mp3",
    },
    {
      titulo: "Worry Worry Worry",
      artista: "Roy Brown",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Worry%20Worry%20Worry.mp3",
    },
    {
      titulo: "Accentuate the Positive",
      artista: "Johnny Mercer",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Accentuate%20the%20Positive.mp3",
    },
    {
      titulo: "Atom Bomb Baby",
      artista: "The Five Stars",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Atom%20Bomb%20Baby.mp3",
    },
    {
      titulo: "Butcher Pete, Part 2",
      artista: "Roy Brown",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Butcher%20Pete,%20Part%202.mp3",
    },
    {
      titulo: "Crawl Out Through the Fallout",
      artista: "Sheldon Allman",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Crawl%20Out%20Through%20the%20Fallout.mp3",
    },
    {
      titulo: "Dear Hearts and Gentle People",
      artista: "Bob Crosby and The Bobcats",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Dear%20Hearts%20and%20Gentle%20People.mp3",
    },
    {
      titulo: "Good Rocking Tonight",
      artista: "Roy Brown",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Good%20Rocking%20Tonight.mp3",
    },
    {
      titulo: "Grandma Plays the Numbers",
      artista: "Wynonie Harris",
      url: "https://kvzddbfkrkmcernfbxen.supabase.co/storage/v1/object/public/canciones/Fallout4_radio/Grandma%20Plays%20the%20Numbers.mp3",
    },
  ];

  return (
    <div className="fallout4-container">
       <nav className="fallout-nav">
              {/* Enlace al inicio */}
              <Link to="/" className="nav-link">
                Ir al Inicio
              </Link>
            </nav>

      <h2>🏙️ Bienvenido a la emisora de Fallout 4</h2>

        <section className="radio-diamond">
          <LogicaReproductor
            titulo="🎙️ Radio Dimon City"
            canciones={cancionesFallout4}
          />
        </section>
    </div>
  );
}

export default Fallout4;
