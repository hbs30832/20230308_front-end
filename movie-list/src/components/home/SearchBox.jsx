import styled from "styled-components";
import Button from "../common/button";
import { Link } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const [query, setQuery] = useState("");
  return (
    <Container>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <Button>
        <Link to={"/search?query=" + query}>검색</Link>
      </Button>
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
