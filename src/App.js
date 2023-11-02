import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1 className="demo">Demo one</h1>
      <h4>{number}</h4>
      <button onClick={() => setNumber(number + 1)}>ADD</button>
    </div>
  );
}

export default App;
