import React from "react";
import styles from "../styles/header.module.scss";
import Navbar from "./Navbar";
import Button from "./Button";
import Image from "next/image";
import header from "../../../public/header.png";
import element from "../../../public/1.png";
const Header = () => {
  return (
    <div className={styles.hero}>
      <Image src={header} className={styles.background} />
      <Image src={element} className={styles.element} />
      <Navbar />
      <div className={styles.container}>
        <Button
          customClass={styles.headerButton}
          text="Block All Ads Now - it's Free"
        />
        <h2 className={styles.subtitle1}>Your Best Choice</h2>
        <h1 className={styles.heading}>
          Trueadblocker Chrome Extension <br /> Ultimate Ad Detector
        </h1>
        <p className={styles.subtitle2}>
          It is the best Adblocker Chrome Extension That Blocks All Annoying
          Ads.
        </p>
        <Button text="Block All Ads Now - it's Free" />
      </div>
    </div>
  );
};

export default Header;
