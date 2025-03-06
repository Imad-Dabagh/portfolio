import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} >Hi! I'm Imad</h1>
            <p className={styles.description}>I'm an aspiring full-stack developer passionate about building user-friendly web applications.</p>
            <a className={styles.contactBtn} href="mailto:imaddabagh@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/profileImg.png")} alt="My_Image" className={styles.myImg} />
        <div className={styles.topBlur} />
        {/* <div className={styles.bottomBlur} /> */}
    </section>
  )
}
