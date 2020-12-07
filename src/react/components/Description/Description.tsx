import React from "react";

const Description = () => {
  return (
    <section className="section section--gray-1">
      <div className="description">
        <div className="description__imageContainer">
          <img
            className="description__image"
            src="https://placekitten.com/200/200"
            alt=""
          />
        </div>

        <div>
          <h2 className="description__title">Lorem Ipsum</h2>

          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            accusantium qui neque ratione quae quia excepturi obcaecati
            inventore sunt porro reprehenderit natus molestias cupiditate magni
            adipisci quo voluptatibus eveniet pariatur
          </p>
          <p className="description__text description__text--bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eos ducimus ut quae reiciendis consectetur nulla, hic vitae tempore
            voluptas suscipit sapiente laborum in dicta fuga quis tempora.
            Asperiores, quidem.
          </p>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            exercitationem iure ea hic vitae deserunt similique, tempora rerum
            aspernatur molestiae nostrum enim dolores, quia optio ullam eveniet
            est totam cum!
          </p>
          <p className="description__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            vel animi ab error facilis vitae expedita soluta nesciunt beatae
            incidunt quam, odio iure eum ipsam, qui quisquam quae accusamus
            illo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
