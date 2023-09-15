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
              Prova video ininterrotti con Hulu e il blocco annunci di Youtube
              Chrome{" "}
            </h3>
            <p>
              Trasmetti liberamente in streaming i tuoi programmi e film
              preferiti senza gli annunci di phishing che si frappongono.
              Quindi, coccolati senza il fastidio delle pubblicità e bloccale da
              YouTube e Hulu.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>
              Migliora la tua esperienza Spotify con un blocco annunci Spotify
            </h3>
            <p>
              Con questo componente aggiuntivo puoi goderti la tua musica o
              playlist preferita senza interruzioni dovute alla pubblicità.
              Basta scaricare e installare l&apos;estensione in modo da poter
              bloccare tutti gli annunci indesiderati su di essa.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Protezione dati</h3>
            <p>
              Scaricando questa estensione, i tuoi dati saranno protetti dai
              tracker di Internet e non memorizzeremo né divulgheremo nessuna
              delle tue informazioni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
