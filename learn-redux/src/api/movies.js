import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// src/api/movies.js
export const getMovies = async (page) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=" + page,
    {
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  );

  const data = await res.json();

  return data.results;
};

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (page) => `/popular?page=${page}`,
      transformResponse: (res) => res.results,
    }),
    getTopRated: builder.query({
      query: (page) => ({
        url: "/top_rated",
        params: {
          page,
          language: "ko-KR",
        },
      }),
      transformResponse: (res) => res.results,
    }),
  }),
});

export const { useGetMoviesQuery, useGetTopRatedQuery } = movieApi;
