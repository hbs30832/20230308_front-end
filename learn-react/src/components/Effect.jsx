import { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    // 매 렌더링마다 실행된다. 렌더링이 끝난 이후에 실행된다.
    console.log("렌더링");
  });

  /* 
    두번째 인자 : 의존성 배열. 콜백함수가 의존하고 있는 값들을 배열로 전달한다.
      => 의존성 배열에 있는 값이 변했을 때에 콜백가 실행된다.
      => 화면에 처음 나타날 때(마운트)도 실행된다. 
      => 업데이트 이후에 실행된다.

    콜백 함수를 return하면 업데이트 직전에 실행된다.
  */
  useEffect(() => {
    alert("count click! count : " + count);

    return () => {
      alert("count click! before count : " + count);
    };
  }, [count]);

  /* 
    두번째 인자로 빈 배열을 전달하면 마운트될 때만 실행된다.
      => API 요청, 라이브러리 설정, setTimeout 등을 통한 스케줄 등록.

    콜백함수를 return하면 언마운트(화면에서 사라짐)될 때 실행된다. 이를 클린업(뒷정리) 함수라고 한다.
      => 라이브러리 인스턴스 삭제, clearTimeout 등을 통한 스케줄 취소.
  */
  useEffect(() => {
    alert("App Component is mounted!");
    return () => {
      alert("App Component is unmouted!");
    };
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h2>{input}</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}
