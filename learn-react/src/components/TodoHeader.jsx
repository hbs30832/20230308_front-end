export default function TodoHeader({ todos }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  const undoneCount = todos.filter((todo) => !todo.done).length;
  return (
    <div>
      <h2>{dateStr}</h2>
      <p>
        해야할 일 : {undoneCount}/{todos.length}
      </p>
    </div>
  );
}
