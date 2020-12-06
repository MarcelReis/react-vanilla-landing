const carouselRadios = document.querySelectorAll(".carousel__radio");
const container = document.querySelector(".carousel__container");

carouselRadios.forEach((radio, index) =>
  radio.addEventListener(
    "change",
    () => (container.style.transform = `translateX(-${index * 100}%)`)
  )
);
