import React from "react";
import "./About.css";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import Frame from "../../components/Frame/Frame";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import CapitalizedBtn from "../../components/CapitalizedBtn/CapitalizedBtn";
import Mask from "../../components/Mask/Mask";
import ThemeColor from "../../components/ThemeColor/ThemeColor";
import me01 from "../../images/png/me01.png";
const About = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  const handleMyCV = () => {
    window.open(
      "https://drive.google.com/file/d/166k0WPBccMFXEECoIT7oPo1dEDikYo43/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="about_wrapper">
      <Mask />
      <Frame />
      <HomeBtn />
      <ThemeColor />
      <div className="about_container">
        <div className="about_content">
          <div className="about_header">
            <h1>About</h1>
            <img className="aboutImg" src={me01} alt="" />
          </div>
          <p className="about_description">
            <span className="quote">
              Hello, I'm Haruka.
              <br />
            </span>
            <br />
            As there is a word “book-worm” for those who like to read, I would
            like to call myself “creative-worm”. I have a deep love for all
            kinds of creative activities and find joy in transforming ideas into
            tangible works. Whether it's cooking, painting, writing, crafting,
            or coding, each serves as a precious tool of expression for me.
            <br />
            <br />
          </p>
          <p className="about_description">
            <span className="header">
              Why Coding?
              <br />
              <br />
            </span>
            Coding is enjoyable because it's like putting a brush on a blank
            canvas. We start by typing a single character into a blank file, and
            the endless possibilities unfold. With each character I type, it
            comes to life on the screen as a functioning website that people can
            browse and use. The entire process fills me with excitement.
            <br />
            <br />
            I believe there's nothing that can't be created through coding. I
            want to dive into that realm of infinite possibilities, continuously
            learn, experiment, and share new experiences with both myself and
            the users of the services through coding.
            <br />
            <br />
          </p>
          <ul className="about_description">
            <span className="header">
              Experience
              <br />
              <br />
            </span>
            <li>
              <p>2018-2019</p>
              Internship as a web designer at an IT company in Tokyo.
            </li>
            <li>
              <p>2022-</p>
              Alongside another job, keep learning and creating by coding.
            </li>
            <br />
          </ul>
          <div className="about_description">
            <span className="header">
              Skills
              <br />
              <br />
            </span>
            <div className="about_border_container">
              <div className="about_border">React.js</div>
              <div className="about_border">Node.js</div>
              <div className="about_border">MongoDB</div>
              <div className="about_border">Firebase</div>
              <div className="about_border">HTML/CSS</div>
              <div className="about_border">JavaScript</div>
              <div className="about_border">Github</div>
              <div className="about_border">ChatGPT</div>
              <div className="about_border">Adobe PhotoShop</div>
              <div className="about_border">Adobe Illustrator</div>
            </div>
            <br />
            <br />
            <Button text="My CV" onClick={handleMyCV} />
            <br />
            <br />
          </div>
          <div className="about_contactMe">
            <br />
            <span className="quote">
              " Think of you as creating yourself. "
              <p>-Taro Okamoto(1911-1996)</p>
            </span>
            <br />
            <br />
            <p>
              This is of my favorite words from a Japanese Artist.
              <br />
              His word reminds me that everything I do is connected to something
              various to my life. When I create something, I actually create one
              more piece of myself.
            </p>
            <CapitalizedBtn
              onClick={handleNavigateToContact}
              text="Contact Me"
            />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
