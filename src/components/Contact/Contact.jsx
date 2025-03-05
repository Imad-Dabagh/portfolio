import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Here you can integrate backend API call
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </section>
  );
};
