import React, { useContext, useEffect } from "react";
import { HandleCountContext } from "./GrandParent";

function Child() {
  const handleCount = useContext(HandleCountContext);

  useEffect(() => {
    console.log("Child Component render!");
  });

  return (
    <div
      style={{
        border: "3px solid yellow",
      }}
    >
      <h3>Child</h3>
      <button onClick={handleCount}>+1</button>
    </div>
  );
}

export default React.memo(Child);
