import React from "react";
import "./Index.scss";
// import pic001 from "../../images/png/pic001.png";
import { useNavigate } from "react-router-dom";
import CapitalizedBtn from "../../components/CapitalizedBtn/CapitalizedBtn";
import Frame from "../../components/Frame/Frame";
import ThemeBtn from "../../components/ThemeColor/ThemeBtn";

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
    <div className="index">
      {/* <div className="index_background">three.js image</div> */}
      {/* <div className="index_mask"></div> */}
      <Frame />
      <ThemeBtn />
      <div className="container">
        <header className="index">
          <h1>Haruka Ishikawa</h1>
          <h3>Front end developer</h3>
          <p>
            Passionate front-end developer seeking new opportunities to create
            engaging user experiences and bring designs to life.
          </p>
        </header>
        <main className="content">
          <ul className="indexList">
            <li>
              <CapitalizedBtn
                className="index_work"
                text="WORK"
                onClick={handleAccessToWork}
              />
            </li>
            <li>
              <CapitalizedBtn
                className="index_about"
                text="ABOUT"
                onClick={handleAccessToAbout}
              />
            </li>
            <li>
              <CapitalizedBtn
                className="index_contact"
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
