const RANDOM_WORDS = [
  "Intuitivo",
  "Eficiente",
  "Automatizado",
  "Interactivo",
  "Asistencia",
  "Personalizable",
  "Ultrarrápido",
  "Soporte",
  "Accesible",
  "Optimizado",
  "Seguro",
  "Versátil",
  "Innovador",
  "Vanguardista",
  "Robusto",
  "Avanzado",
  "Codigo abierto",
  "Multi-lenguaje",
  "IA integrado",
];

let i = 0;
let speed = 1;
let txt = "";
let lastWord = "";
let root = document.documentElement;
let textColor = getComputedStyle(root).getPropertyValue("--text");
let backgroundColor = getComputedStyle(root).getPropertyValue("--background");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll("*").forEach((element) => {
      element.classList.add("transition");
    });
  }, 1000); // Adjust the delay as needed
});

const DARK_BACKGROUND_COLORS = [
  "#1b3d4f", // Dark Blue

  "#2a2f4f", // Dark Purple

  "#2c3e50", // Dark Teal
  "#123524", // Dark Forest Green
  "#333a56", // Slate Blue
  "#3a3d47", // Charcoal
];

const DARK_TEXT_COLORS = [
  "#e0f7fa", // Light Cyan

  "#fce4ec", // Light Pink

  "#f1f8e9", // Light Lime
  "#fff9c4", // Light Yellow
  "#f8bbd0", // Light Rose
  "#e1bee7", // Light Lavender
];

const BACKGROUND_COLORS = [
  "#f0cbf0",
  "#df4671",
  "#eadaad",
  "#32bc81",
  "#f7c5bd",
  "#fdecbb",
];

const TEXT_COLORS = [
  "#15496a",
  "#f3e9cf",
  "#dd5e3f",
  "#203d3f",
  "#cc483c",
  "#fa2a59",
];

let isday = false;
let random;

function changeTheme() {
  let svgElement = document.getElementById("switchable");

  if (isday === true) {
    random = Math.floor(Math.random() * DARK_BACKGROUND_COLORS.length);
    document.documentElement.style.setProperty(
      "--text",
      DARK_TEXT_COLORS[random]
    );
    document.documentElement.style.setProperty(
      "--background",
      DARK_BACKGROUND_COLORS[random]
    );
    svgElement.outerHTML = `
      <svg id="switchable" onclick="changeTheme()" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
      </svg>`;
  } else {
    random = Math.floor(Math.random() * BACKGROUND_COLORS.length);
    document.documentElement.style.setProperty("--text", TEXT_COLORS[random]);
    document.documentElement.style.setProperty(
      "--background",
      BACKGROUND_COLORS[random]
    );
    svgElement.outerHTML = `
      <svg id="switchable" onclick="changeTheme()" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
      </svg>`;
  }

  isday = !isday;
}
changeTheme();
changeTheme();
let change = false;

function nyan() {
  if (!change) {
    const nyan = document.getElementById("nyan");
    nyan.style.display = "block"; // Show Nyan Cat
    change = true;

    setTimeout(() => {
      nyan.style.display = "none"; // Hide Nyan Cat after 2 seconds
      change = false;
    }, 3000);
  }
}

function getRandomWord() {
  let newWord;
  do {
    newWord = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
  } while (newWord === lastWord);
  lastWord = newWord;
  return newWord;
}

function typeWriter(word = null) {
  speed = 30;
  let element = document.getElementById("sub");
  if (word) {
    txt = word;
  } else if (i === 0) {
    txt = getRandomWord();
    element.innerHTML = "";
  }

  if (i < txt.length) {
    element.innerHTML = txt.substring(0, i + 1);
    i++;
    setTimeout(() => typeWriter(word), speed);
  } else if (!word) {
    element.classList.add("blinking");
    setTimeout(() => erase(txt.length), 2000);
  }
}

function erase(length) {
  let element = document.getElementById("sub");
  if (element && length >= 0) {
    element.innerHTML = txt.substring(0, length);
    setTimeout(() => erase(length - 1), speed);
  } else {
    i = 0;
    element.classList.remove("blinking");
    typeWriter();
  }
}
let bg;
let timesclicked = 0;
function funAlert() {
  bg = isday ? BACKGROUND_COLORS[random] : DARK_BACKGROUND_COLORS[random];
  txt = isday ? TEXT_COLORS[random] : DARK_TEXT_COLORS[random];

  switch (timesclicked) {
    case 0:
    case 1:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">Ya estas aqui🥳</span>`,
        html: `<span style="color:${txt};">¿por qué no te quedas un rato más? 😉</span>`,
        imageUrl:
          "https://i.pinimg.com/736x/c0/d5/20/c0d520ed05bda0f7e240396971883d3a.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;
      break;
    case 2:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">Basta!</span>`,
        html: `<span style="color:${txt};">Por favor deja de clickearme!</span>`,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_PD0eZKY4Ej1Ml4p8XlunAm5RJ70sSusAg&s",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;
      break;
    case 3:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">Te he dicho que pares!</span>`,
        html: `<span style="color:${txt};">Por favor... no continues...</span>`,
        imageUrl:
          "https://i.pinimg.com/736x/fd/09/56/fd0956f065393ea59e793f8b8e6a98c9.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;
      break;
    case 4:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">Si continuas te arrepentiras...</span>`,
        html: `<span style="color:${txt};"><i>*Bueno, a lo mejor seria buena hora para parar...*</i></span>`,
        imageUrl:
          "https://media.tenor.com/vfbLpBX61ggAAAAM/angry-angry-cat.gif",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });

      timesclicked++;
      break;
    case 5:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">Advertencia</span>`,
        html: `<span style="color:${txt};">Si no paras sufriras las consecuencias!</span>`,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgu1dCTSPDZzhyp-r3qyZUecptD9KkpTaug&s",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;

      break;
    case 6:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">3</span>`,
        html: `<span style="color:${txt};">...</span>`,
        imageUrl:
          "https://preview.redd.it/hello-actually-looking-for-the-source-of-this-meme-abt-a-v0-oeby2q5ugh7c1.jpeg?auto=webp&s=cdcd7d0d3c745e0c41f1fe85eda4551890072756", // Asegúrate de usar una URL válida para la imagen
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;
      break;
    case 7:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">2</span>`,
        html: `<span style="color:${txt};">...</span>`,
        imageUrl:
          "https://i.scdn.co/image/ab67616d00001e0227047720beaa8d2b4c236380",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;
      break;
    case 8:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">1</span>`,
        html: `<span style="color:${txt};">Tu ultima oportunidad...</span>`,
        imageUrl: "https://media.tenor.com/olr0tUuWI7gAAAAj/cuh-cat.gif",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      });
      timesclicked++;
      break;
    case 9:
      Swal.fire({
        background: bg,
        title: `<span style="color:${txt};">HA!</span>`,
        html: `<span style="color:${txt};">¡Tú te lo has buscado!</span>`,
        imageUrl:
          "https://i.pinimg.com/originals/ea/5f/c9/ea5fc9680cec81756dcd5f12d63dc3f5.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Easter Egg",
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Ok",
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          // Abre el rickroll y luego intenta cerrar la ventana
          window.open("https://www.youtube.com./watch?v=dQw4w9WgXcQ", "_blank");
          window.close();
        } else {
          window.open("https://www.youtube.com./watch?v=dQw4w9WgXcQ", "_blank");
          window.close();
        }
      });
      break;
  }
}
function redirect(url) {
  bg = isday ? BACKGROUND_COLORS[random] : DARK_BACKGROUND_COLORS[random];
  txt = isday ? TEXT_COLORS[random] : DARK_TEXT_COLORS[random];
  Swal.fire({
    title: "¡Redirigiendo!",
    background: bg,
    html: `<span style="color:${txt};">Serás redirigido a ${url} !</span>`,
    icon: "info",
    confirmButtonText: "Ok",
    showCancelButton: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(url, "_blank");
    }
  });
}
const toggleButton = document.getElementById("toggleButton");
const groups = document.querySelector(".groups");
const svgContainer = document.getElementById("svgContainer");
let isFirstSVG = true;
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    if (isFirstSVG) {
      svgContainer.style.rotate = "180deg";
    } else {
      svgContainer.style.rotate = "0deg";
    }
    isFirstSVG = !isFirstSVG;
    groups.classList.toggle("show");
  });
}
//sorry for using this messy ahh code
