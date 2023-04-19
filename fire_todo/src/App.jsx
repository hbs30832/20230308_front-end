import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const handleSubmit = async () => {
    await addDoc(collection(db, "todos"), {
      text,
      done: false,
    });

    fetchTodos();
  };

  const handleToggle = async (id, done, text) => {
    await setDoc(doc(db, "todos", id), {
      text,
      done: !done,
    });

    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));

    fetchTodos();
  };

  const fetchTodos = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    /* 
      querySnapshot.docs : 배열
        => id 값과 데이터 값이 따로 있기 때문에 하나로 합쳐준다
    */
    const newTodos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setTodos(newTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span onClick={() => handleToggle(todo.id, todo.done, todo.text)}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
