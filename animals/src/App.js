import AnimalShow from "./AnimalShow";

const handleClick = () => {
  console.log("User have clicked the button");
};

function App() {
  return <button onClick={handleClick}>Add Animal</button>;
}

export default App;
