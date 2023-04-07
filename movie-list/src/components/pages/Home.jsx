import ContentList from "../home/ContentList";
import SearchBox from "../home/SearchBox";

const filters = {
  trending: [
    { id: 1, text: "오늘", active: true, url: "/trending/all/day" },
    { id: 2, text: "이번 주", active: false, url: "/trending/all/week" },
  ],
};

function Home() {
  return (
    <div>
      <SearchBox />
      <ContentList title="트렌딩" filterList={filters.trending} />
    </div>
  );
}

export default Home;
