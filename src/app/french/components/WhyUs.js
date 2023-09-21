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
            Vous souhaitez désactiver le suivi et arrêter les publicités sur
            votre navigateur ?
          </h2>
          <p>
            Si vous cherchez un moyen de désactiver le suivi et de bloquer les
            publicités, vous êtes au bon endroit. Comme avec cet add-on, vous
            pouvez avoir un contrôle total sur vos activités en ligne et vous
            pouvez également éliminer toutes les publicités ennuyeuses et
            indésirables qui peuvent ruiner l&apos;utilisation de votre
            navigateur.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Utilisez Internet sans publicité indésirable</h2>
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
              Surfez plus rapidement sur Internet et bloquez les publicités
              indésirables
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
              Bloquez les publicités pop-up avec Adblock Firefox pour profiter
              de votre musique préférée
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
              Augmentez votre vitesse avec Adblock Chrome extension.
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
              Préservez votre vie privée
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
              Ad Blocker Free est un programme open source à utiliser
            </li>
          </ul>
          <Button text="Ajouter à Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
