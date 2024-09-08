// React and react DOM lib

import React from "react";
import ReactDOM from "react-dom/client";
import App, { akash } from "./App";
//get a reference to the DIV with ID Root
const el = document.getElementById("root");

//tell react to take control of that element

const root = ReactDOM.createRoot(el);
console.log(akash);
// show the component on the screen

root.render(<App />);
