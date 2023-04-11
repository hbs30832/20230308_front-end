import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/counter";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(({ counter }) => counter); // 스토어의 여러 상태값들 중 선택.

  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase(3))}>+1</button>
      <button onClick={() => dispatch(decrease(10))}>-1</button>
    </div>
  );
}

export default Counter;
