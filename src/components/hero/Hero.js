import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import Navbar from '../navbar/Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";



const Hero = () => {
    return (
        <section>
            <Navbar />

            <div className='hero' id='hero'>
            <div className="content">
                <h1 className='me'>Hi, I'm Abdoul Oumar SY</h1>

                <p className='presentation'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

                <AnchorLink href='#about' className='btn'>About me</AnchorLink>

                <div className='socials'>

                    <a className='social' target="_blank" href="https://www.linkedin.com/in/abdoul-oumar-sy-b34443169/"><FaLinkedinIn /></a>
                    <a className='social' target="_blank" href="https://github.com/Abdoulomr"><FaGithub /></a>
                    <a className='social' target="_blank" href="https://twitter.com/abdoulomr"><FaTwitter /></a>
                    <a className='social' target="_blank" href="https://www.instagram.com/abdoulsee/"><RiInstagramFill /></a>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default Hero;