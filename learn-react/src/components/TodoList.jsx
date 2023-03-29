import React, { useEffect } from "react";

function TodoList({ todos, removeTodo, toggleTodo }) {
  // 넘어온 todos 렌더링하기

  useEffect(() => {
    console.log("렌더링!");
  });

  const itemList = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  ));

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
}

// 비구조화 할당 중첩 사용.
function TodoItem({ todo: { text, done, id }, toggleTodo, removeTodo }) {
  return (
    <li
      style={{
        textDecoration: done && "line-through",
      }}
      onClick={() => toggleTodo(id)}
    >
      {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

// React.memo() : 부모 컴포너트에서 받는 prop에 변화가 있을 때만 재렌더링된다.
export default React.memo(TodoList);
