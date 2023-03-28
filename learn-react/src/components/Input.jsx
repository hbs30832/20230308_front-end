import { useState } from "react";

// src/components/Input.jsx
export default function Input() {
  const [inputs, setInputs] = useState({
    name: "이름",
    email: "이메일",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target; // 비구조화 할당

    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div>
      <h2>
        {inputs.name} ({inputs.email})
      </h2>
      <input type="text" onChange={handleInputs} name="name" />
      <input type="email" onChange={handleInputs} name="email" />
    </div>
  );
}

/* 
    input의 상태 관리
        - input의 입력값을 e.target.value로 읽을 수 있다.
        - 여러개의 input 값을 관리할 때는 객체 형태로 관리할 수 있다.
            => input의 name 속성은 e.target.name으로 읽을 수 있다.
            => 객체["속성"]을 통해 특정 속성을 동적으로 참조 및 할당 수 있다.
            => 업데이트 할 때는 다른 input 값들도 스프레드 문법을 통해서 복사한 후에 특정 속성만 업데이트할 수 있다.
*/
