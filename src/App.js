import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  // const [input, setInput] = useState(0);

  return (
    <div>
      {/* <input
        value={input}
        type="number"
        onChange={(e) => setInput(e.target.value)}
      /> */}
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
