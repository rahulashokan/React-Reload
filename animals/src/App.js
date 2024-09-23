import AnimalShow from "./AnimalShow";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`User click count is : ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of the count is {count}</div>
    </div>
  );
}

export default App;
