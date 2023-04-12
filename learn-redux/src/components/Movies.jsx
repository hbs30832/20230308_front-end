import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movies";

function Movies() {
  const { data, isLoading } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, [dispatch]);

  return (
    <div>
      <h1>Moives</h1>
      <p>page : {page}</p>
      <button>+1</button>
      <button>-1</button>
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
