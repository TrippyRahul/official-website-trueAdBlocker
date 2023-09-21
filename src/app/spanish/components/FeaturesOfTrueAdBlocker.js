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
        <h2>Características</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Disfruta de una navegación rápida con Twitch Adblock
              </span>
              <span className={styles["item-text"]}>
                Elimine los anuncios disruptivos que interrumpen su viaje en
                línea y diga no a las ventanas emergentes, pancartas, anuncios
                de video y más. Al bloquear estos anuncios, experimentará sus
                páginas web con mayor velocidad.
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
                Asegure su navegación web con adblock for youtube
              </span>
              <span className={styles["item-text"]}>
                En comparación con el bloqueador de anuncios Safari, esta
                extensión le ayudará a evitar todos los sitios peligrosos que se
                sabe que propagan malware. Esto también evitará que los piratas
                informáticos sigan su actividad en línea.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
