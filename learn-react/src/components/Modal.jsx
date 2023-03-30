import styled, { keyframes } from "styled-components";
import Button from "./Button";

function Modal({ handleModal }) {
  return (
    <Container>
      <ModalBox>
        <h2>모달창이 켜졌습니다</h2>
        <p>축하드립니다. 모달창이 켜졌습니다!</p>

        <ButtonBox>
          <Button onClick={handleModal}>확인</Button>
        </ButtonBox>
      </ModalBox>
    </Container>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;

  padding: 10px;
  position: relative;
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default Modal;
