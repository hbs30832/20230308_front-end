import { useRef, useState } from "react";

// src/components/TodoInput.jsx
export default function TodoInput({ createTodo }) {
  // text 상태 관리하기
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // form의 기본 기능 실행 x.
    createTodo(text);
    inputRef.current.focus();
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} ref={inputRef} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}
