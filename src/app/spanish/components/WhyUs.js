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
            ¿Quiere desactivar el seguimiento y detener los anuncios en su
            navegador?{" "}
          </h2>
          <p>
            Si está buscando una manera de desactivar el seguimiento y bloquear
            anuncios, ha venido al lugar correcto. Al igual que con este
            complemento, puedes tener control total sobre tus actividades en
            línea y también puedes eliminar todos los anuncios molestos y no
            deseados que pueden arruinar el uso de tu navegador.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Utilice Internet sin publicidad no deseada</h2>
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
              Navega por Internet más rápido y bloquea anuncios no deseados{" "}
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
              Bloquea anuncios emergentes con adblock Firefox para disfrutar de
              tu música favorita
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
              Aumente su velocidad con el adblocker Google Chrome.
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
              Mantenga su privacidad{" "}
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
              El bloqueador de anuncios gratuito es un programa de código
              abierto para usar
            </li>
          </ul>
          <Button text="Añadir a Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
