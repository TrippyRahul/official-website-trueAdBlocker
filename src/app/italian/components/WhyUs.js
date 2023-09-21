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
            Vuoi disattivare il monitoraggio e interrompere la pubblicità sul
            tuo browser?
          </h2>
          <p>
            Se stai cercando un modo per disabilitare il tracciamento e bloccare
            gli annunci, sei nel posto giusto. Come con questo componente
            aggiuntivo, puoi avere il pieno controllo sulle tue attività online
            e puoi anche eliminare tutte le pubblicità fastidiose e indesiderate
            che possono rovinare l'utilizzo del tuo browser.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Utilizza Internet senza pubblicità indesiderata</h2>
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
              Naviga più velocemente in Internet e blocca gli annunci
              indesiderati
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
              Blocca gli annunci pop-up con the ad blocker Youtube per goderti
              la tua musica preferita
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
              Aumenta la tua velocità con the Chrome Store adblock.
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
              Mantieni la tua privacy
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
              adblock extension free è un programma open source da utilizzare
            </li>
          </ul>
          <Button text="Aggiungi a Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
