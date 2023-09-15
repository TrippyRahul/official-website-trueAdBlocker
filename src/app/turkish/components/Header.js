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
        <h2 className={styles.subtitle1}>EN İYİ SEÇİMİN</h2>
        <h1 className={styles.heading}>Gerçek Reklam engelleyici</h1>
        <p className={styles.subtitle2}>
          Adblock Chrome, internet yolculuğunuzun reklamsız keyfini çıkarmanıza
          yardımcı olacak en iyi uzantıdır. Bu nedenle, araya giren reklamlara
          elveda deyin ve tarayıcınızın tam kontrolünü elinize alın.
        </p>

        <Button text="Chrome'a ​​ekle" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
