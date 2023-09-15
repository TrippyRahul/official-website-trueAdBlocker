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
            Tarayıcınızda izlemeyi kapatmak ve reklamları durdurmak mı
            istiyorsunuz?
          </h2>
          <p>
            İzlemeyi devre dışı bırakmanın ve reklamları engellemenin bir yolunu
            arıyorsanız doğru yere geldiniz. Bu eklentiyle olduğu gibi çevrimiçi
            etkinlikleriniz üzerinde tam kontrole sahip olabilir ve ayrıca
            tarayıcı kullanımınızı bozabilecek tüm sinir bozucu ve istenmeyen
            reklamları da ortadan kaldırabilirsiniz.
          </p>
        </div>
        <div className={styles.right}>
          <h2>İnterneti istenmeyen reklamlar olmadan kullanın</h2>
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
              İnternette daha hızlı gezinin ve istenmeyen reklamları engelleyin
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
              En sevdiğiniz müziğin keyfini çıkarmak için açılır reklamları
              Youtube reklam engellemesiyle engelleyin
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
              Adblock Google Chrome uzantılarıyla hızınızı artırın .
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
              Gizliliğinizi koruyun
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
              Ücretsiz reklam engelleyici, kullanımı açık kaynaklı bir
              programdır
            </li>
          </ul>
          <Button text="Chrome'a ​​ekle" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
