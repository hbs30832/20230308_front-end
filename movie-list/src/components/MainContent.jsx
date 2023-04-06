import styled from "styled-components";

function MainContent({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eee;
  padding-top: 50px;
`;

const Wrapper = styled.div`
  max-width: 900px;
  padding: 0 20px;
  margin: 0 auto;
`;

export default MainContent;
