import React from "react";
import { render } from "react-dom";

import "normalize.css";
import "../common/styles/index.scss";

const App = () => {
  return <div>Hello world</div>;
};

render(<App />, document.getElementById("root"));
