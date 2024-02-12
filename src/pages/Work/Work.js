import React from "react";
import "./Work.scss";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import Frame from "../../components/Frame/Frame";
import CapitalizedBtn from "../../components/CapitalizedBtn/CapitalizedBtn";
// import { useNavigate } from "react-router-dom";
import pic001 from "../../images/png/pic001.png";
import Mask from "../../components/Mask/Mask";
import ThemeBtn from "../../components/ThemeColor/ThemeBtn";

const Work = () => {
  // const navigate = useNavigate();

  return (
    <div className="work">
      <Mask />
      <HomeBtn />
      <ThemeBtn />
      <div className="container">
        <Frame />
        <div className="content">
          <div className="header">
            <h1>Work</h1>
            <p className="description">
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
          <ul className="list">
            <li>
              <a
                href="https://mymemo-client.vercel.app/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work1" text="MyMemo" />
              </a>
              <p className="text">
                Node.js/React.js/Javascript/Redux.js/express/mongoDB
              </p>
            </li>
            <li>
              <a
                href="https://chattie-kappa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work1" text="Chattie" />
              </a>
              <p className="text">React.js/Firebase/JavaScript</p>
            </li>
            <li>
              <a
                href="https://travibes.vercel.app/?vercelToolbarCode=cOqfYNrM2-W4QTB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work2" text="Travibes" />
              </a>
              <p className="text">HTML/CSS/JavaScript</p>
            </li>
            <li>
              <a
                href="https://meow-chatting.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work3" text="MeowChat" />
              </a>
              <p className="text">HTML/CSS</p>
            </li>
            <li>
              <a
                href="https://portfolio-nu-three-21.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CapitalizedBtn className="work4" text="Portfolio" />
              </a>
              <p className="text">"This website" React.js/JavaScript/Sass</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="work_img">
        <img src={pic001} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Work;
