import styled from "styled-components";
import Button, { BigButton } from "./components/Button";
import { ThemeProvider } from "styled-components";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(true);

  const handleModal = (bool) => {
    setModal(bool);
  };
  return (
    <ThemeProvider
      theme={{
        colors: {
          main: "#fe9721",
        },
      }}
    >
      <Container>
        <Button color="black">Button</Button>
        <Button color="red">Button</Button>
        <Button color="blue">Button</Button>
        <BigButton onClick={() => handleModal(true)}>Big</BigButton>
      </Container>
      {modal && <Modal handleModal={() => handleModal(false)} />}
    </ThemeProvider>
  );
}

// 안쪽 여백 50px 가운데로 보내기 검은색

const Container = styled.div`
  width: 500px;
  margin: 0 auto;

  padding: 50px;
  border: 1px solid black;
`;
