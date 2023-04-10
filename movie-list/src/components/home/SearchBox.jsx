import styled from "styled-components";
import Button from "../common/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?query=" + query);

    // setQuery("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button>검색</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  form {
    display: flex;
  }

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
