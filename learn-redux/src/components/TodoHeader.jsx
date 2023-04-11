function TodoHeader() {
  const date = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <div>
      <h2>{date}</h2>
    </div>
  );
}

export default TodoHeader;
