import React, { Fragment } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedinIn, FaTwitter, } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import AnchorLink from "react-anchor-link-smooth-scroll";



const Hero = () => {
    return (
        <Fragment>
            <Navbar />

            <div className='hero' id='hero'>
            <div className="content">
                <h1 className='me'>Hi, I'm Abdoul Oumar SY</h1>

                <p className='presentation'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

                <AnchorLink href='#about' className='btn'>About me</AnchorLink>

                <div className='socials'>
                    <span ><FaGithub className='social'/></span>
                    <span><FaLinkedinIn className='social'/></span>
                    <span><FaTwitter className='social'/></span>
                </div>
            </div>
        </div>
        </Fragment>
        
    );
};

export default Hero;