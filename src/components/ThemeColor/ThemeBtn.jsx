import React from "react";
import "./ThemeBtn.scss";
import { useTheme } from "./ThemeContext";

const ThemeBtn = () => {
  const handleTheme = useTheme();

  return (
    <div className="themeColorBtn_container" onClick={handleTheme}>
      <div className="themeColorBtn light">
        <div className="box">■</div>
        <div className="text">LIGHT</div>
      </div>
      <div className="themeColorBtn dark">
        <div className="box">■</div>
        <div className="text">DARK</div>
      </div>
    </div>
  );
};

export default ThemeBtn;
