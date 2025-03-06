import React, { useState, useEffect } from "react";
import { db, collection, addDoc } from "../../firebase-config";
import styles from "./Contact.module.css"; // Import styles as an object

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Clear status after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 2000);

      // Clean up the timer on unmount
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending..."); // Set the status

    try {
      await addDoc(collection(db, "messages"), form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Me</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className={styles.textarea}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>

      {status && (
        <p
          className={`${styles.statusMessage} ${status === "Sending..." ? styles.hidden : ""} ${status === "Message sent successfully!" ? styles.success : status === "Failed to send message." ? styles.error : ""}`}
        >
          {status}
        </p>
      )}
    </section>
  );
};
