import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Redux 기본 개념 배우기", done: true },
  { id: 2, text: "Redux toolkit 배우기", done: false },
  { id: 3, text: "Redux 응용하기", done: false },
];

// 액션 생성
export const createTodo = createAction("todos/create");
export const removeTodo = createAction("todos/remove");

const todosReducer = createReducer(initialState, (builder) => {
  // immer 라이브러리가 자동으로 적용되어 있다. => 상태를 직접 변경하던가 새로운 값을 return하던가 둘 중 하나
  builder
    .addCase(createTodo, (state, action) => {
      state.push({ id: nanoid(), text: action.payload, done: false });
    })
    .addCase(removeTodo, (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    });
});

export default todosReducer;
