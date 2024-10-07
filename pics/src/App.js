import { useState } from "react";
import searchImages from "./API";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [image, setImage] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImage(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList image={image} />
    </div>
  );
}

export default App;
