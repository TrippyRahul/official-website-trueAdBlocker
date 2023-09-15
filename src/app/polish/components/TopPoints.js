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
          <h2>Kluczowe punkty dotyczące blokowania reklam</h2>
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
                  Korzystając z tego rozszerzenia, możesz usunąć wszystkie
                  niepokojące reklamy
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
                  Będzie chronić Twoją przeglądarkę przed wszystkimi
                  niebezpiecznymi stronami internetowymi{" "}
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
                  Zabezpieczy Twoje dane przed hakerami internetowymi{" "}
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
                  Dzieci są chronione przed nieodpowiednimi treściami{" "}
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
                  W porównaniu do Adblock Plus Chrome przyspieszy ładowanie
                  strony
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
                  Zablokuje przeszkadzające elementy{" "}
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
                  W przeciwieństwie do Adblock Opera ma najlepsze wsparcie
                  techniczne{" "}
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
