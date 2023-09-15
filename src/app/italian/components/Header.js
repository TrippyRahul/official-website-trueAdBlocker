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
        <h2 className={styles.subtitle1}>LA TUA SCELTA MIGLIORE</h2>
        <h1 className={styles.heading}>Vero blocco degli annunci</h1>
        <p className={styles.subtitle2}>
          Le estensioni Adblock di Chrome sono la migliore estensione che ti
          aiuterà a goderti il tuo viaggio su Internet senza pubblicità. Quindi
          dì addio agli annunci intrusivi e assumi il pieno controllo del tuo
          browser.
        </p>

        <Button text="Aggiungi a Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
