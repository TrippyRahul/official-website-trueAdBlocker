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
        <h2 className={styles.subtitle1}>TU MEJOR ELECCIÓN</h2>
        <h1 className={styles.heading}>Verdadero bloqueador de anuncios</h1>
        <p className={styles.subtitle2}>
          Adblock Chrome es la mejor extensión que te ayudará a disfrutar de tu
          viaje por Internet sin anuncios. Diga adiós a los anuncios intrusivos
          y tome el control total de su navegador.
        </p>

        <Button text="Añadir a Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
