import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
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
      <div className={styles.bg3}>
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
        <div className={styles.left}>
          <div className={styles.item}>
            <h3>
              {" "}
              Verbessern Sie Ihr Spotify-Erlebnis mit einem Spotify-Werbeblocker
            </h3>
            <p>
              Mit diesem Add-on können Sie Ihre Lieblingsmusik oder Playlist
              ohne Werbeunterbrechungen genießen. Laden Sie einfach die
              Erweiterung herunter und installieren Sie sie, damit Sie alle
              unerwünschten Anzeigen darauf blockieren können.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>
              Erleben Sie unterbrechungsfreie Videos mit Hulu und dem
              YouTube-Werbeblocker Chrome
            </h3>
            <p>
              Streamen Sie Ihre Lieblingssendungen und -filme kostenlos, ohne
              die dazwischen liegende Phishing-Werbung. Gönnen Sie sich also den
              Ärger mit Werbung und blockieren Sie diese von YouTube und Hulu.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Datenschutz</h3>
            <p>
              Durch das Herunterladen dieser Erweiterung werden Ihre Daten vor
              Internet-Trackern geschützt und wir speichern keine Ihrer
              Informationen oder geben sie weiter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
