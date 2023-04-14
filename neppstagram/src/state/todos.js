import { atom, selector } from "recoil";

const todosState = atom({
  key: "counterState",
  default: [
    { id: 1, text: "recoil 설치하기", done: true },
    { id: 2, text: "recoil 배우기", done: false },
    { id: 3, text: "recoil 응용하기", done: false },
  ],
});

export const undoneSelect = selector({
  key: "undoneCount",
  get: ({ get }) => {
    const todos = get(todosState);

    return todos.filter((todo) => !todo.done).length;
  },
});
