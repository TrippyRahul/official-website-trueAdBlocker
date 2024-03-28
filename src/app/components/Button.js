import React from "react";
import styles from "../styles/button.module.scss";

const Button = ({ text, customClass }) => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/trueadblocker/bfnbbojgkemfejhnedknbidfceobmmek?utm_source=ext_sidebar&hl=en-US"
      target="_blank"
    >
      <button className={`${styles.btn} ${customClass}`}>{text}</button>
    </a>
  );
};

export default Button;
