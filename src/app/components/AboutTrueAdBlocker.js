import React from "react";
import styles from "../styles/aboutTrueAdBlocker.module.scss";
import Button from "./Button";
import Image from "next/image";

const AboutTrueAdBlocker = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2>ABOUT TRUE ADBLOCKER</h2>
            <p>
              True Adblocker is the best browser addon that shields users from
              third-party trackers and deletes adverts from chrome. True
              Adblocker is actually the most popular adblock for chrome and it
              is used by millions of people to stop unnecessary ads. True
              adblocker also supports privacy protection and this adblock chrome
              is simple to use and completely customizable
            </p>
          </div>
          <div className={styles.right}>
            <Button text="GET TRUE ADBLOCKER NOW" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles["image-container"]}>
              <Image
                src="./BlockAd.svg"
                alt="BlockAd Logo"
                className={styles.image}
                fill={true}
              />
            </div>
          </div>
          <div className={styles.right}>
            <p>
              TrueAdblocker make sure that you can have your best experience by
              blocking all unwanted ads with free adblock for chrome.
              TrueAdblocker eliminates all the distractions that you face while
              watching your favorite content with spotify adblocker, youtube
              adblocker, pop up ads, hulu no ads and twitch adblocker. You can
              regain your control over your online activities, enhancing both
              speed and privacy. So, say goodbye to all annoying ads and enjoy a
              faster, smoother and enjoyable internet experience with one and
              only true adblocker.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
