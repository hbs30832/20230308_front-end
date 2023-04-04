import axios from "axios";
import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        erorr: null,
        data: action.data,
      };
    case "ERROR": {
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: false,
    error: null,
  });

  const { data, loading, error } = state;

  useEffect(() => {
    dispatch({ action: "LOADING" });

    axios
      .get("http://localhost:8000/todos")
      .then((res) => {
        dispatch({ type: "SUCCESS", data: res.data });
      })
      .catch((e) => {
        dispatch({ type: "ERROR", error: e });
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;

  if (error) return <div>{error.message}</div>;

  if (!data) return null;

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
