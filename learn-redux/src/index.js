import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "./redux/counter";
import todosReducer from "./redux/todos";
import moviesReducer from "./redux/movies";

const store = configureStore({
  reducer: {
    counter,
    todos: todosReducer,
    movies: moviesReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
