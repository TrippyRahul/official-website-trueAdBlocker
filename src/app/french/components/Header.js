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
        <h2 className={styles.subtitle1}>VOTRE MEILLEUR CHOIX</h2>
        <h1 className={styles.heading}>Véritable bloqueur de publicités</h1>
        <p className={styles.subtitle2}>
          Adblock Chrome est la meilleure extension qui vous aidera à profiter
          de votre parcours Internet sans publicité. Alors dites adieu aux
          publicités intrusives et prenez le contrôle total de votre navigateur.
        </p>

        <Button text="Ajouter à Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
