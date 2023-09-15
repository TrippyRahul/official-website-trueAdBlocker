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
            <h2>Sobre nós</h2>
            <p>
              É a melhor extensão do navegador para bloquear todos os anúncios
              problemáticos. Ele também protege sua web contra rastreadores de
              terceiros e remove todos os anúncios indesejados. Seja Spotify,
              YouTube, Hulu ou Twitch, agora você pode assistir seu conteúdo
              favorito sem qualquer perturbação. Também aumenta sua privacidade
              e acelera sua página da web. A melhor parte é que seu uso é
              gratuito. Portanto, baixe e instale a extensão e tenha uma
              experiência mais rápida e tranquila..
            </p>
          </div>
          <div className={styles.right}>
            <Button text="adicionar ao Chrome" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
