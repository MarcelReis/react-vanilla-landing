import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Lorem Ipsum</h1>
      <p className="header__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscining elit
      </p>

      <a href="#slider" className="header__arrowDown">
        <svg className="icon">
          <use xlinkHref={"#svg__arrowDown"} />
        </svg>
      </a>
    </header>
  );
};

export default Header;
