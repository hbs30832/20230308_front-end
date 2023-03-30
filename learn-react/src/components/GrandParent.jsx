import { useState } from "react";
import Parent from "./Parent";

function GrandParent() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: "3px solid black",
      }}
    >
      <h1>Grand Parent</h1>
      <p>count : {count}</p>
      <button>+1</button>
      <Parent />
    </div>
  );
}

export default GrandParent;
