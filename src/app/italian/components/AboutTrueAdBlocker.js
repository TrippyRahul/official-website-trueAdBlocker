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
            <h2>Chi siamo</h2>
            <p>
              È la migliore estensione del browser per bloccare tutti gli
              annunci fastidiosi. Inoltre protegge il tuo Web da tracker di
              terze parti e rimuove tutti gli annunci indesiderati. Che si
              tratti di Spotify, YouTube, Hulu o Twitch, ora puoi guardare i
              tuoi contenuti preferiti senza alcun disturbo. Migliora anche la
              tua privacy e velocizza la tua pagina web. La parte migliore è che
              è gratuito. Quindi, scarica e installa l&apos;estensione e goditi
              un&apos;esperienza più rapida e fluida.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="Aggiungi a Chrome" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
