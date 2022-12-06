import React from "react";
import "./About.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
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
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Here you will find more information about me, what i do and my current
          skills
        </motion.p>

        <div className="about-content">
          <div className="about-me">
            <motion.h2
              className="about-me-title "
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Get to know me
            </motion.h2>
            <motion.p
              className="about-me-text"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              I love creating pages where I’m able to actually make enjoyable
              interactions and experiences for everyone! <br /> <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me. <br /> <br />
              Check out some of my work in the Projects section.
            </motion.p>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <AnchorLink href="#contact" className="btn contact-btn">
                Contact
              </AnchorLink>
            </motion.span>
          </div>

          <div className="skills">
            <motion.h2
              className="about-me-title"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Tech stack & skills
            </motion.h2>

            <motion.div
              className="my-skills"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="skill">
                <FaHtml5 />
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
              <span className="skill">
                <FaSass />
              </span>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
