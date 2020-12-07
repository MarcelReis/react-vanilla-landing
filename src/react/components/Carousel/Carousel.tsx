import React from "react";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__imageContainer">
          <img
            className="carousel__image"
            src="https://placekitten.com/321/210"
            alt=""
          />
        </div>
        <div className="carousel__imageContainer">
          <img
            className="carousel__image"
            src="https://placekitten.com/320/210"
            alt=""
          />
        </div>
        <div className="carousel__imageContainer">
          <img
            className="carousel__image"
            src="https://placekitten.com/319/210"
            alt=""
          />
        </div>
      </div>

      <div className="carousel__slider">
        <input
          type="radio"
          name="carousel"
          className="carousel__radio"
          checked
        />
        <input type="radio" name="carousel" className="carousel__radio" />
        <input type="radio" name="carousel" className="carousel__radio" />
      </div>
    </div>
  );
};

export default Carousel;
