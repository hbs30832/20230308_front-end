import { useCallback, useEffect, useState } from "react";
import FilterBox from "./FilterBox";
import { tmdbAxios } from "../../api/tmdbAxios";
import Poster from "../common/Poster";
import styled from "styled-components";

function ContentList({ filterList, title }) {
  const [items, setItems] = useState(null);
  const [filterState, setFilterState] = useState(filterList);

  const handleFilter = (id) => {
    const newState = filterState.map((filter) =>
      filter.id === id
        ? { ...filter, active: true }
        : { ...filter, active: false }
    );
    setFilterState(newState);
  };

  const fetchData = useCallback(async () => {
    const { url } = filterState.find((filter) => filter.active);
    console.log(url);
    const { data } = await tmdbAxios.get(url);

    setItems(data.results);
  }, [filterState]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!items) return <div>로딩 중..</div>;
  return (
    <Container>
      <FilterBox
        filterList={filterState}
        title={title}
        onClick={handleFilter}
      />
      <PosterList>
        {items.map((item) => (
          <li key={item.id}>
            <Poster data={item} />
          </li>
        ))}
      </PosterList>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;

const PosterList = styled.ul`
  display: flex;
  padding: 20px 0;

  margin-top: 30px;

  overflow-x: auto;

  li {
    margin-right: 20px;
  }
`;

export default ContentList;
