import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mmsa0ua', 'template_9m3eqsu', form.current, '3qQi5oql_Z7mvfp9r')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <section className='contact' id='contact'>
            <h1 className='section-title'>Contact me</h1>
            <div className="contact-wrapper">
                <h4 className='contact-header'>Leave me a message</h4>

                <form className='form' ref={form} onSubmit={sendEmail} >
                    <input className='input' type="text" name="user_name" placeholder='Full Name'/>
                    <input className='input' type="email" name="user_email" placeholder='Your Email Adress'/>
                    <textarea name="message" placeholder='Message'/>
                    <input className='form-submit-btn' type="submit" value="Send" />
                </form>
            </div>
            
        </section>
    );
};

export default Contact;