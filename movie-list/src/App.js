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
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8000/todos", {
        text,
        done: false,
      });

      fetchData();
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete("http://localhost:8000/todos/" + id);

      fetchData();
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  const handleToggle = async (id, done) => {
    try {
      await axios.patch("http://localhost:8000/todos/" + id, {
        done: !done,
      });

      fetchData();
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  // async 함수로 바꿔보기!
  const fetchData = async () => {
    try {
      dispatch({ action: "LOADING" });

      const { data } = await axios.get("http://localhost:8000/todos");

      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  if (error) return <div>{error.message}</div>;

  if (!data) return null;

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {data.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.done && "line-through",
            }}
          >
            <span onClick={() => handleToggle(todo.id, todo.done)}>
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
