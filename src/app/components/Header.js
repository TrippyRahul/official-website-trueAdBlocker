import React from "react";
import styles from "../styles/header.module.scss";
import Navbar from "./Navbar";
import Button from "./Button";
import Image from "next/image";
import header from "../../../public/header.png";
import element from "../../../public/1.png";
const Header = ({ data }) => {
  const Heading = data?.title.replace(/\|/g, "<br>");
  return (
    <div className={styles.hero}>
      <Image src={header} className={styles.background} alt="bg" />
      <Image src={element} className={styles.element} alt="element" />
      <Navbar data={data?.Navbar} />
      <div className={styles.container}>
        <Button customClass={styles.headerButton} text={data?.button} />
        <p className={styles.subtitle1}>{data?.subHeading}</p>
        <h1
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html:`<span>${Heading}</span>` }}
        ></h1>
        <p className={styles.subtitle2}>
          {data?.subTitle}
          {/* <a href="https://www.trueadblocker.net/">
            {" "}
            Adblocker Chrome Extension{" "}
          </a>
          That Blocks All Annoying Ads. */}
        </p>
        <Button text={data?.button} />
      </div>
    </div>
  );
};

export default Header;
