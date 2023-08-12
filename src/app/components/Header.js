import React from "react";
import styles from "../styles/header.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.subtitle1}>YOUR BEST CHOICE</h2>
        <h1 className={styles.heading}>Expert AdBlocker</h1>
        <p className={styles.subtitle2}>
          It removes all unwanted ads and <span>block pop-ups ads.</span> It is the best
          extension where you can enjoy all your videos without unnecessary ads.
        </p>

        <Button text="Add to Chrome" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
