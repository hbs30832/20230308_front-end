import produce from "immer";
import { useReducer, useState } from "react";

const obj = {
  name: "Seok",
  age: 31,
};
const copy = produce(obj, (draft) => {
  draft.age++;
  draft.name = "Hwangbo";
});

console.log(copy);

let nextId = 4;
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat({ id: nextId++, text: action.text, done: false });

    case "TOGGLE":
      return produce(state, (draft) => {
        let todo = draft.find((todo) => todo.id === action.id);

        todo.done = !todo.done;
      });
    case "REMOVE":
      return produce(state, (draft) => {
        // id값이 일치하는 todo의 인덱스 값 찾기
        const idx = draft.findIndex((todo) => todo.id === action.id);
        draft.splice(idx, 1); // 배열에서 해당 인덱스의 요소 한개 삭제
      });
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch({ type: "CREATE", text })}>등록</button>
      <ul>
        {todos.map((todo) => (
          <li>
            <span
              onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
              style={{
                textDecoration: todo.done && "line-through",
              }}
            >
              {todo.text}
            </span>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
