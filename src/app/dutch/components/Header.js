import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import styles from "@/app/styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.subtitle1}>UW BESTE KEUZE</h2>
        <h1 className={styles.heading}>Echte adblocker</h1>
        <p className={styles.subtitle2}>
          Adblocker Chrome is de beste extensie waarmee u zonder advertenties
          van uw internetreis kunt genieten. Zeg dus vaarwel tegen opdringerige
          advertenties en neem de volledige controle over uw browser over.
        </p>

        <Button text="toevoegen aan Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
