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
      <Image src={header} className={styles.background} alt="bg" />
      <Image src={element} className={styles.element} alt="element" />
      <Navbar />
      <div className={styles.container}>
        <Button
          customClass={styles.headerButton}
          text="Block All Ads Now - it's Free"
        />
        <p className={styles.subtitle1}>Your Best Choice</p>
        <h1 className={styles.heading}>
          Trueadblocker Chrome Extension <br /> Ultimate Ad Detector
        </h1>
        <p className={styles.subtitle2}>
          It is the best
          <a href="https://www.trueadblocker.net/">
            {" "}
            Adblocker Chrome Extension{" "}
          </a>
          That Blocks All Annoying Ads.
        </p>
        <Button text="Block All Ads Now - it's Free" />
      </div>
    </div>
  );
};

export default Header;
