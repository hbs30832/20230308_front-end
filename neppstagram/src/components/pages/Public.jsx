import { Navigate, Outlet } from "react-router-dom";
import Header from "../common/Header";
import styled from "styled-components";
import { tokenState } from "../../state/auth";
import { useRecoilValue } from "recoil";

function Public() {
  const token = useRecoilValue(tokenState);

  if (!token)
    return <Navigate to="/auth/login" {...alert("로그인이 필요합니다")} />;

  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

export default Public;
