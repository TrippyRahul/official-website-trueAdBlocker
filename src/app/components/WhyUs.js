import React from "react";
import styles from "../styles/whyus.module.scss";
import Button from "./Button";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className={styles["why-us"]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            FREE ADBLOCK FOR <br /> CHROME
          </h2>
          <p>
            The features of this extension for Windows go beyond ad blocking. It
            is a multifunctional application that guards kids from unsuitable
            content, prevents adverts, restricts access to risky websites, and
            speeds up page loading with this extension.
          </p>
        </div>
        <div className={styles.right}>
          <h2>CHOOSE US</h2>
          <ul>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./uil_youtube.svg"
                  alt="uil_youtube"
                />
              </div>
              Block youtube ads chrome
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./mdi_twitch.svg"
                  alt="mdi_twitch"
                />
              </div>
              Blocks unwanted twitch adblock extension
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./fontisto_spotify.svg"
                  alt="fontisto_spotify"
                />
              </div>
              Listen your favorite music with spotify adblock
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./simple-icons_hulu.svg"
                  alt="icons_hulu"
                />
              </div>
              Watch endless series with hulu no ads
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./simple-icons_adblock.svg"
                  alt="icons_adblock"
                />
              </div>
              Block pop up ads with total adblock.
            </li>
          </ul>
          <Button text="Add to Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
