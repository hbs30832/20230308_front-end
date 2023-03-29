import React, { useEffect, useRef } from "react";

// src/components/TodoInput.jsx
function TodoInput({ createTodo, onChange }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // form의 기본 기능 실행 x.
    createTodo();
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} ref={inputRef} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoInput);
