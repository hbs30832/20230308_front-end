import { useEffect, useState } from "react";
import FilterBox from "./FilterBox";
import { tmdbAxios } from "../../api/tmdbAxios";

function ContentList() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    tmdbAxios
      .get("/trending/all/week")
      .then(({ data }) => setItems(data.results));
  }, []);

  if (!items) return <div>로딩 중..</div>;
  return (
    <div>
      <FilterBox />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;
