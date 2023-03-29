import { useState } from "react";

// src/components/TodoInput.jsx
export default function TodoInput() {
  // text 상태 관리하기
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  console.log(text);
  return (
    <div>
      <form>
        <input type="text" onChange={handleText} />
        <button>등록</button>
      </form>
    </div>
  );
}
