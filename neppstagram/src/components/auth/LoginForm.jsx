import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInputs } from "../../hooks/useInputs";
import { login } from "../../api/auth";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../../state/auth";

function LoginForm() {
  const [inputs, handleInputs] = useInputs({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(inputs);

      if (token) {
        setToken(token);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="text"
            placeholder="이메일"
            onChange={handleInputs}
            name="email"
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handleInputs}
            name="password"
          />
        </InputWrapper>
        <BtnWrapper>
          <button>로그인</button>
          <button type="button" onClick={() => navigate("/auth/signup")}>
            회원가입
          </button>
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

export default LoginForm;
