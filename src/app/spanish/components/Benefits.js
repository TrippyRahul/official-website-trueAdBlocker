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
              Experimente vídeos ininterrumpidos con Hulu y el bloqueador de
              anuncios de YouTube Chrome
            </h3>
            <p>
              Transmita sus programas y películas favoritos libremente sin esos
              anuncios de phishing que se interponen. Así que, mímate sin la
              molestia de los anuncios y bloquéalos de YouTube y Hulu.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>
              Mejore su experiencia en Spotify con un bloqueador de anuncios de
              Spotify
            </h3>
            <p>
              Con este complemento, puedes disfrutar de tu música o lista de
              reproducción favorita sin interrupciones de anuncios. Simplemente
              descargue e instale la extensión para poder bloquear todos los
              anuncios no deseados que contiene
            </p>
          </div>
          <div className={styles.item}>
            <h3>Protección de Datos</h3>
            <p>
              Al descargar esta extensión, sus datos están protegidos de los
              rastreadores de Internet y no almacenamos ni filtramos su
              información.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
