import Todos from "./components/Todos";
import TodoProvider, { useTodoState } from "./state/todos";

export default function App() {
  console.log(useTodoState());
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}
