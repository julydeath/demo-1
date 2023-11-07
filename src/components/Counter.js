import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + Number(props.input))}>
        ADD
      </button>
    </div>
  );
};

export default Counter;
