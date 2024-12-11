import React, { useState } from "react";
import "./CounterApp.css";
const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="disp">
      <h1 className="header">{count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        className="btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;
