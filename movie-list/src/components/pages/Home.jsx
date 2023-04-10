import ContentList from "../home/ContentList";

const filters = {
  trending: [
    { id: 1, text: "오늘", active: true, url: "/trending/all/day" },
    { id: 2, text: "이번 주", active: false, url: "/trending/all/week" },
  ],
};

function Home() {
  return (
    <div>
      <ContentList title="트렌딩" filterList={filters.trending} />
    </div>
  );
}

export default Home;
