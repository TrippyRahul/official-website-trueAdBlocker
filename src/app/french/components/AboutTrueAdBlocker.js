import React from "react";
import styles from "@/app/styles/aboutTrueAdBlocker.module.scss";
import Button from "./Button";
import Image from "next/image";

const AboutTrueAdBlocker = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2>À propos de nous</h2>
            <p>
              C&apos;est la meilleure extension de navigateur pour bloquer toutes les
              publicités gênantes. Il protège également votre site Web des
              trackers tiers et supprime toutes les publicités indésirables.
              Qu&apos;il s&apos;agisse de Spotify, YouTube, Hulu ou Twitch, vous pouvez
              désormais regarder votre contenu préféré sans aucune perturbation.
              Il améliore également votre confidentialité et accélère votre page
              Web. La meilleure partie est que son utilisation est gratuite.
              Alors, téléchargez et installez l’extension et bénéficiez d’une
              expérience plus rapide et plus fluide.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="Ajouter à Chrome" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
