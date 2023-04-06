import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

function SideItem({ menu }) {
  const { pathname } = useLocation();
  const category = pathname.split("/")[1];

  return (
    <Container $active={category === menu.to.split("/")[1]}>
      <MainMenu to={menu.to}>{menu.text}</MainMenu>
      <ul>
        {menu.sub.map((menu) => (
          <li key={menu.id}>
            <SubMenu to={menu.to} $active={pathname === menu.to}>
              {menu.text}
            </SubMenu>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.li`
  font-size: 12px;
  color: #fff;
  font-weight: 700;

  ul {
    display: none;
  }

  ${({ $active }) =>
    $active &&
    css`
      ul {
        display: block;
      }

      & > a {
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}

  &:hover ul {
    display: block;
  }
`;

const MainMenu = styled(Link)`
  display: block;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SubMenu = styled(MainMenu)`
  padding: 10px 20px;

  background-color: ${({ $active }) => $active && "rgba(255, 255, 255, 0.2)"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default SideItem;
