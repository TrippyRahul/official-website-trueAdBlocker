import React from "react";
import styles from "../styles/reviews.module.scss";
import Image from "next/image";
import background from "../../../public/3.png";

const Reviews = ({ data }) => {
  return (
    <>
      <div className={styles.reviews}>
        <Image src={background} className={styles.background} alt="bg" />
        <div className={styles.container}>
          <h2 className={styles.heading}>{data?.title}</h2>
          <div className={styles.cards}>
            <div className={styles.containerOne}>
              {data?.reviewLeft.map((data, index) => (
                <div className={styles.cardOne} key={index}>
                  <Image
                    className={styles.avatar}
                    src={data.image}
                    alt="avatar"
                  />
                  <h2>{data.name}</h2>
                  <p className={styles.date}>{data.date}</p>
                  <p className={styles.text}>{data.reviewText}</p>
                </div>
              ))}
            </div>
            <div className={styles.containerTwo}>
              {data?.reviewRight.map((data, index) => (
                <div className={styles.card} key={index}>
                  <Image
                    className={styles.avatar}
                    src={data.image}
                    alt="avatar"
                  />
                  <h2>{data.name}</h2>
                  <p className={styles.date}>{data.date}</p>
                  <p className={styles.text}>{data.reviewText}</p>
                </div>
              ))}
            </div>
            {/* 
              <div className={styles.card}>
                <h2>Gaurav Kumar</h2>
                <p className={styles.date}>March 11,24</p>
                <p className={styles.text}>
                  I can’t even say how much the Adblocker Chrome extension
                  helped me. It has helped me not only block ads but also save
                  my data and privacy.
                </p>
              </div> */}
            {/* <div className={styles.card}>
                <h2>Shehnaaz</h2>
                <p className={styles.date}>March 20,24</p>
                <p className={styles.text}>
                  Such a wonderful app!! It removes all the disgusting ads that
                  can ruin your online experience.
                </p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
