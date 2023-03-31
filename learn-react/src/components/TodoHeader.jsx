import React, { useEffect } from "react";
import styled from "styled-components";

function TodoHeader({ undoneCount }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  useEffect(() => {
    console.log("Todo Header 렌더링!");
  });

  return (
    <Conatiner>
      <h2>{dateStr}</h2>
      <p>해야할 일 : {undoneCount}</p>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;

export default React.memo(TodoHeader);
