import React from "react";
import { Counter1 } from "../interfaces/interface";

const Counter = ({ setCount }: Counter1) => {
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 3);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
