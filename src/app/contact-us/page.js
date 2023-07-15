"use client"

import React from "react";
import styles from "../styles/contact.module.scss";
import emailjs from "@emailjs/browser";


const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je4cpqa",
        "template_ie50gdm",
        e.target,
        "e6VEQ3Kk59d-W-GoJ"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.item}>
            <label htmlFor="name">Enter your name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your name"
              name="email"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="10"
              name="message"
              placeholder="Enter your message....."
              required
            ></textarea>
          </div>
          <div className={styles.item}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
