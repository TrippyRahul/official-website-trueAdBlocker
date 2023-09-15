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
        <h2>Caractéristiques</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Profitez d&apos;une navigation rapide avec la boutique en ligne
                Google Chrome{" "}
              </span>
              <span className={styles["item-text"]}>
                Éliminez les publicités perturbatrices qui interrompent votre
                parcours en ligne et dites non aux pop-ups, bannières,
                publicités vidéo, etc. En bloquant ces publicités, vous
                découvrirez vos pages Web plus rapidement.
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
                Sécurisez votre navigation Web avec l&apos;extension Adblock Chrome{" "}
              </span>
              <span className={styles["item-text"]}>
                Par rapport à Adblock Safari, cette extension vous aidera à
                éviter tous les sites dangereux connus pour propager des
                logiciels malveillants. Cela empêchera également les pirates de
                suivre votre activité en ligne.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
