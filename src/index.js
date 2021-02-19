import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

// SCSS
import "./style.scss";

const Main = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDom.render(<Main />, document.getElementById("root"));
