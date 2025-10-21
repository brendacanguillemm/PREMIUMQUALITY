let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}