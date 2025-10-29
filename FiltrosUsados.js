// --- FILTROS USADOS ---

// Referencias
const btnFiltrar = document.getElementById("btnFiltrar");
const btnReiniciar = document.getElementById("btnReiniciar");
const precioRange = document.getElementById("precioRange");
const minPrecio = document.getElementById("minPrecio");
const maxPrecio = document.getElementById("maxPrecio");
const catalogo = document.querySelector(".cards");
const contadorVehiculos = document.querySelector(".vehicle-count");

// Actualiza visualmente el rango de precio
precioRange.addEventListener("input", () => {
  maxPrecio.textContent = `$${parseInt(precioRange.value).toLocaleString("es-AR")}`;
});

// Renderiza autos en la sección de catálogo
function mostrarAutos(lista) {
  catalogo.innerHTML = "";

  if (lista.length === 0) {
    catalogo.innerHTML = `<p style="grid-column: 1 / -1; text-align:center;">No se encontraron vehículos con esos filtros.</p>`;
  }

  lista.forEach(auto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${auto.imagenes[0]}" alt="${auto.titulo}">
      <h4>${auto.titulo}</h4>
      <p>${auto.info[2]} • ${auto.info[3]}</p>
      <span class="price">${auto.precio}</span>
      <button class="abrir">Ver detalles</button>
    `;
    catalogo.appendChild(card);
  });

  contadorVehiculos.textContent = `${lista.length} Vehículos`;

  // Reconecta los botones a la ventana modal
  vincularBotones(".abrir", lista);
}

// Función para aplicar los filtros
function aplicarFiltros() {
  const tiposSeleccionados = Array.from(document.querySelectorAll(".tipoFiltro:checked")).map(el => el.value);
  const marcasSeleccionadas = Array.from(document.querySelectorAll(".marcaFiltro:checked")).map(el => el.value);
  const precioMax = parseInt(precioRange.value);

  const autosFiltrados = autos.filter(auto => {
    const precioAuto = parseInt(auto.precio.replace(/\D/g, ""));
    const coincideTipo = tiposSeleccionados.length ? tiposSeleccionados.includes(auto.tipo) : true;
    const coincideMarca = marcasSeleccionadas.length ? marcasSeleccionadas.includes(auto.marca) : true;
    const coincidePrecio = precioAuto <= precioMax;
    return coincideTipo && coincideMarca && coincidePrecio;
  });

  mostrarAutos(autosFiltrados);
}

// Reinicia filtros
btnReiniciar.addEventListener("click", e => {
  e.preventDefault();
  document.querySelectorAll(".tipoFiltro, .marcaFiltro").forEach(el => el.checked = false);
  precioRange.value = 60000000;
  maxPrecio.textContent = "$60.000.000";
  mostrarAutos(autos);
});

// Aplica filtros cuando se hace clic
btnFiltrar.addEventListener("click", aplicarFiltros);

// Carga inicial
mostrarAutos(autos);
