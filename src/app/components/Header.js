import React from "react";
import styles from "../styles/header.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.hero}>
      <Navbar/>
      <div className={styles.container}>
        <h2 className={styles.subtitle1}>YOUR BEST CHOICE</h2>
        <h1 className={styles.heading}>True AdBlocker</h1>
        <p className={styles.subtitle2}>
          True Adblocker removes all unwanted ads and block pop-ups ads. It is
          the <span>BEST</span> and <span>FREE</span> Adblock
        </p>

        <a
          href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
          target="_blank"
        >
          <button className={styles.btn}>
            <AiFillChrome /> Add to Chrome
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
Header;
