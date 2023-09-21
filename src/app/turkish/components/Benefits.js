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
              Hulu ve Youtube reklam engelleyici Google Chrome web store
              kesintisiz video deneyimini yaşayın
            </h3>
            <p>
              Araya giren kimlik avı reklamları olmadan favori programlarınızı
              ve filmlerinizi özgürce yayınlayın. Yani, reklamlarla uğraşmadan
              kendinizi şımartın ve onları YouTube ve Hulu&apos;dan engelleyin.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>Spotify ad blocker le Spotify deneyiminizi geliştirin</h3>
            <p>
              Bu eklentiyle, reklamlardan herhangi bir kesinti yaşamadan en
              sevdiğiniz müziğin veya çalma listesinin keyfini çıkarabilirsiniz.
              Üzerindeki tüm istenmeyen reklamları engelleyebilmeniz için
              uzantıyı indirip yüklemeniz yeterlidir.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Veri koruması</h3>
            <p>
              Bu uzantıyı indirdiğinizde verileriniz internet izleyicilerinden
              korunur ve hiçbir bilginizi saklamayız veya sızdırmayız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
