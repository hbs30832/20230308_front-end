import styled from "styled-components";
import Button from "../common/button";

function SearchBox() {
  return (
    <Container>
      <input type="text" />
      <Button>검색</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  input {
    flex: 1;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid #bbb;
    outline: none;
  }
`;

export default SearchBox;
