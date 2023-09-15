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
            <h2>O nas</h2>
            <p>
              Jest to najlepsze rozszerzenie przeglądarki, które blokuje
              wszystkie kłopotliwe reklamy. Chroni także Twoją sieć przed
              modułami śledzącymi innych firm i usuwa wszystkie niechciane
              reklamy. Niezależnie od tego, czy jest to Spotify, YouTube, Hulu
              czy Twitch, teraz możesz oglądać swoje ulubione treści bez żadnych
              zakłóceń. Zwiększa także Twoją prywatność i przyspiesza działanie
              Twojej strony internetowej. Najlepsze jest to, że korzystanie z
              niego jest bezpłatne. Pobierz i zainstaluj rozszerzenie, a
              będziesz mieć szybsze i płynniejsze działanie.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="Dodaj do Chrome" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
