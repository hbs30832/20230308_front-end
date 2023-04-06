import styled from "styled-components";
import SideItem from "./SideItem";

const menuList = [
  {
    id: 1,
    text: "영화",
    to: "/movie/popular",
    sub: [
      { id: 1, text: "인기", to: "/movie/popular" },
      { id: 2, text: "현재 상영 중", to: "/movie/playing" },
      { id: 3, text: "높은 평점", to: "/movie/top" },
    ],
  },
  {
    id: 2,
    text: "TV",
    to: "/tv/popular",
    sub: [
      { id: 1, text: "인기", to: "/tv/popular" },
      { id: 2, text: "오늘 상영", to: "/tv/today" },
      { id: 3, text: "TV 상영 중", to: "/tv/playing" },
      { id: 4, text: "높은 평점", to: "/tv/top" },
    ],
  },
  {
    id: 3,
    text: "인물",
    to: "/person/top",
    sub: [{ id: 1, text: "인기 인물", to: "/person/top" }],
  },
];

function Sidebar() {
  return (
    <Container>
      <Logo>Nepp Movie</Logo>
      <SideList>
        {menuList.map((menu) => (
          <SideItem key={menu.id} menu={menu} />
        ))}
      </SideList>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #fff;
  margin-top: 50px;
  padding-left: 10px;
`;

const SideList = styled.ul`
  margin-top: 60px;
`;

export default Sidebar;
