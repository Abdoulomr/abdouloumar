import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer-elements-wrapper">
        <div className="footer-top">
          <div className="footer-intro">
            <h2>Abdoul Oumar SY</h2>
            <p className="footer-description">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>

          <div className="footer-social">
            <h2>Social</h2>
            <div className="footer-socials">
              <a
                className="social"
                target="_blank"
                href="https://www.linkedin.com/in/abdoul-oumar-sy-b34443169/"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="social"
                target="_blank"
                href="https://github.com/Abdoulomr"
              >
                <FaGithub />
              </a>
              <a
                className="social"
                target="_blank"
                href="https://twitter.com/abdoulomr"
              >
                <FaTwitter />
              </a>
              <a
                className="social"
                target="_blank"
                href="https://www.instagram.com/abdoulsee/"
              >
                <RiInstagramFill />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h2>Contact</h2>
            <div className="footer-contacts">
              <span className="contact-ietm">
                <FaPhoneAlt className="contact-icon" />{" "}
                <a className="social" href="tel:00221781145615">
                  00221 78 114 56 15
                </a>
              </span>
              <span className="contact-ietm">
                <GrMail className="contact-icon" />{" "}
                <a className="social" href="mailto:abdoulomrsy@gmail.com">
                  abdoulomrsy@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="footer-bottom">
          <p className="copyright">
            © Copyright 2022. Made by <a href="#">Abdoul Oumar SY</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
