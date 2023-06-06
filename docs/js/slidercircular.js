document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const prevArrow = document.querySelector(".slider-arrow.prev");
  const nextArrow = document.querySelector(".slider-arrow.next");
  let currentPosition = 0;

  prevArrow.addEventListener("click", function () {
    currentPosition -= 1;
    if (currentPosition < 0) {
      currentPosition = 5;
    }
    updateSliderPosition();
  });

  nextArrow.addEventListener("click", function () {
    currentPosition += 1;
    if (currentPosition > 5) {
      currentPosition = 0;
    }
    updateSliderPosition();
  });

  function updateSliderPosition() {
    const itemWidth = sliderContainer.offsetWidth / 6; // Cambia el número 6 si tienes un número diferente de imágenes
    const newPosition = -currentPosition * itemWidth;
    sliderContainer.style.transform = `translateX(${newPosition}px)`;
  }
});
