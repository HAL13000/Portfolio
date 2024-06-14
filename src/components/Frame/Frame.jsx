import React from "react";
import "./Frame.scss";

const Frame = () => {
  return (
    <div className="frame">
      <div className="frame_line frame_line_left"></div>
      <div className="frame_line frame_line_right"></div>
      <div className="frame_line frame_line_top"></div>
      <div className="frame_line frame_line_bottom">
        <p className="copyright">&copy; 2024</p>
      </div>
    </div>
  );
};

export default Frame;
