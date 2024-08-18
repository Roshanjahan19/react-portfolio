import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id ="about">
      <div className={styles.content}>
        <h3 className={styles.name}>Hi, my name is </h3>
        <h1 className={styles.title}>Roshan Ara Jahan</h1>
        <p className={styles.description}>
          I'm currently a student majoring in computer science and minoring in mathematics. Please see my contact information below and reach out to me if you'd like to learn more!
        </p>
        <a href="mailto:Roshanjahan1980@gmail.com" className={styles.contactBtn}>
          Contact
        </a>
      </div>
      <img
        src={getImageUrl("portait/portaitImage.png")}
        alt="portait"
        className={styles.portaitImage}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};