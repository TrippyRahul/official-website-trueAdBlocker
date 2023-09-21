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
                Im Vergleich zum werbeblocker Safari hilft Ihnen diese
                Erweiterung dabei, alle gefährlichen Websites zu meiden, von
                denen bekannt ist, dass sie Malware verbreiten. Dadurch wird
                auch verhindert, dass Hacker Ihre Online-Aktivitäten verfolgen.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
