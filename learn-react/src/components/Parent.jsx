import Child from "./Child";

function Parent({ count, handleCount }) {
  return (
    <div
      style={{
        border: "3px solid blue",
      }}
    >
      <h2>Paren</h2>
      <p>count : {count}</p>
      <Child count={count} handleCount={handleCount} />
    </div>
  );
}

export default Parent;
