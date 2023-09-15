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
              Découvrez des vidéos ininterrompues avec le bloc de publicités
              Hulu et Youtube
            </h3>
            <p>
              Diffusez librement vos émissions et films préférés sans les
              publicités de phishing qui interviennent entre les deux. Alors,
              faites-vous plaisir sans vous soucier des publicités et
              bloquez-les sur YouTube et Hulu.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>Améliorez votre expérience Spotify avec un adblock Spotify </h3>
            <p>
              Avec cet addon, vous pouvez profiter de votre musique ou playlist
              préférée sans aucune interruption due aux publicités. Téléchargez
              et installez simplement l’extension afin de pouvoir bloquer toutes
              les publicités indésirables.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Protection des données</h3>
            <p>
              En téléchargeant cette extension, vos données sont protégées
              contre les trackers Internet et nous ne stockons ni ne divulguons
              aucune de vos informations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
