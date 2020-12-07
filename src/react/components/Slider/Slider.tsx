import React, { useEffect, useRef, useState } from "react";

const items = [...new Array(9)];
const gridGap = 20;

const Slider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [activeIndex, setactiveIndex] = useState(0);

  useEffect(() => {
    const calcMobile = () => setIsMobile(window.innerWidth < 600);

    window.addEventListener("resize", calcMobile);

    return () => window.removeEventListener("resize", calcMobile);
  }, []);

  const backSlider = () => {
    setactiveIndex(Math.max(activeIndex - (isMobile ? 1 : 3), 0));
  };

  const nextSlider = () => {
    setactiveIndex(Math.min(activeIndex + (isMobile ? 1 : 3), 8));
  };

  return (
    <section id="slider" className="section section--gray-2">
      <div className="slider__controlls">
        <button className="slider__arrowBack" onClick={backSlider}>
          <svg className="icon">
            <use xlinkHref="#svg__arrowLeft" />
          </svg>
        </button>

        <div className="slider">
          <div
            className="slider__container"
            style={{
              transform: isMobile
                ? `translateX(-${activeIndex * 100}%)`
                : `translateX(calc(-${Math.floor(activeIndex / 3) * 100}% - ${
                    Math.floor(activeIndex / 3) * gridGap
                  }px))`,
            }}
          >
            {items.map((_, index) => (
              <figure key={index} className="slider__figure">
                <img
                  src={`/assets/img/slider-${index + 1}.jpg`}
                  alt=""
                  className="slider__image"
                />
                <figcaption className="slider__caption">
                  <p className="slider__title">Lorem ipsum</p>
                  <p className="slider__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil excepturi quas quidem voluptatum rerum qui quod. Quis,
                    velit. Omnis qui officia optio veritatis unde ut rerum
                    tenetur delectus numquam facere.
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button className="slider__arrowNext" onClick={nextSlider}>
          <svg className="icon">
            <use xlinkHref="#svg__arrowRight" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;
