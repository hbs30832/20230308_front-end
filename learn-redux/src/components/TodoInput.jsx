import { useState } from "react";
import { createTodo } from "../redux/todos";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => dispatch(createTodo(text))}>등록</button>
    </div>
  );
}

export default TodoInput;
