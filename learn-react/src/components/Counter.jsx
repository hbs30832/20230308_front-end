// src/components/Counter.jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  console.log("렌더링");

  const handleCount = (num) => {
    setCount(count + num);
  };

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div>
      <button onClick={handleHide}>{hide ? "show" : "hide"}</button>
      {hide || <h2>{count}</h2>}
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(-1)}>-1</button>
    </div>
  );
}
/* 
    상태(state) 관리
        - 컴포넌트 내에서 지역 변수를 사용할 때 두가지 문제가 있다.
            1) 지역 변수의 값을 변경해도 재렌더링이 일어나지 않는다.
            2) 렌더링이 다시 일어나면 함수를 다시 호출하는 것이기 때문에 기존의 변수값을 기억하지 않는다.
        - 컴포넌트에는 상태를 만들 수 있는데, 이 상태가 업데이트가 일어나면 렌더링이 다시 일어난다.
        - useState라는 리액트 훅을 통해서 컴포넌트의 상태를 만들 수 있다.
            => 배열에 두개의 값이 반환되는데, 첫번째는 상태값, 두번째는 상태 업데이트 함수가 반환된다.
            => 배열 비구조화 할당을 통해 간편하게 사용할 수 있다.
        - 같은 컴포넌트가 여러개가 렌더링 될 때, 각자 별개의 상태를 가진다.
        - 하나의 컴포넌트가 여러개의 상태를 가질 수 있다.
*/
