import React from "react";
import styles from "../styles/reviews.module.scss";
import Image from "next/image";
import Button from "./Button";

const data = [
  {
    id: 1,
    img: "/avatar.svg",
    username: "Jese Leo",
    stars: 5,
    desc: " Amazing work by this chrome, guys! Now I can browse faster now that I'm not receiving the obnoxious adverts and pop-ups!    ",
  },
  {
    id: 2,
    img: "/avatar-1.png",
    username: "Peter Smith",
    stars: 4,
    desc: "Highly recommended! As this amazing extension prevents interruptions while you are browsing the internet, block adverts and run in the background.    ",
  },
  {
    id: 3,
    img: "/avatar-2.png",
    username: " Michael Garcia",
    stars: 5,
    desc: "My favourite extension is adblocker google chrome the one that blocks everything! Now I can shop online and avoid having to look at the dress I didn't buy for the rest of time on the side of my screen! This is the best chrome.    ",
  },
  {
    id: 4,
    img: "/avatar-3.png",
    username: "Benjamin Brown",
    stars: 3,
    desc: " My browsing experience has changed dramatically thanks to this extension. It successfully suppresses adverts and pop-ups so I can concentrate on the content I want to view. Very strongly advised!",
  },
  {
    id: 5,
    img: "/avatar-4.png",
    username: "James Johnson",
    stars: 4,
    desc: "Anyone who is sick of invasive advertisements needs this browser extension. It not only gets rid of advertisements on websites but also provides cutting-edge tools for blocking them on well-known streaming services.",
  },
  {
    id: 6,
    img: "/avatar-5.png",
    username: "William Smith",
    stars: 3,
    desc: "I've used a number of ad-blockers, It stands out for providing the best performance. My web browsing is quicker and more fun as a result of the seamless ad blocking across numerous websites. ",
  },
  {
    id: 7,
    img: "/avatar-6.png",
    username: "Suraj",
    stars: 3,
    desc: "Wow!! I can watch endless series with twitch. ",
  },
  {
    id: 8,
    img: "/avatar-7.png",
    username: "Rahul Rawat",
    stars: 3,
    desc: "Now i can listen my favorite music with spotify ",
  },
  {
    id: 9,
    img: "/avatar-8.png",
    username: "Gaurav Kumar",
    stars: 3,
    desc: "I have used this extension and now i can watch my favorite content with youtube ad chrome, pop up ads.    ",
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
          <h2>RATES REVIEWS</h2>

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

          <Button text="READ ALL REVIEWS" style={{ with: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
