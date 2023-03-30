import { useState } from "react";
import Parent from "./Parent";

function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((c) => c + 1);
  return (
    <div
      style={{
        border: "3px solid black",
      }}
    >
      <h1>Grand Parent</h1>
      <p>count : {count}</p>
      <button onClick={handleCount}>+1</button>
      <Parent count={count} handleCount={handleCount} />
    </div>
  );
}

export default GrandParent;
