import { useCallback, useMemo, useReducer, useState } from "react";
import Counter from "./components/Counter";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { todosReducer } from "./state/todos";

function getUndoneCount(todos) {
  console.log("해야할 일 세는 중...");
  return todos.filter((todo) => !todo.done).length;
}

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <div>
      <TodoHeader />
      <TodoInput dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
