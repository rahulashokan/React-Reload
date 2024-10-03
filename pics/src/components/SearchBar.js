import { useState } from "react";
function SearchBar() {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={}>
        <input value={term} onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default SearchBar;
