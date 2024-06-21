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
      "https://drive.google.com/file/d/1Nr7z9WRi6AhwCCcZEra2ksUaqeU9e_3T/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="about">
      <Mask />
      <Frame />
      <HomeBtn />
      <ThemeBtn />
      <div className="container" id="top">
        <div className="header">
          <div className="header_content">
            <h1>About</h1>
            <h2 className="quote">Hello,I'm Haruka.</h2>
            <ul className="header_content">
              <li className="header_menu">
                <a href="#link1">"Creative Worm"</a>
              </li>
              <li className="header_menu">
                <a href="#link2">Why Web Design?</a>
              </li>
              <li className="header_menu">
                <a href="#link3">Experience</a>
              </li>
              <li className="header_menu">
                <a href="#link4">Skills</a>
              </li>
              <li className="header_menu">
                <a href="#link5">MyCV</a>
              </li>
              <li className="header_menu">
                <a href="#link6">Contact Me</a>
              </li>
            </ul>
          </div>
          <img className="aboutImg" src={me001} alt="" loading="lazy" />
        </div>
        <div className="content" id="link1">
          <h2 className="quote">"Creative-worm"</h2>
          <p className="description">
            As there is a word “book-worm” for those who like to read, I would
            like to call myself “creative-worm”. I have a deep love for all
            kinds of creative activities and find joy in transforming ideas into
            tangible works. Whether it's cooking, painting, writing, crafting,
            or engaging in design work, each serves as a precious tool of
            expression for me.
          </p>
          <br />
          <br />
        </div>
        <div className="content" id="link2">
          <h2 className="quote">Why Web Design?</h2>
          <p className="description">
            Web design is enjoyable because it's like crafting a visual story on
            a blank canvas. Starting with a single idea, endless possibilities
            unfold. Each design choice I make transforms into a functional and
            aesthetically pleasing website or application that people can use.
            This process fills me with satisfaction and excitement.
          </p>
          <br />
          <p className="description">
            I believe there's nothing that can't be created through web design.
            Everything we imagine can become a reality. Through our projects, we
            bring joy, opportunities, and exciting experiences to users, all
            within the palm of their hand. It feels like magic, doesn't it? I
            want to dive into this realm of infinite possibilities, continuously
            learn, experiment, and share new experiences with both myself and
            the users.
          </p>
          <br />
          <br />
        </div>
        <div className="content" id="link3">
          <h2 className="quote">Experience</h2>
          <li>
            <p className="date">2018-2019</p>
            <p className="log">
              Internship as a web designer at an IT company in Tokyo.
            </p>
            <p className="log">HTML/ CSS/ PhotoShop/ Illustrator</p>
          </li>
          <li>
            <p className="date">2020-2021</p>
            <p className="log">
              Creating logos and creating design works for my clients as a
              freelance.
            </p>
            <p className="log">PhotoShop/ Illustrator/ Clipstudio/ Procreate</p>
          </li>
          <li>
            <p className="date">2021-</p>
            <p className="log">
              Alongside another job, keep learning and creating.
            </p>
          </li>
          <li>
            <p className="date">2022 Apr-May</p>
            <p className="log">
              Project: MeowChatting - Landing Page for Meow Chatting service.
            </p>
            <p className="log">HTML/ CSS/ PhotoShop/ Illustrator</p>
          </li>
          <li>
            <p className="date">2023 Feb-Mar</p>
            <p className="log">
              Project: Travibes - A website for rental van/camping car service.
            </p>
            <p className="log">HTML/ CSS/ JavaScript</p>
          </li>
          <li>
            <p className="date">2023 Apr-Jun</p>
            <p className="log">Project: Chattie - Chatting Web Application</p>
            <p className="log">React.js/ Firebase/ HTML/ CSS</p>
          </li>
          <li>
            <p className="date">2023 Jul-</p>
            <p className="log">Project: Make this website as my portfolio</p>
            <p className="log">React.js/ JavaScript /Sass/ HTML</p>
          </li>

          <br />
          <br />
        </div>
        <div className="content" id="link4">
          <h2 className="quote">Skills</h2>
          <br />
          <br />
          <div className="skills">
            <div className="skill">HTML/CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">Adobe PhotoShop/Illustrator</div>
            <div className="skill">Figma</div>
            <div className="skill">Procreate</div>
            <div className="skill">ClipStudio</div>
            <div className="skill">React.js</div>
            <div className="skill">Sass</div>
            <div className="skill">Node.js</div>
            <div className="skill">Github</div>
            <div className="skill">Firebase</div>
            <div className="skill">MongoDB</div>
            <div className="skill">ChatGPT</div>
          </div>
          <br />
          <br />
        </div>
        <div className="content">
          <Button id="link5" text="My CV" onClick={handleMyCV} />
          <br />
          <br />
          <h2 className="quote">
            " Think of you as creating yourself. "
            <p className="name">-Taro Okamoto(1911-1996)</p>
          </h2>
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
          <CapitalizedBtn
            id="link6"
            onClick={handleNavigateToContact}
            text="Contact Me"
          />
          <br />
          <br />
        </div>
        <p className="about_top">
          <a href="#top">TOP</a>
        </p>
      </div>
    </div>
  );
};

export default About;
