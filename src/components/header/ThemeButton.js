import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { lightTheme, darkTheme } from "../../utils/themes";

const ThemeButton = ({themeButtonRef, setHeaderRefresh, headerRefresh}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme.type === "dark" ? lightTheme : darkTheme)
    localStorage.setItem('theme', theme.type === "dark" ? lightTheme.type : darkTheme.type)
  }

  return (
    <button
      ref={themeButtonRef} 
      className="theme-button" 
      onClick={changeTheme}
      onMouseOver={() => setHeaderRefresh(!headerRefresh)}
    >
      <div className="dot"></div>
    </button>
  );
};

export default ThemeButton;
