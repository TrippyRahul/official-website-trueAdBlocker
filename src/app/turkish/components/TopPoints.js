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
          <h2>Reklam engelleyici için önemli noktalar</h2>
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
                  Bu uzantıyı kullanarak rahatsız edici tüm reklamları
                  kaldırabilirsiniz
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
                  Tarayıcınızı tüm tehlikeli web sitelerinden koruyacaktır{" "}
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
                  Verilerinizi internet korsanlarından koruyacaktır
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
                  Çocuklar uygunsuz içerikten korunuyor
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
                      src="/material-symbols_wall-art-rounded.svg"
                      alt="/material-symbols_wall-art-rounded.svg"
                    />
                  </div>
                  Adblocker.360 ile karşılaştırıldığında sayfa yüklemeyi
                  hızlandırır
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/Group.svg"
                      alt="/Group.svg"
                    />
                  </div>
                  Rahatsız edici bileşenleri engelleyecektir
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
                  ad blocker de en iyi teknik desteğe sahiptir
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
