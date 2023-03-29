import { useState } from "react";
import Effect from "./components/Effect";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

let nextId = 4;
export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const createTodo = () => {
    setTodos(todos.concat({ id: nextId++, text: text, done: false }));
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoHeader todos={todos} />
      <TodoInput onChange={onChange} createTodo={createTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
