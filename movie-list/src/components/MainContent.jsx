import styled from "styled-components";

function MainContent({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  background-color: #eee;
  padding: 50px 20px 0;
`;

export default MainContent;
