import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }

  a {
    color : inherit;
    text-decoration : none;
  }

  li {
    list-style : none;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          main: "#3f556c",
        },
      }}
    >
      <GlobalStyle />
      <Container>
        <Sidebar />
        <MainContent />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
`;

export default App;
