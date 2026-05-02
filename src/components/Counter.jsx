import { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <div>
        <h1 className="">{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={increment} className="btn-action">
          +
        </button>
        <button onClick={decrement} className="btn-action">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
