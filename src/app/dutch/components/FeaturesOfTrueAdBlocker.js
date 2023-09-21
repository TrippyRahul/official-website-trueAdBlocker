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
        <h2>Functies</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Geniet van snel browsen met adblocker Chrome
              </span>
              <span className={styles["item-text"]}>
                Elimineer storende advertenties die uw online reis onderbreken
                en zeg nee tegen pop-ups, banners, videoadvertenties en meer.
                Door deze advertenties te blokkeren, ervaart u uw webpagina's
                sneller.
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
                Beveilig uw internetgebruik met adblocker Firefox
              </span>
              <span className={styles["item-text"]}>
                In vergelijking met Adblocker Safari helpt deze extensie u alle
                gevaarlijke sites te vermijden waarvan bekend is dat ze malware
                verspreiden. Dit voorkomt ook dat hackers uw online activiteiten
                volgen.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
