import React, { useState } from "react";

const images = [
  { src: "https://placekitten.com/321/210", alt: "" },
  { src: "https://placekitten.com/321/210", alt: "" },
  { src: "https://placekitten.com/321/210", alt: "" },
];

const Carousel = () => {
  const [activeItem, setactiveItem] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carousel__container"
        style={{ transform: `translateX(-${activeItem * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel__imageContainer">
            <img className="carousel__image" src={image.src} alt="" />
          </div>
        ))}
      </div>

      <div className="carousel__slider">
        {images.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="carousel"
            className="carousel__radio"
            checked={index === activeItem}
            onChange={() => setactiveItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
