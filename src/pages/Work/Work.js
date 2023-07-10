import React from "react";
import "./Work.css";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import Frame from "../../components/Frame/Frame";
import ThemeColor from "../../components/ThemeColor/ThemeColor";
import CapitalizedBtn from "../../components/CapitalizedBtn/CapitalizedBtn";
import { useNavigate } from "react-router-dom";
import pic001 from "../../images/png/pic001.png";
import Mask from "../../components/Mask/Mask";

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="work_wrapper">
      <Mask />
      <HomeBtn />
      <ThemeColor />
      <div className="work_container ">
        <Frame />
        <div className="work_content">
          <div className="work_header">
            <h1>Work</h1>
            <p className="work_description">
              <span className="quote">Explore my coding creations!</span>
              <br />
              <br />
              Here you'll find a collection of my projects, showcasing my
              journey as a passionate beginner in the world of coding.
              <br />
              I'm constantly learning and growing, and I'm excited to share my
              work with you.
              <br />
            </p>
          </div>
          <ul className="work_list">
            <li>
              <a
                href="https://chattie-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work1" text="Chattie" />
              </a>
              <p className="work_text">React/Firebase</p>
            </li>
            <li>
              <a
                href="https://travibes.vercel.app/?vercelToolbarCode=cOqfYNrM2-W4QTB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work2" text="Travibes" />
              </a>
              <p className="work_text">HTML/CSS/Javascript</p>
            </li>
            <li>
              <a
                href="https://meow-chatting.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work3" text="MeowChat" />
              </a>
              <p className="work_text">HTML/CSS</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="work_img">
        <img src={pic001} alt="" />
      </div>
    </div>
  );
};

export default Work;
