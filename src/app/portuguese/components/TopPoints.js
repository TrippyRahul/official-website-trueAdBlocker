import React from "react";
import styles from "@/app/styles/topPoints.module.scss";
import Image from "next/image";

const TopPoints = () => {
  return (
    <div className={styles["top-points"]}>
      <div className={styles.bg1}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="./Ellipse 5.svg"
            alt="bg-image"
          />
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="./Ellipse 6.svg"
            alt="bg-image"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <h2>Pontos-chave para bloqueador de anúncios</h2>
          <div className={styles.content}>
            <div className={styles.item}>
              <ul>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/icon-park-outline_ad.svg"
                      alt="icon-park-outline_ad.svg"
                    />
                  </div>
                  Ao usar esta extensão, você pode remover todos os anúncios
                  perturbadores
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/uiw_chrome.svg"
                      alt="/uiw_chrome.svg"
                    />
                  </div>
                  Isso protegerá seu navegador de todos os sites perigosos
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/fluent_top-speed-20-filled.svg"
                      alt="/fluent_top-speed-20-filled.svg"
                    />
                  </div>
                  Ele protegerá seus dados contra hackers da Interne
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/akar-icons_network.svg"
                      alt="/akar-icons_network.svg"
                    />
                  </div>
                  As crianças são protegidas de conteúdo impróprio
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/material-symbols_wall-art-rounded.svg"
                      alt="/material-symbols_wall-art-rounded.svg"
                    />
                  </div>
                  Em comparação com o adblock plus , ele irá acelerar o
                  carregamento da página
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <ul>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/Group.svg"
                      alt="/Group.svg"
                    />
                  </div>
                  Isso bloqueará componentes intrusivos
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/twemoji_top-arrow.svg"
                      alt="/twemoji_top-arrow.svg"
                    />
                  </div>
                  Possui o melhor suporte técnico
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPoints;
