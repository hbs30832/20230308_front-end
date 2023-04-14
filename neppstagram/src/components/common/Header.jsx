import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Cotainer>
      <h1>
        <Link to="/">Neppstagram</Link>
      </h1>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/posts">Post</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">Profile</Link>
        </NavItem>
      </NavList>
    </Cotainer>
  );
}

const Cotainer = styled.header`
  padding: 15px 0;
  border-bottom: 1px solid #ccc;

  h1 {
    position: absolute;
    top: 0;
    left: 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavItem = styled.li``;

export default Header;
