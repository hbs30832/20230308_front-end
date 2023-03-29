export default function TodoList({ todos, removeTodo, toggleTodo }) {
  console.log(todos);
  // 넘어온 todos 렌더링하기

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
