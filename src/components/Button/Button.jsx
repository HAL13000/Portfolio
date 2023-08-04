import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button
      className="button"
      type={props.type}
      for={props.for}
      onClick={props.onClick}
      {...props}
    >
      {props.text}
    </button>
  );
}

export default Button;
