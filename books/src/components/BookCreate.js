import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>Title</lable>
        <input value={title} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
