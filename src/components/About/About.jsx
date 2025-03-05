import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a full-stack developer passionate about building user-friendly web applications. I enjoy tackling challenges, learning new technologies, and creating impactful digital solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
                I thrive on solving complex problems and optimizing systems. I am always eager to explore innovative solutions and improve efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Continuous Learner</h3>
              <p>
                I am committed to lifelong learning, always seeking to enhance my skills in development, and problem-solving to stay ahead in the tech industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
