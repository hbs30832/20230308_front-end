import { Link } from "react-router-dom";
import styled from "styled-components";

import { AiOutlineHome, AiOutlinePicture, AiOutlineUser } from "react-icons/ai";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <Cotainer>
      <Wrapper>
        <h1>
          <Link to="/">Neppstagram</Link>
        </h1>
        <SearchBar />
        <NavList>
          <NavItem>
            <Link to="/">
              <AiOutlineHome size={20} color="#777" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/posts">
              <AiOutlinePicture size={20} color="#777" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">
              <AiOutlineUser size={20} color="#777" />
            </Link>
          </NavItem>
        </NavList>
      </Wrapper>
    </Cotainer>
  );
}

const Cotainer = styled.header`
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavItem = styled.li``;

export default Header;
