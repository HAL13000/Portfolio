import React from "react";
import "./Contact.scss";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import Frame from "../../components/Frame/Frame";
import Mask from "../../components/Mask/Mask";
import pic002 from "../../images/png/pic002.png";
import ThemeBtn from "../../components/ThemeColor/ThemeBtn";

const Contact = () => {
  return (
    <div className="contact">
      <Mask />
      <HomeBtn />
      <ThemeBtn />
      <div className="container">
        <Frame />
        <div className="content">
          <div className="header">
            <h1>Contact</h1>
          </div>
          <div className="description">
            <span className="header">Hello,</span>
            <br />
            <br />
            <p>
              I'm here to help you creating the website or doing some design.
              <br />
              Let me know how can I help you via email or other platform below.
              <br />
              <br />
            </p>
            <div className="info">
              <span className="quote">Email:</span>
              <p>harukaishikawa8000@gmail.com</p>
              <br />
              <span className="quote">Social Medias:</span>
              <a
                href="https://www.linkedin.com/in/haruka-ishikawa-795685232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/HAL13000?tab=overview&from=2023-06-01&to=2023-06-30"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <img src={pic002} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
