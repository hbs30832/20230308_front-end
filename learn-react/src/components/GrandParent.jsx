import { createContext, useCallback, useContext, useState } from "react";
import Parent from "./Parent";

export const CountContext = createContext("기본값");
export const HandleCountContext = createContext(null);

function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => setCount((c) => c + 1), []);

  const context = useContext(CountContext);

  return (
    <CountContext.Provider value={count}>
      <HandleCountContext.Provider value={handleCount}>
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
      </HandleCountContext.Provider>
    </CountContext.Provider>
  );
}

export default GrandParent;

/* 
    useCallback 등을 사용할 때 함수형 업데이트를 사용하면 의존성을 제거할 수 있다.
        => 불필요한 재렌더링을 방지할 수 있다.
*/
