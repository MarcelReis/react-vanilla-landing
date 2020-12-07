import React from "react";
import { render } from "react-dom";

import "normalize.css";
import "../common/styles/index.scss";

import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Description from "./components/Description/Description";
import Footer from "./components/Footer.tsx/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Slider />
      <Description />
      <Accordion />
      <Contact />
      <Footer />
    </>
  );
};

render(<App />, document.getElementById("root"));
