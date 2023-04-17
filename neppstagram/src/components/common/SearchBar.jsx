import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { searchUser } from "../../api/users";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");

  const { data } = useQuery({
    queryKey: ["users/search", input],
    queryFn: () => searchUser(input, 1),
  });

  // 디바운스 - 마지막 요청만 수행. 일정 시간내에 또 실행되면 기존 timeout 취소
  const timeout = useRef(null);

  const handleInput = (e) => {
    // 기존에 등록된 스케줄이 있으면 취소
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setInput(e.target.value);
    }, 500);
  };

  return (
    <Container>
      <InputBox>
        <input type="text" onChange={handleInput} />
      </InputBox>
      {data?.length > 0 && (
        <ResultList>
          {data?.map((user) => (
            <ResultItem key={user.id}>
              <Link to={`users/${user.id}`}>{user.name}</Link>
            </ResultItem>
          ))}
        </ResultList>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const InputBox = styled.div`
  border: 1px solid black;
  padding: 5px;
  input {
    border: none;
    outline: none;
  }
`;

const ResultList = styled.ul`
  border: 1px solid black;
  border-top: none;
  width: 100%;
  position: absolute;
  background-color: #fff;
`;

const ResultItem = styled.li`
  & + & {
    border-top: 1px solid black;
  }
  a {
    display: block;
    padding: 5px;
  }
  a:hover {
    background-color: #eee;
  }
`;

export default SearchBar;
