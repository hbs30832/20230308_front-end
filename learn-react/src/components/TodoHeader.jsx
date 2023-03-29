export default function TodoHeader({ undoneCount }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  return (
    <div>
      <h2>{dateStr}</h2>
      <p>해야할 일 : {undoneCount}</p>
    </div>
  );
}
