import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTodoDispatch } from "../state/todos";
import Button from "./Button";
// src/components/TodoInput.jsx
function TodoInput() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(false);

  const dispatch = useTodoDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // form의 기본 기능 실행 x.
    if (edit) {
      dispatch({ type: "CREATE_TODO", text: text });
      inputRef.current.focus();
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {edit && (
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
            autoFocus
          />
        )}

        <Button width="100%">{edit ? "등록" : "추가"}</Button>
      </form>
    </Container>
  );
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
`;

const Container = styled.div`
  padding: 10px;
  border-top: 1px solid black;
  form {
    input {
      width: 100%;
      margin-bottom: 4px;
      outline: none;
      padding: 5px;
      animation: ${slideUp} 0.4s;
    }
  }
`;

export default React.memo(TodoInput);
