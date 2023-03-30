import { createContext, useContext, useReducer } from "react";

// src/state/todos.js
let nextId = 4;
export function todosReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: nextId++, text: action.text, done: false });
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export default function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={todos}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
/* 
  커스텀 훅을 통해서 상태 관리 로직을 분리할 수 있다.
*/
