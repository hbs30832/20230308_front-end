// src/components/TodoList.jsx
const todos = [
  { id: 1, text: "React 프로젝트 생성하기", done: true },
  { id: 2, text: "컴포넌트 만들기", done: true },
  { id: 3, text: "상태 관리하기", done: false },
];

export default function TodoList() {
  return (
    <div>
      <input type="text" />
      <button>등록</button>
      <ul>
        <li>React 프로젝트 생성하기</li>
        <li>컴포넌트 만들기</li>
        <li>상태 관리하기</li>
      </ul>
    </div>
  );
}
