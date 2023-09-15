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
            <h2>Over ons</h2>
            <p>
              Het is de beste browserextensie om alle lastige advertenties te
              blokkeren. Het beschermt uw internet ook tegen trackers van derden
              en verwijdert alle ongewenste advertenties. Of het nu Spotify,
              YouTube, Hulu of Twitch is, nu kun je ongestoord naar je favoriete
              content kijken. Het verbetert ook uw privacy en versnelt uw
              webpagina. Het beste deel is dat het gratis te gebruiken is.
              Download en installeer dus de extensie en ervaar een snellere en
              soepelere ervaring.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="toevoegen aan Chrome" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
