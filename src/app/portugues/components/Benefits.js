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
            <h3> Experimente vídeos ininterruptos com adblock</h3>
            <p>
              Transmita seus programas e filmes favoritos gratuitamente, sem os
              anúncios de phishing que aparecem no meio. Portanto, mime-se sem o
              incômodo de anúncios e bloqueie-os no YouTube e no Hulu.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>Melhore sua experiência no Spotify com Spotify Adblock</h3>
            <p>
              Com este complemento, você pode curtir suas músicas ou playlists
              favoritas sem interrupções de anúncios. Basta baixar e instalar a
              extensão para poder bloquear todos os anúncios indesejados nela.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Proteção de dados</h3>
            <p>
              Ao baixar esta extensão, seus dados ficam protegidos contra
              rastreadores da Internet e não armazenamos nem vazamos nenhuma de
              suas informações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
