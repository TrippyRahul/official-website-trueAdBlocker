import React from "react";
import styles from "@/app/styles/aboutTrueAdBlocker.module.scss";
import Button from "./Button";
import Image from "next/image";

const AboutTrueAdBlocker = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2>Hakkımızda</h2>
            <p>
              Tüm sorunlu reklamları engellemek için en iyi tarayıcı
              uzantısıdır. Ayrıca web&apos;inizi üçüncü taraf izleyicilerden korur ve
              tüm istenmeyen reklamları kaldırır. Spotify, YouTube, Hulu veya
              Twitch olsun, artık favori içeriklerinizi hiçbir rahatsızlık
              duymadan izleyebilirsiniz. Ayrıca gizliliğinizi artırır ve web
              sayfanızı hızlandırır. En iyi yanı, kullanımının ücretsiz olması
              ve istediğiniz zaman reklam engelleyiciyi kapatabilmenizdir . Bu
              nedenle uzantıyı indirip yükleyin ve daha hızlı ve sorunsuz bir
              deneyim yaşayın.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="Chrome'a ​​ekle" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
