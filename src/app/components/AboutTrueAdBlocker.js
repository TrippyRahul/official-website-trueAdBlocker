import React from "react";
import styles from "../styles/aboutTrueAdBlocker.module.scss";
import Image from "next/image";
import background from "../../../public/3.png";
import aboutImageBackground from "../../../public/aboutTrueAdBlocker.png";

const AboutTrueAdBlocker = () => {
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={aboutImageBackground}
        className={styles.aboutImageBackground}
        alt="aboutImageBackground"
      />
      <h2 className={styles.heading}>About Trueadblocker</h2>
      <div className={styles.contentContainer}>
        <p className={styles.text}>
          It is the best browser extension that protects you from third-party
          trackers and blocks all unnecessary ads. This adblocker Chrome
          extension is the most popular adblocker and is used by thousands of
          people around the globe. It is very easy to use and also supports
          privacy protection. <br /> <br /> Its aim is to give you the best
          experience by eliminating all the disturbing ads that distract you
          while working or watching your favorite shows. It also fastens up your
          page loading and blocks all the malware that can harm your browser.
          So, enjoy your internet experience and the best part is this adblocker
          Chrome extension is free to use.
        </p>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
