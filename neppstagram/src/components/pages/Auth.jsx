import styled from "styled-components";
import { Outlet } from "react-router-dom";

// src/cmponents/pages/Login.jsx
function Auth() {
  return (
    <Container>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const OutletWrapper = styled.div`
  border: 1px solid #bbb;
  padding: 50px 20px;
`;

export default Auth;
