// src/api/movies.js
export const getMovies = async (page) => {
  console.log(page);
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?page=4", {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_ACCESS_TOKEN,
    },
  });

  const data = await res.json();

  return data.results;
};
