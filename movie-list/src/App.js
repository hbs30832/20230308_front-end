import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV";
import Person from "./components/pages/Person";

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
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/*" element={<Movie />} />
            <Route path="/tv/*" element={<TV />} />
            <Route path="/person/*" element={<Person />} />
          </Routes>
        </MainContent>
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
