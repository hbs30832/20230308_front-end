import { useCallback, useMemo, useReducer, useState } from "react";
import Counter from "./components/Counter";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function getUndoneCount(todos) {
  console.log("해야할 일 세는 중...");
  return todos.filter((todo) => !todo.done).length;
}

let nextId = 4;

// 상태를 업데이트하는 함수.
function reducer(state, action) {}

export default function App() {
  // const [todos, dispatch] = useReducer();
  return (
    <div>
      <Counter />
    </div>
  );
}
