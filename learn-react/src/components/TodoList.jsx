import { useRef, useState } from "react";

// src/components/TodoList.jsx
const initialState = [
  { id: 1, text: "React 프로젝트 생성하기", done: true },
  { id: 2, text: "컴포넌트 만들기", done: true },
  { id: 3, text: "상태 관리하기", done: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialState);

  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: nextId.current++, text: input, done: false }]);
    setInput("");
    inputRef.current.focus();
  };

  const nextId = useRef(4); // 렌더링과 별개로 React가 값을 기억해준다.

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleRemove = (id) => {
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
          e.stopPropagation();
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
        <input
          type="text"
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />
        <button>등록</button>
      </form>
      <ul>{itemList}</ul>
    </div>
  );
}

/* 
  useRef()
    - 렌더링과 별개로 기억해야될 값을 저장해야할 수 있다.
      => 일반적인 지역 변수는 함수가 끝나면 사라지기 때문에 다음 렌더링에서 기억할 수 없다.
      => current 프로퍼티에 값이 저장된다. 이 값을 React가 기억해준다.
    - 특정 요소를 선택할 수 있다.
      => jsx의 ref 속성에 useRef로 만든 객체를 전달하면 된다.
      => current 프로퍼티를 통해서 요소에 접근할 수 있다.
*/
