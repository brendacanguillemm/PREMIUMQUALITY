import { autos } from "./AutosUsados.js";

let autosFiltrados = [...autos];

const cardsContainer = document.querySelector(".cards");
const precioRange = document.getElementById("precioRange");
const minPrecio = document.getElementById("minPrecio");
const maxPrecio = document.getElementById("maxPrecio");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnReiniciar = document.getElementById("btnReiniciar");

// Mostrar autos en pantalla
function mostrarAutos(lista) {
  cardsContainer.innerHTML = lista.map(auto => `
    <div class="card">
      <img src="${auto.imagenes[0]}" alt="${auto.titulo}">
      <h4>${auto.titulo}</h4>
      <p>${auto.info[2]} • ${auto.info[3]}</p>
      <span class="price">${auto.precio}</span>
      <button class="abrir">Ver detalles</button>
    </div>
  `).join("");
}

mostrarAutos(autosFiltrados);

// Actualiza precio en tiempo real
precioRange.oninput = () => {
  maxPrecio.textContent = `$${Number(precioRange.value).toLocaleString("es-AR")}`;
};

// FILTRAR 🔍
function aplicarFiltros() {
  const max = Number(precioRange.value);

  const tiposSeleccionados = [...document.querySelectorAll(".tipoFiltro:checked")]
    .map(el => el.value);

  const marcasSeleccionadas = [...document.querySelectorAll(".marcaFiltro:checked")]
    .map(el => el.value);

  autosFiltrados = autos.filter(auto => {
    const precioNum = Number(auto.precio.replace(/\D/g, ""));

    return (
      precioNum <= max &&
      (tiposSeleccionados.length === 0 || tiposSeleccionados.includes(auto.tipo)) &&
      (marcasSeleccionadas.length === 0 || marcasSeleccionadas.includes(auto.marca))
    );
  });

  mostrarAutos(autosFiltrados);
}

// REINICIAR 🔄
function reiniciarFiltros() {
  document.querySelectorAll("input[type=checkbox]").forEach(el => el.checked = false);
  precioRange.value = precioRange.max;
  maxPrecio.textContent = `$${Number(precioRange.max).toLocaleString("es-AR")}`;

  autosFiltrados = [...autos];
  mostrarAutos(autosFiltrados);
}

// EVENTOS
btnFiltrar.addEventListener("click", aplicarFiltros);
btnReiniciar.addEventListener("click", reiniciarFiltros);