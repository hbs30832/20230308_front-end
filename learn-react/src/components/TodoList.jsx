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

  const handleToggle = (id) => {
    console.log("실행");
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const itemList = todos.map((todo) => (
    <li
      key={todo.id}
      onClick={() => handleToggle(todo.id)}
      style={{ textDecoration: todo.done && "line-through" }}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 전파를 막는다.
          handleRemove(todo.id);
        }}
      >
        삭제
      </button>
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

/* 
  배열 상태 관리
    - 배열도 객체기 때문에 새로운 배열을 만들어서 업데이트해주어야 한다.
    - 삭제는 filter(), 수정 map(), 추가 스프레드, concat() 등이 있다.
*/
