import React from "react";
import styles from "../styles/featuresOfTrueAdBlocker.module.scss";
import background from "../../../public/3.png";
import featuresBackground from "../../../public/featuresBackground.png";
import Image from "next/image";

const FeaturesOfTrueAdBlocker = () => {
  const featuresOfTrueAdBlocker = [
    "By downloading an advertisement blocker, you can fully control your Twitch experience with Twitch ad blocker.",
    "You can also block all the Spotify that ruin your interrupt you while listening to your favorite song. Now play your list without any disturbance.",
    "Install the blocker Chrome and have the best experience on YouTube. Enjoy your videos without any ads.",
    "Now you can stream your most preferred content without any interruptions.",
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Features Of Trueadblocker</h2>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={featuresBackground}
        className={styles.featuresBackground}
        alt="featuresBackground"
      />
      <div className={styles.cardContainer}>
        {featuresOfTrueAdBlocker.map((feature, index) => (
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
