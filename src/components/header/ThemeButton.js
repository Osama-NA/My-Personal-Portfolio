import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { lightTheme, darkTheme } from "../../utils/themes";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme.type === "dark" ? lightTheme : darkTheme);
  };

  return (
    <button className="theme-button" onClick={changeTheme}>
      <div className="dot"></div>
    </button>
  );
};

export default ThemeButton;
