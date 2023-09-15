import React from "react";
import styles from "@/app/styles/featuresOfTrueAdBlocker.module.scss";
import Image from "next/image";

const FeaturesOfTrueAdBlocker = () => {
  return (
    <div className={styles.featuresOfTrueAdBlocker}>
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
      <div className={styles.container}>
        <h2>Cechy</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Ciesz się szybkim przeglądaniem dzięki Adblock Firefox{" "}
              </span>
              <span className={styles["item-text"]}>
                Wyeliminuj uciążliwe reklamy, które zakłócają Twoją podróż
                online i powiedz „nie” wyskakującym okienkom, banerom, reklamom
                wideo i nie tylko. Blokując te reklamy, będziesz wyświetlać
                strony internetowe z większą szybkością.
              </span>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/BlockAd.svg"
                alt="block-ad-logo"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Zabezpiecz swoje przeglądanie sieci za pomocą Adblockera
                Ultimate
              </span>
              <span className={styles["item-text"]}>
                W porównaniu do przeglądarki blokującej reklamy w przeglądarce
                Safari, to rozszerzenie pomoże Ci uniknąć wszystkich
                niebezpiecznych witryn, o których wiadomo, że rozprzestrzeniają
                złośliwe oprogramowanie. Zapobiegnie to również hakerom
                śledzenie Twojej aktywności online.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
