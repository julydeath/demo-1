import { useState } from "react";
import { nanoid } from "nanoid";

const Todo = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setNames([...names, { name: name, id: nanoid() }]);
    setName("");
  };

  const handleDelete = (x) => {
    setNames(names.filter((name) => name.id !== x));
  };

  console.log("name", name);
  console.log("names", names);

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          value={name}
          placeholder="Enter a name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button>ADD</button>
      </form>
      <ol>
        {names.map((x) => (
          <div key={x.id}>
            <li>{x.name}</li>
            <button onClick={() => handleDelete(x.id)}>Del</button>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
