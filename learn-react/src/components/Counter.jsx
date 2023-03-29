import { useReducer } from "react";
import { countReducer } from "../state/count";

function Counter() {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    amount: 1,
  });

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "CHANGE_AMOUNT", amount: parseInt(e.target.value) })
        }
      />
    </div>
  );
}

export default Counter;

/* 
    useReducer
        - 리듀서 함수를 통해서 상태 업데이트를 한다.
            1) 상태를 업데이트하는 로직이 복잡할 때.
            2) 여러 상태를 한번에 관리할 때.
            3) 외부에 상태 업데이트 로직을 작성 할 때.
        - 리듀서 함수의 return 값이 곧 다음 상태가 된다.
            => 첫번째 매개변수에 현재 상태값이 전달된다.
            => 두번째 매개변수에 업데이트에 필요한 값들을 담은 액션 객체가 전달된다.
        - 디스패치 함수는 상태 업데이트를 요청하는 함수이다.
            => 디스패치에 액션 객체를 담아서 호출하면 리듀서 함수에 전달된다.
        - 보통 switch문과 함께 사용한다.
            
*/
