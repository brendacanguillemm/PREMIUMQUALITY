// Datos de cada vehículo (todo lo que cambia)
const autos = [
  {
    titulo: "Hyundai Tucson 2.0 A/T",
    precio: "$25.800.000",
    info: [
      "Motor naftero 2.0L",
      "Caja automática 6 velocidades",
      "Año 2017",
      "96.000 km"
    ],
    imagenes: [
      "../IMAGENESHTML/Hyundai.jpg",
      "../IMAGENESHTML/Hyundai2.jpg",
      "../IMAGENESHTML/Hyundai3.jpg"
    ]
  },
  {
    titulo: "Citroën Berlingo Furgón 1.6",
    precio: "$22.500.000",
    info: [
      "Motor diésel 1.6 HDI",
      "Caja manual 5 velocidades",
      "Año 2023",
      "20.000 km"
    ],
    imagenes: [
      "../IMAGENESHTML/CitroenBerlingo.jpg",
      "../IMAGENESHTML/CitroenBerlingo2.jpg",
      "../IMAGENESHTML/CitroenBerlingo3.jpg"
    ]
  },
  {
    titulo: "Renault Kangoo II 1.5 DCI",
    precio: "$23.500.000",
    info: [
      "Motor diésel 1.5L",
      "Caja manual 6 velocidades",
      "Año 2022",
      "73.000 km"
    ],
    imagenes: [
      "../IMAGENESHTML/RenaultKangooII.jpg",
      "../IMAGENESHTML/RenaultKangooII2.jpg",
      "../IMAGENESHTML/RenaultKangooII3.jpg"
    ]
  },
  {
    titulo: "TOYOTA HILUX SRV AT 4x4",
    precio: "$54.900.000",
    info: [
      "Motor diésel 2.8L",
      "Caja automática 6 velocidades",
      "Año 2024",
      "20.715 km"
    ],
    imagenes: [
      "../IMAGENESHTML/TOYOTA4X4Usados1.jpg",
      "../IMAGENESHTML/TOYOTA4X4Usados2.jpg",
      "../IMAGENESHTML/TOYOTA4X4Usados3.jpg",
      "../IMAGENESHTML/TOYOTA4X4Usados4.jpg",
      "../IMAGENESHTML/TOYOTA4X4Usados5.jpg"
    ]
  }
];

const botones = document.querySelectorAll(".abrir");
const dialog = document.getElementById("ventana");
const cerrar = document.getElementById("cerrar");

const titulo = document.getElementById("titulo-auto");
const precio = document.getElementById("precio-auto");
const info = document.getElementById("info-auto");
const slides = document.getElementById("slides");

let slideIndex = 0;

botones.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const auto = autos[i];
    titulo.textContent = auto.titulo;
    precio.textContent = auto.precio;

    // 🔹 Cargamos los datos con íconos
    info.innerHTML = `
      <div><img src="../IMAGENESHTML/Combustible.png" alt=""> ${auto.info[0]}</div>
      <div><img src="../IMAGENESHTML/Caja.png" alt=""> ${auto.info[1]}</div>
      <div><img src="../IMAGENESHTML/Calendario.png" alt=""> ${auto.info[2]}</div>
      <div><img src="../IMAGENESHTML/IconoKm.png" alt=""> ${auto.info[3]}</div>
    `;

    // 🔹 Cargamos las imágenes del carrusel
    slides.innerHTML = auto.imagenes
      .map((src, idx) => `<img src="${src}" class="slide" style="display:${idx === 0 ? "block" : "none"}">`)
      .join("");

    slideIndex = 0;
    dialog.showModal();
  });
});

cerrar.addEventListener("click", () => dialog.close());

// 🔹 Función para mover el carrusel
document.getElementById("prev").addEventListener("click", () => changeSlide(-1));
document.getElementById("next").addEventListener("click", () => changeSlide(1));

function changeSlide(n) {
  const imgs = slides.querySelectorAll(".slide");
  imgs[slideIndex].style.display = "none";
  slideIndex = (slideIndex + n + imgs.length) % imgs.length;
  imgs[slideIndex].style.display = "block";
}