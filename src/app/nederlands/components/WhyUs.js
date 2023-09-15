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
            Wilt u tracking uitschakelen en advertenties in uw browser stoppen?
          </h2>
          <p>
            Als u op zoek bent naar een manier om tracking uit te schakelen en
            advertenties te blokkeren, dan bent u bij ons aan het juiste adres.
            Net als bij deze add-on heeft u volledige controle over uw online
            activiteiten en kunt u ook alle vervelende en ongewenste
            advertenties verwijderen die uw browsergebruik kunnen verpesten.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Gebruik internet zonder ongewenste reclame</h2>
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
              Surf sneller op internet en blokkeer ongewenste advertenties
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
              Blokkeer pop-upadvertenties met adblocker Firefox om van uw
              favoriete muziek te genieten
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
              Verhoog uw snelheid met adblocker Chrome.
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
              Behoud uw privacy{" "}
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
              Ad Blocker Free is een open-sourceprogramma om te gebruiken
            </li>
          </ul>
          <Button text="toevoegen aan Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
