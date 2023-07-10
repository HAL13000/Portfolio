import React, { createContext, useContext, useEffect, useState } from "react";
// import ThemeColor from "./ThemeColor";

const ThemeContext = createContext();

// Custom Hooks
export function useTheme() {
  return useContext(ThemeContext);
}

// set function handleTheme(), hand the status of theme down to all child
// handleTheme()をContextの中に入れることでProviderを通して一括管理することになる。
// 変化した後の値を違うページ、エレメントに伝えたいときは必ずその値を定義するものを
// Providerの中に入れる。
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState();
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const setLightTheme = () => {
    setTheme("LIGHT");
  };
  const setDarkTheme = () => {
    setTheme("DARK");
  };

  function handleTheme() {
    if (theme === "LIGHT") {
      setDarkTheme();
    } else setLightTheme();
  }

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  //   ThemeColor();
  return (
    <ThemeContext.Provider value={handleTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
