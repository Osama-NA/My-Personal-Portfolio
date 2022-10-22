import React, { useRef, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/themeContext";
import Header from "./components/header/Header";
import LoadingPage from "./components/UI/loading-page/LoadingPage";
import Home from "./components/home/Home";
import AppStyle from "./styles/App.styled";
import "./styles/globals.css";

const App = () => {
  const [loading, setLoading] = useState(true)

  const { theme } = useContext(ThemeContext);

  const homeRef = useRef();

  // Removes loading screen after component mount
  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        {/* LOADING SCREEN */}
        {loading && <LoadingPage />}

        {/* PAGE SECTIONS */}
        <Header homeRef={homeRef} />
        <Home homeRef={homeRef}  />
      </AppStyle>
    </ThemeProvider>
  );
};

export default App;