import { useGetTopRatedQuery } from "../api/movies";

function TopRated() {
  const { data, isLoading, error } = useGetTopRatedQuery(1);

  if (isLoading) return <div>로딩 중 </div>;

  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default TopRated;
