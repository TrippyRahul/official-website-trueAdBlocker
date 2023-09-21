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
        <h2 className={styles.subtitle1}>DEINE BESTE WAHL</h2>
        <h1 className={styles.heading}>echter Werbeblocker</h1>
        <p className={styles.subtitle2}>
          ad blocker Chrome ist die <span>beste Erweiterung</span>, die Ihnen
          hilft, Ihre Internetreise ohne Werbung zu genießen. Verabschieden Sie
          sich also von aufdringlicher Werbung und übernehmen Sie die volle
          Kontrolle über Ihren Browser.
        </p>

        <Button text="Zu Chrome hinzufügen" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
