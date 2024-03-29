import React from "react";
import styles from "../styles/reviews.module.scss";
import Image from "next/image";
import background from "../../../public/3.png";
import avatar1 from "../../../public/avatar_1.png";
import avatar2 from "../../../public/avatar_2.png";
import avatar3 from "../../../public/avatar_3.png";
import avatar4 from "../../../public/avatar_4.png";
import avatar5 from "../../../public/avatar_5.png";

const Reviews = () => {
  return (
    <>
      <div className={styles.reviews}>
        <Image src={background} className={styles.background} alt="bg" />
        <div className={styles.container}>
          <h2 className={styles.heading}>REVIEWS</h2>
          <div className={styles.cards}>
            <div className={styles.containerOne}>
              <div className={styles.cardOne}>
                
                <Image className={styles.avatar} src={avatar1} alt="avatar" />
                <h2>Rahul Rawat</h2>
                <p className={styles.date}>March 20,24</p>
                <p className={styles.text}>
                  This is the best adblocker Chrome extension as I can watch all
                  my favorite shows without ads.
                </p>
              </div>
              <div className={styles.cardOne}>
                <Image className={styles.avatar} src={avatar2} alt="avatar" />
                <h2>Ronaldo</h2>
                <p className={styles.date}>feb 09,24</p>
                <p className={styles.text}>
                  I have been using this extension for years and I had a great
                  experience.
                </p>
              </div>
              <div className={styles.cardOne}>
                <Image className={styles.avatar} src={avatar3} alt="avatar" />
                <h2>Adarsh</h2>
                <p className={styles.date}>feb 09,24</p>
                <p className={styles.text}>
                  Wow now I can use the extension for free.
                </p>
              </div>
            </div>
            <div className={styles.containerTwo}>
              <div className={styles.card}>
                <Image className={styles.avatar} src={avatar4} alt="avatar" />
                <h2>Gaurav Kumar</h2>
                <p className={styles.date}>March 11,24</p>
                <p className={styles.text}>
                  I can’t even say how much the Adblocker Chrome extension
                  helped me. It has helped me not only block ads but also save
                  my data and privacy.
                </p>
              </div>
              <div className={styles.card}>
                <Image className={styles.avatar} src={avatar5} alt="avatar" />
                <h2>Shehnaaz</h2>
                <p className={styles.date}>March 20,24</p>
                <p className={styles.text}>
                  Such a wonderful app!! It removes all the disgusting ads that
                  can ruin your online experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
