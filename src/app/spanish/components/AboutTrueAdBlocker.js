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
            <h2>Sobre nosotros</h2>
            <p>
              Es la mejor extensión del navegador para bloquear todos los
              anuncios problemáticos. También protege su web de rastreadores de
              terceros y elimina todos los anuncios no deseados. Ya sea Spotify,
              YouTube, Hulu o Twitch, ahora puedes ver tu contenido favorito sin
              ninguna molestia. También mejora su privacidad y acelera su página
              web. La mejor parte es que es de uso gratuito. Entonces, descargue
              e instale la extensión y disfrute de una experiencia más rápida y
              fluida.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="Añadir a Chrome" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
