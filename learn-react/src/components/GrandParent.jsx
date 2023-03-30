import { createContext, useState } from "react";
import Parent from "./Parent";

export const CountContext = createContext(0);

function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((c) => c + 1);
  return (
    <CountContext.Provider value={{ count, handleCount }}>
      <div
        style={{
          border: "3px solid black",
        }}
      >
        <h1>Grand Parent</h1>
        <p>count : {count}</p>
        <button onClick={handleCount}>+1</button>
        <Parent />
      </div>
    </CountContext.Provider>
  );
}

export default GrandParent;
