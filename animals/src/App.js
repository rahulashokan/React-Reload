import AnimalShow from "./AnimalShow";
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

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
