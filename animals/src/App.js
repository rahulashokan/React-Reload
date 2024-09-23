import AnimalShow from "./AnimalShow";
import "./App.css";
import { useState } from "react";

function getRandomAnimals() {
  const animals = ["bird", "dog", "cat", "horse", "gator", "cow"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  //   console.log(useState(5));
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderdAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderdAnimals}</div>
    </div>
  );
}

export default App;
