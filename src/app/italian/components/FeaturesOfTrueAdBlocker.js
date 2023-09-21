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
        <h2>Caratteristiche</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Goditi la navigazione veloce con Google Chrome Web Store
              </span>
              <span className={styles["item-text"]}>
                Elimina le pubblicità fastidiose che interrompono il tuo viaggio
                online e di' no a pop-up, banner, annunci video e altro ancora.
                Bloccando questi annunci, potrai visualizzare le tue pagine web
                con maggiore velocità.
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
                Proteggi la tua navigazione web con Adblock Chrome Extension
              </span>
              <span className={styles["item-text"]}>
                Rispetto a Safari con blocco annunci, questa estensione ti
                aiuterà a evitare tutti i siti pericolosi noti per diffondere
                malware. Ciò impedirà inoltre agli hacker di seguire la tua
                attività online.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
