import React from "react";
import "./Contact.css";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import Frame from "../../components/Frame/Frame";
import ThemeColor from "../../components/ThemeColor/ThemeColor";
import Mask from "../../components/Mask/Mask";
import pic002 from "../../images/png/pic002.png";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <Mask />
      <HomeBtn />
      <ThemeColor />
      <div className="contact_container">
        <Frame />
        <div className="contact_content">
          <div className="contact_header">
            <h1>Contact</h1>
          </div>
          <div className="contact_description">
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
            <div className="contact_info">
              <span className="quote">Email:</span>
              <p>haru.smile.13@gmail.com</p>
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
          <img src={pic002} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
