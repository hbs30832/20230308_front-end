import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <div>
      <Title>Login</Title>
      <form>
        <InputWrapper>
          <input type="text" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
        </InputWrapper>
        <BtnWrapper>
          <button>로그인</button>
          <button onClick={() => navigate("/auth/signup")}>회원가입</button>
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
