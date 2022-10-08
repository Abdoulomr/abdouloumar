import React from 'react';
import './About.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

const About = () => {
    return (
            <section className='about' id='about'>
                <div className="about-wrapper">
                <h1 className='section-title'>About me</h1>
                <p className='section-subtitle'>Here you will find more information about me, what I do, and my current skills</p>

                <div className="about-content">
                    <div className="about-me">
                        <h2 className="about-me-title">Get to know me</h2>
                        <p className='about-me-text'>
                            I'm a Frontend Web Developer building the Front-end
                            of Websites and Web Applications that leads to the success
                            of the overall product. Check out some of my work in the
                            Projects section. <br />
                            I'm open to Job opportunities where I can contribute, learn
                            and grow. If you have a good opportunity that matches my 
                            skills and experience then don't hesitate to contact me.
                        </p>
                        <AnchorLink href='#contact' className='btn contact-btn'>Contact</AnchorLink>

                    </div>

                    <div className="skills">
                        <h2 className='about-me-title'>Tech stack & skills</h2>

                        <div className="my-skills">
                            <span className="skill">HTML</span>
                            <span className="skill">CSS</span>
                            <span className="skill">JAVASCRIPT</span>
                            <span className="skill">REACT</span>
                            <span className="skill">RESPONSIVE</span>
                            <span className="skill">BOOTSTRAP</span>
                            <span className="skill">TALWIND</span>
                            <span className="skill">SLACK</span>
                            <span className="skill">GIT</span>
                            <span className="skill">GITHUB</span>
                            <span className="skill">NPM</span>
                            <span className="skill">NETLIFY</span>
                            <span className="skill">ILLUSTRATOR</span>
                            <span className="skill">FIGMA</span>
                            <span className="skill">PHOTOSHOP</span>
                            
                        </div>

                        

                    </div>
                </div>
                </div>
            </section>
    );
};

export default About;