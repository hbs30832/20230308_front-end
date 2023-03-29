export default function TodoList({ todos }) {
  console.log(todos);
  // 넘어온 todos 렌더링하기

  const itemList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
}

// 비구조화 할당 중첩 사용.
function TodoItem({ todo: { text, done, id } }) {
  return (
    <li
      style={{
        textDecoration: done && "line-through",
      }}
    >
      {text}
      <button>삭제</button>
    </li>
  );
}
