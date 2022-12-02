import React from "react";
import "./About.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaSlack,
  FaGithubSquare,
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiNetlify,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <h1 className="section-title">About me</h1>
        <p className="section-subtitle">
          Here you will find more information about me, what i do and my current
          skills
        </p>

        <div className="about-content">
          <div className="about-me">
            <h2 className="about-me-title">Get to know me</h2>
            <p className="about-me-text">
              I love creating pages where I’m able to actually make enjoyable
              interactions and experiences for everyone! <br /> <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me. <br /> <br />
              Check out some of my work in the Projects section.
            </p>
            <AnchorLink href="#contact" className="btn contact-btn">
              Contact
            </AnchorLink>
          </div>

          <div className="skills">
            <h2 className="about-me-title">Tech stack & skills</h2>

            <div className="my-skills">
              <span className="skill">
                <FaHtml5 />
              </span>
              <span className="skill">
                <FaSass />
              </span>
              <span className="skill">
                <FaCss3Alt />
              </span>
              <span className="skill">
                <IoLogoJavascript />
              </span>
              <span className="skill">
                <FaReact />
              </span>
              <span className="skill">
                <FaBootstrap />
              </span>
              <span className="skill">
                <SiTailwindcss />
              </span>
              {/* <span className="skill">
                <FaSass />
              </span> */}
              <span className="skill">
                <FaSlack />
              </span>
              <span className="skill">
                <FaGitAlt />
              </span>
              <span className="skill">
                <FaGithubSquare />
              </span>
              <span className="skill">
                <FaNpm />
              </span>
              <span className="skill">
                <SiNetlify />
              </span>

              <span className="skill">
                <FaFigma />
              </span>
              <span className="skill">
                <SiAdobeillustrator />
              </span>
              <span className="skill">
                <SiAdobephotoshop />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
