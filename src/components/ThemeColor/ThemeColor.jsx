import React from "react";
import "./ThemeColor.css";
import { useTheme } from "./ThemeContext";

const ThemeColor = () => {
  const handleTheme = useTheme();

  return (
    <div className="themeColorBtn_container" onClick={handleTheme}>
      <div className="themeColorBtn light">
        <div className="themeColor_box">■</div>
        <div className="themeColor_text">LIGHT</div>
      </div>
      <div className="themeColorBtn dark">
        <div className="themeColor_box">■</div>
        <div className="themeColor_text">DARK</div>
      </div>
    </div>
  );
};

export default ThemeColor;
