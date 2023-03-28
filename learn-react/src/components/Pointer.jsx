import { useState } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(position);

  const handlePosition = (e) => {
    // console.log(position);
    setPosition({ ...position, x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        width: 500,
        height: 300,
        border: "3px solid black",
        borderRadius: 15,
        position: "relative",
      }}
      onPointerMove={handlePosition}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          backgroundColor: "red",
          position: "absolute",
          top: position.y,
          left: position.x,
        }}
      ></div>
    </div>
  );
}

/* 
    객체 형태로 상태 관리하기
        - React는 상태값을 이전과 비교해서 변화가 있을 때만 렌더링이 다시 일어난다.
            => 문자열, 숫자, 불리언과 같은 원시값은 그냥 업데이트하면 된다.
        - 객체를 업데이트할 때 객체를 직접 변경해서 업데이트하면 React가 변화를 감지하지 못한다.
            => 객체를 업데이트할 때는 참조 복사가 아니라 값 복사가 일어나게 해야한다.
        - 객체를 직접 변경하는 식으로 사용하면 안된다.
            => React 값에 대한 확신을 가질 수 있어야한다.
            => 불변성을 지켜야한다.
            => Immer라는 라이브러리를 사용하면 불변성을 안지키는 코드로 작성할 수 있다.
*/
