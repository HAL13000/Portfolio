import React from "react";
import "./HomeBtn.scss";
import { useNavigate } from "react-router-dom";

function HomeBtn() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="homeBtn">
      <p onClick={handleBackToHome}>HOME</p>
    </div>
  );
}

export default HomeBtn;
