import { useCallback, useMemo, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function getUndoneCount(todos) {
  console.log("해야할 일 세는 중...");
  return todos.filter((todo) => !todo.done).length;
}

let nextId = 4;
export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // useMemo(연산할 함수, 의존성 배열) : 의존하고 있는 값이 변했을 때에만 연산.
  const undoneCount = useMemo(() => getUndoneCount(todos), [todos]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  // useCallback(함수, 의존성 배열) : 의존하고 있는 값이 변했을 때에만 함수를 재생성.
  const createTodo = useCallback(() => {
    setTodos(todos.concat({ id: nextId++, text: text, done: false }));
  }, [todos, text]);

  const toggleTodo = useCallback(
    (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div>
      <TodoHeader undoneCount={undoneCount} />
      <TodoInput onChange={onChange} createTodo={createTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
