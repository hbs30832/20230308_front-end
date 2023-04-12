// src/redux/movies.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../api/movies";
// 비동기 처리를 도와주는 미들웨어 => 함수를 액션으로 사용할 수 있게 해준다.

export const fetchMovies = createAsyncThunk("movies/fetchMovies", getMovies);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
        state = action.payload;
      })
      .addCase(fetchMovies.pending, (state, action) => {
        state.data = [];
        state.error = null;
        state.isLoading = true;
      });
  },
});

export default moviesSlice.reducer;
