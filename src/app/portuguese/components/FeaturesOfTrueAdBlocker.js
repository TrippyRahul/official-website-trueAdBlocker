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
                Desfrute de uma navegação rápida com o adblock Twitch
              </span>
              <span className={styles["item-text"]}>
                Elimine anúncios perturbadores que interrompem sua jornada
                on-line e diga não a pop-ups, banners, anúncios em vídeo e muito
                mais. Ao bloquear esses anúncios, você experimentará suas
                páginas da web com maior velocidade.
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
                Proteja sua navegação na web com a extensão adblock do Chrome
              </span>
              <span className={styles["item-text"]}>
                Em comparação com o bloqueador de anúncios Safari, esta extensão
                o ajudará a evitar todos os sites perigosos que espalham
                malware. Isso também impedirá que hackers sigam sua atividade
                online.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
