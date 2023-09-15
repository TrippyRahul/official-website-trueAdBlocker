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
            Chcesz wyłączyć śledzenie i zatrzymać reklamy w swojej przeglądarce?
          </h2>
          <p>
            Jeśli szukasz sposobu na wyłączenie śledzenia i zablokowanie reklam,
            to trafiłeś we właściwe miejsce. Podobnie jak w przypadku tego
            dodatku, możesz mieć pełną kontrolę nad swoimi działaniami online, a
            także możesz wyeliminować wszystkie irytujące i niechciane reklamy,
            które mogą zakłócać korzystanie z przeglądarki.
          </p>
        </div>
        <div className={styles.right}>
          <h2>Korzystaj z Internetu bez niechcianych reklam</h2>
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
              Surfuj szybciej po Internecie i blokuj niechciane reklamy
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
              Blokuj wyskakujące reklamy za pomocą narzędzia do blokowania
              reklam YouTube, aby cieszyć się ulubioną muzyką
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
              Zwiększ prędkość dzięki adblock Chrome.
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
              Zachowaj swoją prywatność
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
              Darmowy program do blokowania reklam to program typu open source,
              z którego można korzystać
            </li>
          </ul>
          <Button text="Dodaj do Chrome" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
