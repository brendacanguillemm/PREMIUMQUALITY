const popup = document.getElementById("ventana");
const botonesAbrir = document.querySelectorAll(".abrir");
const botonCerrar = document.getElementById("cerrar");

// Abrir el popup
botonesAbrir.forEach(boton => {
  boton.addEventListener('click', () => {
    popup.showModal();
});
});

// Cerrar con animación
botonCerrar.addEventListener('click', () => {
  popup.close();
});