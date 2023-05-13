import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer-elements-wrapper">
        <div className="footer-top">
          <div className="footer-intro">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Abdoul Oumar SY
            </motion.h2>
            <motion.p
              className="footer-description"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </motion.p>
          </div>

          <div className="footer-social">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Social
            </motion.h2>
            <motion.div
              className="footer-socials"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
                rel="noreferrer noopener"
                href="https://github.com/Abdoulomr"
              >
                <FaGithub />
              </a>
              <a
                className="social"
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/abdoulomr"
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

          <div className="footer-contact">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Reach me
            </motion.h2>
            <motion.div
              className="footer-contacts"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="contact-item">
                <FaPhoneAlt className="contact-icon" />{" "}
                <a className="social" href="tel:00221781145615">
                  00221 78 114 56 15
                </a>
              </span>
              <span className="contact-item">
                <GrMail className="contact-icon" />{" "}
                <a className="social" href="mailto:abdoulomrsy@gmail.com">
                  abdoulomrsy@gmail.com
                </a>
              </span>
            </motion.div>
          </div>
        </div>
        <hr className="line" />
        <div className="footer-bottom">
          <motion.p
            className="copyright"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            © Copyright 2022. Made by{" "}
            <AnchorLink href="#hero">Abdoul Oumar SY</AnchorLink>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
