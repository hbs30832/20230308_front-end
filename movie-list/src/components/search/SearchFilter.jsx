import styled, { css } from "styled-components";

function SearchFilter({ filterList, handleFilter }) {
  return (
    <Container>
      <FilterList>
        {filterList.map((filter) => (
          <FilterItem key={filter.id} active={filter.active}>
            <button onClick={() => handleFilter(filter.id)}>
              {filter.text}
            </button>
          </FilterItem>
        ))}
      </FilterList>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0;
`;

const FilterList = styled.ul`
  display: flex;
`;

const FilterItem = styled.li`
  & + & {
    margin-left: 10px;
  }

  button {
    padding: 5px 10px;
    background: none;
    border: 1px solid black;
    border-radius: 4px;

    cursor: pointer;

    ${({ active, theme }) =>
      active &&
      css`
        background-color: ${theme.colors.main};
        color: #fff;
        font-weight: 700;
        border-color: ${theme.colors.main};
      `};
  }
`;

export default SearchFilter;
