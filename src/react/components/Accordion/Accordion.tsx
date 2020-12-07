import React, { useState } from "react";

const items = [...new Array(4)];

const Accordion = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const openItem = (index: number) =>
    setActiveItem(index === activeItem ? null : index);

  return (
    <section className="section section--gray-0">
      <div className="accordion__container">
        <ul className="accordion">
          {items.map((_, index) => (
            <li
              key={index}
              onClick={() => openItem(index)}
              className={`accordion__item ${
                activeItem === index ? "accordion__item--active" : ""
              }`}
            >
              <h3 className="accordion__title">Lorem ipsum</h3>
              <i className="accordion__arrow">
                <svg className="icon icon--small">
                  <use xlinkHref="#svg__arrowDown" />
                </svg>
              </i>

              <div className="accodion__contentContainer">
                <div className="accordion__content">
                  <img
                    className="accordion__image"
                    src="https://placekitten.com/300/200"
                    alt=""
                  />
                  <p className="accordion__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae aspernatur sequi ipsa est quaerat. Ex illum
                    numquam nobis sequi animi nam atque assumenda aperiam, est
                    dolorum minima quis iste modi?
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
