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
        <h2 className={styles.subtitle1}>TWÓJ NAJLEPSZY WYBÓR</h2>
        <h1 className={styles.heading}>Prawdziwy bloker reklam</h1>
        <p className={styles.subtitle2}>
          Adblock Chrome to najlepsze rozszerzenie, które pomoże Ci cieszyć się
          podróżą po Internecie bez reklam. Pożegnaj więc natrętne reklamy i
          przejmij pełną kontrolę nad swoją przeglądarką.
        </p>

        <Button text="Dodaj do Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
