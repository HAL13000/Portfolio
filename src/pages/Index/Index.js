import React from "react";
import "./Index.css";
// import pic001 from "../../images/png/pic001.png";
import { useNavigate } from "react-router-dom";
import CapitalizedBtn from "../../components/CapitalizedBtn/CapitalizedBtn";
import Frame from "../../components/Frame/Frame";
import ThemeColor from "../../components/ThemeColor/ThemeColor";

const Index = () => {
  const navigate = useNavigate();

  const handleAccessToWork = () => {
    navigate("/work");
  };
  const handleAccessToAbout = () => {
    navigate("/about");
  };
  const handleAccessToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="index_wrapper">
      {/* <div className="index_background">three.js image</div> */}
      {/* <div className="index_mask"></div> */}
      <Frame />
      <ThemeColor />
      <div className="index_container">
        <header className="index">
          <h1>Haruka Ishikawa</h1>
          <h3>Front end developer</h3>
          <p>
            Passionate front-end developer seeking new opportunities to create
            engaging user experiences and bring designs to life.
          </p>
        </header>
        <main className="index_content">
          <ul className="indexList">
            <li>
              <CapitalizedBtn
                className="work"
                text="WORK"
                onClick={handleAccessToWork}
              />
            </li>
            <li>
              <CapitalizedBtn
                className="about"
                text="ABOUT"
                onClick={handleAccessToAbout}
              />
            </li>
            <li>
              <CapitalizedBtn
                className="contact"
                text="CONTACT"
                onClick={handleAccessToContact}
              />
            </li>
          </ul>
          {/* <div className="indexImage">
          <img src={pic001} alt="" />
        </div> */}
        </main>
      </div>
    </div>
  );
};

export default Index;
