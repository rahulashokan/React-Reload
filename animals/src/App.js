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

  const renderdAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderdAnimals}</div>
    </div>
  );
}

export default App;
