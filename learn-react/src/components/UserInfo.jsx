import { useState } from "react";
import { useInputs } from "../hooks/useInputs";

// src/components/UserInfo.jsx
function UserInfo() {
  const [inputs, handleInputs, reset] = useInputs({
    name: "",
    email: "",
  });

  const { name, email } = inputs;

  return (
    <div>
      <h2>
        {name}({email})
      </h2>
      <input type="text" name="name" onChange={handleInputs} />
      <input type="text" name="email" onChange={handleInputs} />
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default UserInfo;
