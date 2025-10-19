const popup = document.getElementById("ventana");
const btnAbrir = document.getElementById("abrir");
const btnCerrar = document.getElementById("cerrar");

// Abrir el popup
btnAbrir.addEventListener("click", () => {
  popup.showModal();
});

// Cerrar con animación
btnCerrar.addEventListener("click", () => {
  popup.classList.add("closing");
  popup.addEventListener("animationend", () => {
    popup.classList.remove("closing");
    popup.close();
  }, { once: true });
});