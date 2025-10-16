let currentSlide = 0;

function openModal() {
  const modal = document.getElementById("vehicleModal");
  modal.style.display = "flex";
  currentSlide = 0;
  showSlide(currentSlide);
}

function closeModal() {
  const modal = document.getElementById("vehicleModal");
  modal.style.display = "none";
}

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel img");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll(".carousel img");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

window.onclick = function(event) {
  const modal = document.getElementById("vehicleModal");
  if (event.target === modal) {
    closeModal();
  }
};