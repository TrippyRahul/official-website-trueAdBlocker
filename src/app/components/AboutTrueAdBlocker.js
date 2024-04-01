import React from "react";
import styles from "../styles/aboutTrueAdBlocker.module.scss";
import Image from "next/image";
import background from "../../../public/3.png";
import aboutImageBackground from "../../../public/aboutTrueAdBlocker.png";

const AboutTrueAdBlocker = ({ data }) => {
  const text = data.text.replace(/\|/g, "<br>");
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={aboutImageBackground}
        className={styles.aboutImageBackground}
        alt="aboutImageBackground"
      />
      <h2 className={styles.heading}>{data.title}</h2>
      <div className={styles.contentContainer}>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
