import { useContext } from "react";
import { CountContext } from "./GrandParent";

function Child() {
  const { count, handleCount } = useContext(CountContext);
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
