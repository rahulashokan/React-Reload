// React and react DOM lib

import React from "react";
import ReactDOM from "react-dom/client";

//get a reference to the DIV with ID Root
const el = document.getElementById("root");

//tell react to take control of that element

const root = ReactDOM.createRoot(el);
// we will create a component

const App = function () {
  let inputType = "number";
  let minValue = 5;

  return <textarea autoFocus spellCheck />;
};

// show the component on the screen

root.render(<App />);
