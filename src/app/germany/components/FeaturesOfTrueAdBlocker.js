import React from "react";
import styles from "@/app/styles/featuresOfTrueAdBlocker.module.scss";
import Image from "next/image";

const FeaturesOfTrueAdBlocker = () => {
  return (
    <div className={styles.featuresOfTrueAdBlocker}>
      <div className={styles.bg1}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="/Ellipse 10.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="/Ellipse 9.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.container}>
        <h2>Merkmale</h2>

        {/* <div className={styles.top}>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/Слой 2.svg"
                alt="Слой 2"
              />
            </div>
            <span>
              Take control on your Twitch experience with{" "}
              <span>Twitch ad blocker</span> and watch ad free series. You can
              enjoy your favorite content with twitch.
            </span>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/Ресурс 1 2.svg"
                alt="Ресурс 1 2"
              />
            </div>
            <span>
              Experience uninterrupted video ads on Youtube with youtube adblock
              chrome and watch your favroite show freely with{" "}
              <span>youtube ad blocker for chrome.</span> In adblocker youtube,
              you can watch your favroite content without any annoying ads.
            </span>
          </div>

          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/Ресурс 2 6.svg"
                alt="Ресурс 2 6"
              />
            </div>
            <span>
              Enhance your spotify experience by blocking annoying ads and
              immerse yourself with uninterrupted music with this extension.
              With this extension, you can listen your favroite song.
            </span>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/Frame 20.svg"
                alt="Frame 20.svg"
              />
            </div>
            <span>
              Watch your favroite content without interruptions in adblock for
              hulu. By this you can watch your most loved show with hulu.
            </span>
          </div>
        </div> */}

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Genießen Sie schnelles Surfen mit dem Chrome-Werbeblocker
              </span>
              <span className={styles["item-text"]}>
                Beseitigen Sie störende Werbung, die Ihre Online-Reise
                unterbricht, und sagen Sie Nein zu Pop-ups, Bannern,
                Videoanzeigen und mehr. Durch das Blockieren dieser Anzeigen
                werden Ihre Webseiten schneller angezeigt.
              </span>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/BlockAd.svg"
                alt="block-ad-logo"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Sichern Sie Ihr Surfen im Internet mit dem Adblocker Ultimate
              </span>
              <span className={styles["item-text"]}>
                Im Vergleich zum Werbeblocker Safari hilft Ihnen diese
                Erweiterung dabei, alle gefährlichen Websites zu meiden, von
                denen bekannt ist, dass sie Malware verbreiten. Dadurch wird
                auch verhindert, dass Hacker Ihre Online-Aktivitäten verfolgen
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
