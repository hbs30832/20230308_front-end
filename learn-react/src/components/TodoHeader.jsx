import React, { useEffect } from "react";

function TodoHeader({ undoneCount }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  useEffect(() => {
    console.log("Todo Header 렌더링!");
  });

  return (
    <div>
      <h2>{dateStr}</h2>
      <p>해야할 일 : {undoneCount}</p>
    </div>
  );
}

export default React.memo(TodoHeader);
