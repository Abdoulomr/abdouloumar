import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import swal from "sweetalert";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmsa0ua",
        "template_9m3eqsu",
        form.current,
        "3qQi5oql_Z7mvfp9r"
      )
      .then(() => {
        swal("Thank You!", "Message succesfully sent!", "success");
      });
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <h1 className="section-title">Contact me</h1>
      <div className="contact-wrapper">
        <h4 className="contact-header">Leave me a message</h4>

        <form className="form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="input user-name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="user_email"
            className="input user-email"
            placeholder="Your Email Adress"
            required
          />

          <textarea
            name="message"
            className="user-message"
            placeholder="Message"
            required
          />

          <input type="submit" className="form-submit-btn" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
