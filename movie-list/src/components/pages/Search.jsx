import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { tmdbAxios } from "../../api/tmdbAxios";
import Poster from "../common/Poster";
import styled from "styled-components";
import qs from "qs";

function Search() {
  // 쿼리스트링으로 넘어온 keyword 값 꺼내기
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await tmdbAxios.get("search/movie", {
        params: {
          query,
        },
      });

      setResults(data.results);
    };

    fetchData();
  }, [query]);

  console.log(results);

  if (!results) return <div>로딩 중...</div>;

  return (
    <div>
      <PostList>
        {results.map((item) => (
          <li key={item.id}>
            <Poster data={item} />
          </li>
        ))}
      </PostList>
    </div>
  );
}

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  li {
    width: 154px;
  }
`;

export default Search;
