import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInputs } from "../../hooks/useInputs";
import { login } from "../../api/auth";

function SignupForm() {
  const navigate = useNavigate();
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  const handleSubmit = async (e) => {
    const { name, email, password, passwordVerify } = inputs;
    e.preventDefault();

    const form = new FormData(e.target);

    // for ~ of : 이터러블(반복 가능한)한 객체를 순회한다.
    for (const pair of form.entries()) {
      if (pair[1] === "") {
        alert(`${pair[0]} 값 입력해`);
        return;
      }
    }

    if (password !== passwordVerify) {
      alert("똑바로 써라");
      return;
    }

    try {
      const status = await login(name, email, password);

      if (status === 201) {
        alert("회원가입에 성공했습니다");
        navigate("/auth/login");
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div>
      <Title>Signup</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="text"
            placeholder="유저 이름"
            name="name"
            onChange={handleInputs}
          />
          <input
            type="text"
            placeholder="이메일"
            name="email"
            onChange={handleInputs}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handleInputs}
            name="password"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            onChange={handleInputs}
            name="passwordVerify"
          />
        </InputWrapper>
        <BtnWrapper>
          <button>회원가입</button>
          <button onClick={() => navigate("/auth/login")}>취소</button>
        </BtnWrapper>
      </form>
    </div>
  );
}

const Title = styled.h2`
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-top: 20px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin-top: 20px;
`;

export default SignupForm;
