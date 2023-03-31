import React, { useEffect } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoState } from "../state/todos";
import Button from "./Button";

function TodoList() {
  // 넘어온 todos 렌더링하기

  const todos = useTodoState();

  useEffect(() => {
    console.log("렌더링!");
  });

  const itemList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div>
      <ul>{itemList}</ul>{" "}
    </div>
  );
}

// 비구조화 할당 중첩 사용.
function TodoItem({ todo: { text, done, id } }) {
  const dispatch = useTodoDispatch();

  return (
    <ItemBox done={done} onClick={() => dispatch({ type: "TOGGLE_TODO", id })}>
      <span>{text}</span>
      <Button
        color="#ff242f"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "REMOVE_TODO", id });
        }}
      >
        삭제
      </Button>
    </ItemBox>
  );
}

const ItemBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid black;

  span {
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }
`;

// React.memo() : 부모 컴포너트에서 받는 prop에 변화가 있을 때만 재렌더링된다.
export default React.memo(TodoList);
