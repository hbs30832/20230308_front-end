import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import styled from "styled-components";

function Public() {
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
