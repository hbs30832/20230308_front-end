import TodoProvider from "./state/todos";
import Todos from "./components/Todos";

import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`;

export default function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <ThemeProvider
        theme={{
          colors: {
            main: "#66a6ff",
          },
        }}
      >
        <Container>
          <Todos />
        </Container>
      </ThemeProvider>
    </TodoProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
