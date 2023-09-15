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
        <h2>Özellikler</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Chrome reklam engellemesiyle hızlı gezinmenin keyfini çıkarın
              </span>
              <span className={styles["item-text"]}>
                Çevrimiçi yolculuğunuzu kesintiye uğratan ve pop-up&apos;lara,
                banner&apos;lara, video reklamlara ve daha fazlasına hayır diyen
                rahatsız edici reklamları ortadan kaldırın. Bu reklamları
                engelleyerek web sayfalarınızı daha hızlı deneyimleyeceksiniz.
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
                Firefox reklam engellemesiyle web taramanızı güvence altına alın
              </span>
              <span className={styles["item-text"]}>
                Reklam engelleyici Safari ile karşılaştırıldığında bu uzantı,
                kötü amaçlı yazılım yaydığı bilinen tüm tehlikeli sitelerden
                kaçınmanıza yardımcı olacaktır. Bu aynı zamanda bilgisayar
                korsanlarının çevrimiçi etkinliğinizi takip etmesini de
                engelleyecektir.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
