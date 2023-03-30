import React, { useContext, useEffect } from "react";
import { CountContext, HandleCountContext } from "./GrandParent";

function Child() {
  const count = useContext(CountContext);
  const handleCount = useContext(HandleCountContext);

  useEffect(() => {
    console.log("render!");
  });
  return (
    <div
      style={{
        border: "3px solid yellow",
      }}
    >
      <h3>Child</h3>
      <p>count : {count}</p>
      <button onClick={handleCount}>+1</button>
    </div>
  );
}

export default Child;
