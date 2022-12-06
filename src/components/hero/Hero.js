import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Navbar from "../navbar/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <Navbar />

      <div className="hero" id="hero">
        <div className="content">
          <motion.h1
            className="me"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Abdoul Oumar SY
          </motion.h1>

          <motion.p
            className="presentation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <AnchorLink href="#about" className="btn" role="button">
              About me
            </AnchorLink>
          </motion.span>

          <motion.div
            className="socials"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          >
            <a
              className="social"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/abdoul-oumar-sy-b34443169/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="social"
              target="_blank"
              href="https://github.com/Abdoulomr"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
            <a
              className="social"
              target="_blank"
              href="https://twitter.com/abdoulomr"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
            <a
              className="social"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/abdoulsee/"
            >
              <RiInstagramFill />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
