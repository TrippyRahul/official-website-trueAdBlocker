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
    desc: "Questo è uno strumento straordinario che impedisce tutte le pubblicità interrotte mentre navighi in Internet.",
  },
  {
    id: 2,
    img: "/avatar-1.png",
    username: "Peter Smith",
    stars: 4,
    desc: "È un'estensione eccezionale perché ora posso godermi tutti i miei programmi preferiti su YouTube senza pubblicità indesiderate.",
  },
  {
    id: 3,
    img: "/avatar-2.png",
    username: " Michael Garcia",
    stars: 5,
    desc: "Questo è lo strumento migliore perché blocca gratuitamente tutte le pubblicità fastidiose",
  },
  {
    id: 4,
    img: "/avatar-3.png",
    username: "Benjamin Brown",
    stars: 3,
    desc: "Questo è uno strumento altamente raccomandato perché così posso trasmettere in streaming i miei contenuti preferiti senza alcun disturbo.",
  },
  {
    id: 5,
    img: "/avatar-4.png",
    username: "James Johnson",
    stars: 4,
    desc: "Non solo elimina la pubblicità, ma protegge anche il nostro browser da alcuni siti Web pericolosi",
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
          <h2>Recensioni</h2>

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
