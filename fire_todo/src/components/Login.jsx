import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );

      // 이메일 인증 메일 전송.
      await sendEmailVerification(userCredential.user);

      console.log(userCredential.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("로그인에 성공했습니다!");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        onChange={handleInputs}
        placeholder="이메일을 입력하세요"
        name="email"
      />
      <input
        type="password"
        onChange={handleInputs}
        placeholder="비밀번호를 입력하세요"
        name="password"
      />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}

export default Login;
