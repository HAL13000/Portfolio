import React from "react";
import "./About.scss";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import Frame from "../../components/Frame/Frame";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import CapitalizedBtn from "../../components/CapitalizedBtn/CapitalizedBtn";
import Mask from "../../components/Mask/Mask";
import me001 from "../../images/jpg/me001.jpeg";
import ThemeBtn from "../../components/ThemeColor/ThemeBtn";

const About = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  const handleMyCV = () => {
    window.open(
      "https://drive.google.com/file/d/1ufIovVdpgDKXKk4HL7ZCim4qi2mJvbCR/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="about">
      <Mask />
      <Frame />
      <HomeBtn />
      <ThemeBtn />
      <div className="container">
        <div className="header">
          <h1>About</h1>
          <img className="aboutImg" src={me001} alt="" loading="lazy" />
        </div>
        <div className="content">
          <span className="quote">Hello,I'm Haruka.</span>
          <p className="description">
            As there is a word “book-worm” for those who like to read, I would
            like to call myself “creative-worm”. I have a deep love for all
            kinds of creative activities and find joy in transforming ideas into
            tangible works. Whether it's cooking, painting, writing, crafting,
            or coding, each serves as a precious tool of expression for me.
          </p>
          <br />
          <br />
        </div>
        <div className="content">
          <span className="quote">Why Coding?</span>
          <p className="description">
            Coding is enjoyable because it's like putting a brush on a blank
            canvas. We start by typing a single character into a blank file, and
            the endless possibilities unfold. With each character I type, it
            comes to life on the screen as a functioning website that people can
            browse and use. The entire process fills me with excitement.
          </p>
          <br />
          <p className="description">
            I believe there's nothing that can't be created through coding. I
            want to dive into that realm of infinite possibilities, continuously
            learn, experiment, and share new experiences with both myself and
            the users of the services through coding.
          </p>
          <br />
          <br />
        </div>
        <div className="content">
          <span className="quote">Experience</span>
          <li>
            <p className="date">2018-2019</p>
            <p className="log">
              Internship as a web designer at an IT company in Tokyo.
            </p>
          </li>
          <li>
            <p className="date">2021-</p>
            <p className="log">
              Alongside another job, keep learning and creating by coding.
            </p>
          </li>
          <li>
            <p className="date">2022 Apr-May</p>
            <p className="log">
              Project: MeowChatting - Landing Page for Meow Chatting service.
            </p>
            <p className="log">HTML/CSS</p>
          </li>
          <li>
            <p className="date">2023 Feb-Mar</p>
            <p className="log">
              Project: Travibes - A website for rental van/camping car service.
            </p>
            <p className="log">HTML/CSS/JavaScript</p>
          </li>
          <li>
            <p className="date">2023 Apr-Jun</p>
            <p className="log">Project: Chattie - Chatting Web Application</p>
            <p className="log">React.js/Firebase/HTML/CSS</p>
          </li>
          <li>
            <p className="date">2023 Jul-</p>
            <p className="log">Project: Make this website as my portfolio</p>
            <p className="log">React.js/JavaScript/Sass/HTML</p>
          </li>
          <li>
            <p className="date">2023 Sep-</p>
            <p className="log">
              Project: Ongoing fullstack note application project
            </p>
            <p className="log">
              Node.js/MongoDB/Express/React.js/JavaScript/Sass/Redux
            </p>
          </li>
          <br />
          <br />
        </div>
        <div className="content">
          <span className="quote">Skills</span>
          <br />
          <br />
          <div className="skills">
            <div className="skill">React.js</div>
            <div className="skill">Node.js</div>
            <div className="skill">Sass</div>
            <div className="skill">JavaScript</div>
            <div className="skill">TypeScript</div>
            <div className="skill">HTML/CSS</div>
            <div className="skill">Github</div>
            <div className="skill">Firebase</div>
            <div className="skill">MongoDB</div>
            <div className="skill">Adobe PhotoShop/Illustrator</div>
            <div className="skill">ChatGPT</div>
          </div>
          <br />
          <br />
        </div>
        <div className="content">
          <Button text="My CV" onClick={handleMyCV} />
          <br />
          <br />
          <span className="quote">
            " Think of you as creating yourself. "
            <p className="name">-Taro Okamoto(1911-1996)</p>
          </span>
          <br />
          <br />
          <p className="description">
            This is of my favorite words from a Japanese Artist.
            <br />
            His word reminds me that everything I do is connected to something
            various to my life. When I create something, I actually create one
            more piece of myself.
          </p>
          <br />
          <br />
          <CapitalizedBtn onClick={handleNavigateToContact} text="Contact Me" />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

//   /* <div className="content">
//   <span className="quote"></span>
//   <p className="description"></p>
//   <br />
//   <p className="description"></p>
//   <br />
//   <br />
// </div> */

export default About;
