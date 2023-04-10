import styled from "styled-components";
import SearchBox from "./home/SearchBox";

function MainContent({ children }) {
  return (
    <Container>
      <Wrapper>
        <SearchBox />
        {children}
      </Wrapper>
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
