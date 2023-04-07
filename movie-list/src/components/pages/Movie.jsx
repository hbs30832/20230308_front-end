import { Outlet } from "react-router-dom";

function Movie() {
  return (
    <div>
      <h2>Movie</h2>
      <Outlet />
    </div>
  );
}

export default Movie;
