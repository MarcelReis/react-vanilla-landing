const accordion = document.querySelector(".accordion");
const accodionItems = document.querySelectorAll(".accordion__item");

let activeItem = undefined;

accodionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("accordion__item--active");

    if (activeItem !== item) {
      activeItem?.classList.toggle("accordion__item--active");
      activeItem = item;
      return;
    }

    activeItem = undefined;
  });
});
