import { useState } from "react";

// src/components/TodoList.jsx
const initialState = [
  { id: 1, text: "React 프로젝트 생성하기", done: true },
  { id: 2, text: "컴포넌트 만들기", done: true },
  { id: 3, text: "상태 관리하기", done: false },
];

let nextId = 4;

export default function TodoList() {
  const [todos, setTodos] = useState(initialState);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId++, text: input, done: false }]);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRemove = (id) => {
    // filter를 통한 삭제 기능 구현
    //  => filter는 새로운 배열을 반환한다. 업데이트에 써도 된다.
    //  => "정말 삭제하시겠습니까?" => 확인 누르면 삭제
    if (window.confirm("정말 삭제하시겠습니까?"))
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  const itemList = todos.map((todo) => (
    <li key={todo.id} style={{ textDecoration: todo.done && "line-through" }}>
      {todo.text}
      <button onClick={() => handleRemove(todo.id)}>삭제</button>
    </li>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button>등록</button>
      </form>
      <ul>{itemList}</ul>
    </div>
  );
}
