import { useState } from "react";

import { useGetMoviesQuery } from "../api/movies";

function Movies() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetMoviesQuery(page);

  return (
    <div>
      <h1>Moives</h1>
      <p>page : {page}</p>
      <button onClick={() => setPage(page + 1)}>+1</button>
      <button
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        -1
      </button>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
