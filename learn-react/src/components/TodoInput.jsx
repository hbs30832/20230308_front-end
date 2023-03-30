import React, { useRef, useState } from "react";
import { useTodoDispatch } from "../state/todos";
// src/components/TodoInput.jsx
function TodoInput() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const dispatch = useTodoDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // form의 기본 기능 실행 x.
    dispatch({ type: "CREATE_TODO", text: text });
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoInput);
