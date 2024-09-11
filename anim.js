// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hoy suenan las notas de mi canción", time: 0 },
  { text: "Y te recuerdo que es especial", time: 6 },
  { text: "Un año que suma hay que celebrar", time: 11 },
  { text: "Hoy quiero acercarme a tu corazón", time: 16 },
  { text: "Y mi regalo será cantar", time: 21 },
  { text: "Estas palabras que hay en mi voz", time: 26 },
  { text: "Las personas especiales como tú", time: 33 },
  { text: "Con los años siempre llenan con su luz", time: 38 },
  { text: "Solo quiero que tengas un cumpleaños feliz", time: 43 },
  { text: "Solo quiero que disfrutes un cumpleaños feliz", time: 52 },
  { text: "Y que el cielo permita que yo pueda estar junto a ti", time: 58 },
  { text: "Hoy cada detalle es para ti", time: 66 },
  { text: "Me atrevo a decir que el amanecer", time: 72 },
  { text: "Pintó su color para festejar a ti", time: 78 },
  { text: "Y los cielos son testigos del amor", time: 85 },
  { text: "Que perdura y va rodeando tu exterior", time: 90 },
  { text: "Solo quiero que tengas un cumpleaños feliz", time: 96 },
  { text: "Solo quiero que disfrutes un cumpleaños feliz", time: 104 },
  { text: "Solo quiero que disfrutes un cumpleaños feliz", time: 113 },
  { text: "Y que el cielo permita que yo pueda estar junto a ti", time: 119 },
  { text: "Junto a ti", time: 157 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
