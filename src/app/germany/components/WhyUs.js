import React from "react";
import styles from "@/app/styles/whyus.module.scss";
import Button from "./Button";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className={styles["why-us"]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            Möchten Sie das Tracking deaktivieren und Werbung in Ihrem Browser
            stoppen?
          </h2>
          <p>
            Wenn Sie nach einer Möglichkeit suchen, das Tracking zu deaktivieren
            und Werbung zu blockieren, sind Sie hier genau richtig. Mit diesem
            Add-on haben Sie die volle Kontrolle über Ihre Online-Aktivitäten
            und können außerdem alle lästigen und unerwünschten Anzeigen
            entfernen, die Ihre Browsernutzung beeinträchtigen können. Es
            verhindert, dass Tracker wie Cookies und Bugs Ihre Daten stehlen und
            manipulieren.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Nutzen Sie das Internet ohne unerwünschte Werbung</h2>
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
              Surfen Sie schneller im Internet und blockieren Sie unerwünschte
              Werbung
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
              Blockieren Sie Popup-Anzeigen mit dem Werbeblocker YouTube, um
              Ihre Lieblingsmusik zu genießen
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
              Steigern Sie Ihre Geschwindigkeit mit dem Werbeblocker Google
              Chrome.
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
              Bewahren Sie Ihre Privatsphäre
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
              Ad Blocker Free ist ein Open-Source-Programm
            </li>
          </ul>
          <Button text="Zu Chrome hinzufügen" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
