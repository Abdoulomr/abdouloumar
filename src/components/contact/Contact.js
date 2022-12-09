import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import swal from "sweetalert";
import { motion } from "framer-motion";

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
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact me
      </motion.h1>
      <div className="contact-wrapper">
        <motion.h4
          className="contact-header"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Leave me a message
        </motion.h4>

        <form className="form" ref={form} onSubmit={sendEmail}>
          <motion.input
            type="text"
            name="user_name"
            className="input user-name"
            placeholder="Full Name"
            required
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.input
            type="email"
            name="user_email"
            className="input user-email"
            placeholder="Your Email Adress"
            required
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.textarea
            name="message"
            className="user-message"
            placeholder="Message"
            required
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.button
            type="submit"
            className="form-submit-btn"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
