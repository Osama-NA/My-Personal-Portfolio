import React, { useRef, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/themeContext";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AppStyle from "./styles/App.styled";
import "./styles/globals.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const homeRef = useRef();

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <Header homeRef={homeRef} />
        <Home homeRef={homeRef} />
      </AppStyle>
    </ThemeProvider>
  );
};

export default App;