import React from "react";
import styles from "../styles/featuresOfTrueAdBlocker.module.scss";
import background from "../../../public/3.png";
import featuresBackground from "../../../public/featuresBackground.png";
import Image from "next/image";

const FeaturesOfTrueAdBlocker = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{data?.title}</h2>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={featuresBackground}
        className={styles.featuresBackground}
        alt="featuresBackground"
      />
      <div className={styles.cardContainer}>
        {data?.featuresOfTrueAdBlocker.map((feature, index) => (
          <Card key={index} text={feature} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ text }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.text}>{text}</h3>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
