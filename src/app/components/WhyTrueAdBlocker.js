import React from "react";
import styles from "../styles/whyTrueAdBlocker.module.scss";
import Image from "next/image";

const WhyTrueAdBlocker = () => {
  return (
    <div className={styles["why-true-ad-blocker"]}>
      <div className={styles.bg1}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="./Ellipse 10.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="./Ellipse 9.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.container}>
        <h2> WHY TRUE ADBLOCKER</h2>

        <div className={styles.content}>
          <div className={styles.row1}>
            <span>WHY TRUE ADBLOCKER</span>
            <span>
              <div className={styles["image-container"]}>
                <Image
                  className={styles.image}
                  fill={true}
                  src="./ant-design_safety-outlined.svg"
                  alt="ant-design_safety-outlined"
                />
              </div>
              TRUE ADBLOCKER
            </span>
            <span>
              <div className={styles["image-container"]}>
                <Image
                  className={styles.image}
                  fill={true}
                  src="./eva_cube-fill.svg"
                  alt="eva_cube-fill"
                />
              </div>
              COMMON EXTENTION
            </span>
          </div>

          <div className={styles.row}>
            <span>Stop online adverts</span>
          </div>
          <div className={styles.row}>
            <span>
              Today&apos;s best adblock for chrome are generally good at what
              they do.
            </span>
            <span className={styles.yes}>YES</span>
            <span>YES</span>
          </div>
          <div className={styles.row}>
            <span colSpan="3">
              Fasten up page loading with ad block extension chrome.
            </span>
          </div>
          <div className={styles.row}>
            <span>
              It removes advert before they are downloaded to your device by
              your browser, as opposed to twitch adblock chrome extension.
            </span>
            <span className={styles.yes}>YES</span>
            <span>YES</span>
          </div>
          <div className={styles.row}>
            <span colSpan="3">Eliminates Irritants</span>
          </div>
          <div className={styles.row}>
            <span>It can block obtrusive components.</span>
            <span className={styles.yes}>YES</span>
            <span>PARTLY</span>
          </div>
          <div className={styles.row}>
            <span colSpan="3">Keeps sites functional</span>
          </div>
          <div className={styles.row}>
            <span>
              After deleting ad sections, the majority of it keep their page
              functionally
            </span>
            <span className={styles.yes}>YES</span>
            <span className={styles.no}>NO</span>
          </div>
          <div className={styles.row}>
            <span>Technical assistance</span>
          </div>
          <div className={styles.row}>
            <span>This extension has best technical assistance</span>
            <span className={styles.yes}>YES</span>
            <span className={styles.no}>NO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrueAdBlocker;
