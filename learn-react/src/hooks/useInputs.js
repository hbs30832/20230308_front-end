import { useState } from "react";

// src/hooks/useInputs
export function useInputs(inintialForm) {
  const [inputs, setInputs] = useState(inintialForm);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const reset = () => {
    setInputs(inintialForm);
  };

  return [inputs, handleInputs, reset];
}

/* 
    커스텀 훅
        - 리액트 훅은 함수형 컴포넌트 혹은 커스텀 훅에서만 사용할 수 있다.
        - 커스텀 훅이란 여러 리액트 훅을 조합해서 훅을 만들 수 있다.
        - 커스텀 훅의 함수이름은 "use"로 시작해야한다.
*/
