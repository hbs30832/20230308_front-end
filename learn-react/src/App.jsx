import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const initialState = [
  { id: 1, text: "React 프로젝트 생성하기", done: true },
  { id: 2, text: "컴포넌트 만들기", done: true },
  { id: 3, text: "상태 관리하기", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}
