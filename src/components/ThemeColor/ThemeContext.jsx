import React, { createContext, useContext, useEffect, useState } from "react";
import "../../styles/_themes.scss";

const ThemeContext = createContext();

// Custom Hooks
export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("LIGHT");
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  function handleTheme() {
    if (theme === "LIGHT") {
      setTheme("DARK");
    } else {
      setTheme("LIGHT");
    }
  }

  //   ThemeColor();
  return (
    <ThemeContext.Provider value={handleTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

// const setLightTheme = () => {
//   setTheme("LIGHT");
// };
// const setDarkTheme = () => {
//   setTheme("DARK");
// };
