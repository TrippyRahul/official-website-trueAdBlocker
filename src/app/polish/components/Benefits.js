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
              Oglądaj filmy bez przerw dzięki blokadzie reklam Hulu i Youtube
              Chrome
            </h3>
            <p>
              Swobodnie przesyłaj strumieniowo ulubione programy i filmy bez
              reklam phishingowych, które pojawiają się pomiędzy nimi. Odpręż
              się więc bez kłopotów z reklamami i zablokuj je w YouTube i Hulu.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>
              Popraw swoje wrażenia ze Spotify dzięki blokadzie reklam Spotify
            </h3>
            <p>
              Dzięki temu dodatkowi możesz cieszyć się ulubioną muzyką lub listą
              odtwarzania bez przerw w reklamach. Wystarczy pobrać i
              zainstalować rozszerzenie, aby móc blokować wszystkie niechciane
              reklamy.
            </p>
          </div>
          <div className={styles.item}>
            <h3> Ochrona danych</h3>
            <p>
              Pobierając to rozszerzenie, Twoje dane są chronione przed modułami
              śledzącymi w Internecie, a my nie przechowujemy ani nie ujawniamy
              żadnych informacji.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
