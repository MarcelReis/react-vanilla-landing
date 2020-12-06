const carouselRadios = document.querySelectorAll(".carousel__radio");
const carouselContainer = document.querySelector(".carousel__container");

carouselRadios.forEach((radio, index) =>
  radio.addEventListener(
    "change",
    () => (carouselContainer.style.transform = `translateX(-${index * 100}%)`)
  )
);
