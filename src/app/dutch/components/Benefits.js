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
            <h3>Ervaar ononderbroken video&apos;s met deze extensie</h3>
            <p>
              Stream uw favoriete programma&apos;s en films gratis zonder de
              phishing-advertenties die ertussen komen. Verwen uzelf dus zonder
              het gedoe van advertenties en blokkeer ze van YouTube en Hulu.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>Verbeter uw Spotify-ervaring met Spotify adblocker</h3>
            <p>
              Met deze add-on kun je zonder onderbrekingen door advertenties
              genieten van je favoriete muziek of afspeellijst. Download en
              installeer gewoon de extensie, zodat u alle ongewenste
              advertenties erop kunt blokkeren.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Gegevensbescherming</h3>
            <p>
              Door deze extensie te downloaden, worden uw gegevens beschermd
              tegen internettrackers en bewaren of lekken we uw gegevens niet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
