import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
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
  // disappear => 상태값. 트랜지션 시간 이후에 삭제를..
  const [disappear, setDisappear] = useState(false);

  return (
    <ItemBox done={done} onClick={() => dispatch({ type: "TOGGLE_TODO", id })}>
      <ContentWrapper disappear={disappear}>
        <span>{text}</span>
        <Button
          color="#ff242f"
          onClick={(e) => {
            e.stopPropagation();
            setTimeout(() => {
              dispatch({ type: "REMOVE_TODO", id });
            }, 400);
            setDisappear(true);
          }}
        >
          삭제
        </Button>
      </ContentWrapper>
    </ItemBox>
  );
}

const ItemBox = styled.li`
  border-bottom: 1px solid black;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  span {
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }

  transition: 0.4s;
  ${({ disappear }) =>
    disappear &&
    css`
      transform: translate(100%);
    `}
`;

// React.memo() : 부모 컴포너트에서 받는 prop에 변화가 있을 때만 재렌더링된다.
export default React.memo(TodoList);
