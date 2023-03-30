import styled from "styled-components";
import Button, { BigButton } from "./components/Button";
import { ThemeProvider } from "styled-components";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(true);
  const [disappear, setDisapper] = useState(false);

  const handleModal = (bool) => {
    if (!disappear) {
      setTimeout(() => {
        setModal(bool);
      }, 1000);
    } else {
      setModal(bool);
    }
    setDisapper(!bool);
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
      {modal && (
        <Modal handleModal={() => handleModal(false)} disappear={disappear} />
      )}
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
