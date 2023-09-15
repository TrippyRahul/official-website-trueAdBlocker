import React from "react";
import { AiFillChrome } from "react-icons/ai";
import Navbar from "./Navbar";
import Button from "./Button";
import styles from "@/app/styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.subtitle1}>SUA MELHOR ESCOLHA</h2>
        <h1 className={styles.heading}>verdadeiro bloqueador de anúncios</h1>
        <p className={styles.subtitle2}>
          Adblock Chrome é a melhor extensão que o ajudará a aproveitar sua
          jornada na Internet sem anúncios. Então diga adeus aos anúncios
          intrusivos e assuma o controle total do seu navegador.
        </p>

        <Button text="adicionar ao Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
