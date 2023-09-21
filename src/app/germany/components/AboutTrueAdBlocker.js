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
            <h2>Über uns</h2>
            <p>
              Es ist die beste Browsererweiterung, um alle störenden Anzeigen zu
              blockieren. Es schützt Ihre Website außerdem vor Trackern von
              Drittanbietern und entfernt alle unerwünschten Anzeigen. Ob
              Spotify, YouTube, Hulu oder Twitch werbeblocker chrome, jetzt
              können Sie Ihre Lieblingsinhalte ungestört ansehen. Es verbessert
              auch Ihre Privatsphäre und beschleunigt Ihre Webseite. Das Beste
              daran ist, dass die Nutzung kostenlos ist. Laden Sie also die
              Erweiterung herunter und installieren Sie sie, um ein schnelleres
              und reibungsloseres Erlebnis zu erzielen.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="Zu Chrome hinzufügen" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
