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
