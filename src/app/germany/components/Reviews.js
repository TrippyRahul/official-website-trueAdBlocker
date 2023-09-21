import React from "react";
import styles from "@/app/styles/reviews.module.scss";
import Image from "next/image";
import Button from "./Button";

const data = [
  {
    id: 1,
    img: "/avatar.svg",
    username: "Jese Leo",
    stars: 5,
    desc: " Dies ist ein erstaunliches Tool, das alle unterbrochenen Anzeigen verhindert, während Sie im Internet surfen.",
  },
  {
    id: 2,
    img: "/avatar-1.png",
    username: "Peter Smith",
    stars: 4,
    desc: "Es ist eine hervorragende Erweiterung, da ich jetzt alle meine Lieblingssendungen auf YouTube ohne unerwünschte Werbung genießen kann.",
  },
  {
    id: 3,
    img: "/avatar-2.png",
    username: " Michael Garcia",
    stars: 5,
    desc: "Dies ist das beste Tool, da es alle störenden Anzeigen kostenlos blockiert",
  },
  {
    id: 4,
    img: "/avatar-3.png",
    username: "Benjamin Brown",
    stars: 3,
    desc: "Dies ist ein sehr empfehlenswertes Tool, da ich damit meine Lieblingsinhalte ungestört streamen kann.",
  },
  {
    id: 5,
    img: "/avatar-4.png",
    username: "James Johnson",
    stars: 4,
    desc: "Es entfernt nicht nur Werbung, sondern schützt unseren Browser auch vor einigen gefährlichen Websites",
  },
];

const Reviews = () => {
  return (
    <>
      <div className={styles.reviews}>
        <div className={styles.bg1}>
          <div className={styles["bg-container"]}>
            <Image
              fill={true}
              src="./Ellipse 10.svg"
              alt="Ellipse"
              className={styles["bg-image"]}
            />
          </div>
        </div>
        <div className={styles.bg2}>
          <div className={styles["bg-container"]}>
            <Image
              fill={true}
              src="./Ellipse 9.svg"
              alt="Ellipse"
              className={styles["bg-image"]}
            />
          </div>
        </div>
        <div className={styles.bg3}>
          <div className={styles["bg-container"]}>
            <Image
              fill={true}
              src="./Ellipse 9.svg"
              alt="Ellipse"
              className={styles["bg-image"]}
            />
          </div>
        </div>
        <div className={styles.container}>
          <h2>Rezensionen</h2>

          <div className={styles.cards}>
            {data.map((item) => {
              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.profile}>
                    <div className={styles["image-container"]}>
                      <Image
                        src={item.img}
                        alt="profile"
                        className={styles["image"]}
                        fill={true}
                      />
                    </div>
                    <h3>{item.username}</h3>
                  </div>
                  <div className={styles.rating}>
                    {Array.from({ length: item.stars }, (_, i) => (
                      <span key={i}>
                        <div className={styles["image-container"]}>
                          <Image
                            className={styles.image}
                            fill={true}
                            src="/stars.svg"
                            alt="star"
                          />
                        </div>
                      </span>
                    ))}
                  </div>
                  <div className={styles.text}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button text="LESEN SIE ALLE BEWERTUNGEN" style={{ with: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
