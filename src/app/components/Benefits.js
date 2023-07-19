import React from "react";
import styles from "../styles/benefits.module.scss";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.bg1}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="/Ellipse 10.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="/Ellipse 9.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.bg3}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="/Ellipse 9.svg"
            alt="Ellipse"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.item}>
            <h3>Excellent ad-blocking software</h3>
            <p>
              Utilize the best ad-blocking technology available in this
              extension. Block all video advertisements, pop-ups and display
              adverts with this extension.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Without exception</h3>
            <p>
              Never allow anyone to impose a list of &quot;acceptable ads&quot;
              on your behalf. Make your own list of reputable websites to
              including in this extension.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>High Definition Streaming</h3>
            <p>
              With this extension, you can block unwanted ads without affecting
              streaming quality.
            </p>
          </div>
          <div className={styles.item}>
            <h3>Blocking Warnings</h3>
            <p>displays the notice following ad blocking</p>
          </div>
          <div className={styles.item}>
            <h3>Select Enable or Disable</h3>
            <p>
              Simply click the toggle button to enable blocking with
              <span>free ablock for chrome.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
