let activeImageIndex = 0;

const nextButton = document.querySelector(".slider__arrowNext");
const backButton = document.querySelector(".slider__arrowBack");

const container = document.querySelector(".slider__container");

let isMobile = window.innerWidth < 600;
window.addEventListener("resize", () => {
  isMobile = window.innerWidth < 600;
});

nextButton.addEventListener("click", () => {
  if (isMobile) {
    activeImageIndex = activeImageIndex === 8 ? 8 : activeImageIndex + 1;
  } else {
    activeImageIndex = activeImageIndex === 2 ? 2 : activeImageIndex + 1;
  }

  updateImage(activeImageIndex);
});

backButton.addEventListener("click", () => {
  activeImageIndex = activeImageIndex === 0 ? 0 : activeImageIndex - 1;

  updateImage(activeImageIndex);
});

const gridGap = 15;
function updateImage(index) {
  if (isMobile) {
    container.style.transform = `translateX(-${index * 100}%)`;
    return;
  }

  container.style.transform = `translateX(calc(-${index * 100}% - ${
    index * gridGap
  }px))`;
}
