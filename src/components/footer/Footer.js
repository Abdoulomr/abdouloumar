import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-intro">
                    <h2>Abdoul Oumar SY</h2>
                    <p className='footer-description'>
                        A Frontend focused Web Developer building
                        the Frontend of Websites and Web Applications
                        that leads to the success of the overall product
                    </p>
                </div>

                <div className="footer-social">
                    <h2>Social</h2>
                    <div className="footer-socials">
                    <a className='social' href="https://www.linkedin.com/in/abdoul-oumar-sy-b34443169/"><FaLinkedinIn /></a>
                    <a className='social' href="https://github.com/Abdoulomr"><FaGithub /></a>
                    <a className='social' href="https://twitter.com/abdoulomr"><FaTwitter /></a>
                    <a className='social' href="https://www.instagram.com/abdoulsee/"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <hr className='line'/>
            <div className="footer-bottom">
                <p className='copyright'>© Copyright 2022. Made by <a href="#">Abdoul Oumar SY</a></p>
            </div>
        </div>
    );
};

export default Footer;