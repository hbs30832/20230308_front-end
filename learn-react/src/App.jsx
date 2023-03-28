import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 10);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleCount}>+3</button>
    </div>
  );
}

/* 
  useState가 반환하는 set 함수에 컴포넌트의 상태값 넣어서 여러번 호출해도
  현재 컴포넌트의 상태값은 동일하기 때문에 효과가 없다.

  리액트는 이벤트 핸들러 내부의 코드가 모두 실행하고 마지막에 렌더링을 시킨다.
    => 성능, 상태 관리가 제대로 되기 위해서.
  
  하나의 이벤트 핸들러에서 set 함수를 여러번 부르면 그것이 큐에 추가된다.

  set 함수에 콜백함수를 전달하면 첫번째 인자로 실시간 상태값을 받는다.
    => 차례대로 상태 업데이트가 되고 마지막 상태 업데이트가 끝나면 렌더링이 일어난다.
*/
