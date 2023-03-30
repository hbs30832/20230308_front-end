import styled, { css } from "styled-components";

function Button({ color, children, onClick }) {
  return (
    <Container color={color} onClick={onClick}>
      {children}
    </Container>
  );
}

const Container = styled.button`
  background-color: ${({ color, theme }) => color || theme.colors.main};
  color: white;
  border: none;
  padding: 5px 10px;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1);
      font-weight: 700;
    `}

  &:nth-child(n+2) {
    margin-left: 20px;
  }

  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
`;

export const BigButton = styled(Container)`
  padding: 10px 20px;
  font-size: 1.3rem;
`;

export default Button;
