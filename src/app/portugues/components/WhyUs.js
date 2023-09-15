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
            Quer desativar o rastreamento e interromper anúncios no seu
            navegador?
          </h2>
          <p>
            Se você está procurando uma maneira de desativar o rastreamento e
            bloquear anúncios, você veio ao lugar certo. Tal como acontece com
            este complemento, você pode ter controle total sobre suas atividades
            online e também eliminar todos os anúncios irritantes e indesejados
            que podem arruinar o uso do navegador.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Use a Internet sem publicidade indesejada</h2>
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
              Navegue mais rápido na Internet e bloqueie anúncios indesejados
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
              Bloqueie anúncios pop-up com o adblock Firefox para curtir suas
              músicas favoritas
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
              Aumente sua velocidade com o adblock Google Chrome
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
              Mantenha sua privacidade
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
              Ad blocker free é um programa de código aberto para usar
            </li>
          </ul>
          <Button text="Adicionar ao Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
