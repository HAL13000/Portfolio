import React from "react";
import "./CapitalizedBtn.css";

function CapitalizedBtn(props) {
  return (
    <div className="capitalizedBtn">
      <button
        className="capitalizedBtn"
        type={props.type}
        for={props.for}
        onClick={props.onClick}
        {...props}
      >
        {props.text}
      </button>
    </div>
  );
}

export default CapitalizedBtn;
