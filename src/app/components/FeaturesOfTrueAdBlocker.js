import React from "react";
import styles from "../styles/featuresOfTrueAdBlocker.module.scss";
import Image from "next/image";

const FeaturesOfTrueAdBlocker = () => {
  return (
    <div className={styles.featuresOfTrueAdBlocker}>
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
        <h2>FEATURES OF TRUE AD BLOCKER</h2>

        <div className={styles.top}>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="./Слой 2.svg"
                alt="Слой 2"
              />
            </div>
            <span>
              Take control on your <span>Twitch </span>experience with free
              Adblock for chrome or Twitch ad blocker and watch ad free series.
              You can enjoy your favorite content with twitch adblock.
            </span>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="./Ресурс 1 2.svg"
                alt="Ресурс 1 2"
              />
            </div>
            <span>
              Experience uninterrupted video ads on Youtube with free Adblock
              for chrome or youtube adblock chrome and watch your favroite show
              freely with youtube ad blocker. In adblocker youtube,
              <span>
                you can watch your favroite content without any annoying ads.
              </span>
            </span>
          </div>

          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="./Ресурс 2 6.svg"
                alt="Ресурс 2 6"
              />
            </div>
            <span>
              Enhance your spotify experience by blocking annoying ads at
              spotify adblocker and immerse yourself with uninterrupted music
              with free Adblock for chrome. With{" "}
              <span> Spotify adblocker </span>, you can listen your favroite
              song.
            </span>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="./Frame 20.svg"
                alt="Frame 20.svg"
              />
            </div>
            <span>
              Say hulu no ads with total adblock and watch your favroite content
              without interruptions in adblock for hulu. By this you can watch
              your most loved show with hulu adblocker.
            </span>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>Block Sponsered ads</span>
              <span className={styles["item-text"]}>
                Say goodbye to <span>sponsored ads </span>with free Adblock for
                chrome
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles["item-title"]}>Popup Ads blocker</span>
              <span className={styles["item-text"]}>
                Block unwanted ads and give control over your online space with
                <span>free Adblock for chrome or pop up adblocker.</span>
              </span>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="./BlockAd.svg"
                alt="block-ad-logo"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>Block Google Ads</span>
              <span className={styles["item-text"]}>
                Take control on your online <span>privacy</span> and block
                google ads with total adblock.
              </span>
            </div>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Preventing Online Threats
              </span>
              <span className={styles["item-text"]}>
                Helps you avoid all phishing sites and domains that are known to
                spread malware in <span>total adblock.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
