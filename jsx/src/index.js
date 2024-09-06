// React and react DOM lib

import React from "react";
import ReactDOM from "react-dom/client";

//get a reference to the DIV with ID Root
const el = document.getElementById("root");

//tell react to take control of that element

const root = ReactDOM.createRoot(el);
// we will create a component

const App = function () {
  let name = "Rahul";
  let age = 27;
  return (
    <div>
      <h1> {new Date().toLocaleTimeString()}</h1>
      <h2>
        Hi i am {name} and i am {age} years old
      </h2>
    </div>
  );
};

// show the component on the screen

root.render(<App />);
