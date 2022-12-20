import React, { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../utils/themes";

const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  // Set theme to previously set theme on last visit if any
  useEffect(() => {
    const previousTheme = localStorage.getItem('theme')
    setTheme(previousTheme === "light" ? lightTheme : darkTheme)
  }, [])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };