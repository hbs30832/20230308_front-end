import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;

  padding: 5px 10px;

  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  font-weight: 700;
`;

export default Button;
