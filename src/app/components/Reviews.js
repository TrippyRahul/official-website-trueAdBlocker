import React from "react";
import styles from "../styles/reviews.module.scss";
import Image from "next/image";
import Button from "./Button";
import background from "../../../public/3.png";
import avatar1 from "../../../public/Avatar1.png";

// const data = [
//   {
//     id: 1,
//     img: "/avatar.svg",
//     username: "Jese Leo",
//     stars: 5,
//     desc: " Amazing work by this chrome, guys! Now I can browse faster now that I'm not receiving the obnoxious adverts and pop-ups!    ",
//   },
//   {
//     id: 2,
//     img: "/avatar-1.png",
//     username: "Peter Smith",
//     stars: 4,
//     desc: "Highly recommended! As this amazing extension prevents interruptions while you are browsing the internet, block adverts and run in the background.    ",
//   },
//   {
//     id: 3,
//     img: "/avatar-2.png",
//     username: " Michael Garcia",
//     stars: 5,
//     desc: "My favourite extension is adblocker google chrome the one that blocks everything! Now I can shop online and avoid having to look at the dress I didn't buy for the rest of time on the side of my screen! This is the best chrome.    ",
//   },
//   {
//     id: 4,
//     img: "/avatar-3.png",
//     username: "Benjamin Brown",
//     stars: 3,
//     desc: " My browsing experience has changed dramatically thanks to this extension. It successfully suppresses adverts and pop-ups so I can concentrate on the content I want to view. Very strongly advised!",
//   },
//   {
//     id: 5,
//     img: "/avatar-4.png",
//     username: "James Johnson",
//     stars: 4,
//     desc: "Anyone who is sick of invasive advertisements needs this browser extension. It not only gets rid of advertisements on websites but also provides cutting-edge tools for blocking them on well-known streaming services.",
//   },
//   {
//     id: 6,
//     img: "/avatar-5.png",
//     username: "William Smith",
//     stars: 3,
//     desc: "I've used a number of ad-blockers, It stands out for providing the best performance. My web browsing is quicker and more fun as a result of the seamless ad blocking across numerous websites. ",
//   },
//   {
//     id: 7,
//     img: "/avatar-6.png",
//     username: "Suraj",
//     stars: 3,
//     desc: "Wow!! I can watch endless series with twitch. ",
//   },
//   {
//     id: 8,
//     img: "/avatar-7.png",
//     username: "Rahul Rawat",
//     stars: 3,
//     desc: "Now i can listen my favorite music with spotify ",
//   },
//   {
//     id: 9,
//     img: "/avatar-8.png",
//     username: "Gaurav Kumar",
//     stars: 3,
//     desc: "I have used this extension and now i can watch my favorite content with youtube ad chrome, pop up ads.    ",
//   },
// ];

const Reviews = () => {
  return (
    <>
      <div className={styles.reviews}>
        <Image src={background} className={styles.background} />
        <div className={styles.container}>
          <h2 className={styles.heading}>REVIEWS</h2>
          <div className={styles.cards}>
            <div className={styles.containerOne}>
              <div className={styles.cardOne}>
                <Image src={avatar1} />
                <h2>Rahul Rawat</h2>
                <p className={styles.date}>March 20,24</p>
                <p className={styles.text}>
                  This is the best adblocker Chrome extension as I can watch all
                  my favorite shows without ads.
                </p>
              </div>
              <div className={styles.cardOne}>
                <Image src={avatar1} />
                <h2>Ronaldo</h2>
                <p className={styles.date}>feb 09,24</p>
                <p className={styles.text}>
                  Wow now I can use the extension for free.
                </p>
              </div>
              <div className={styles.cardOne}>
                <Image src={avatar1} />
                <h2>Adarsh</h2>
                <p className={styles.date}>feb 09,24</p>
                <p className={styles.text}>
                  Wow now I can use the extension for free.
                </p>
              </div>
            </div>
            <div className={styles.containerTwo}>
              <div className={styles.card}>
                <Image src={avatar1} />
                <h2>Gaurav Kumar</h2>
                <p className={styles.date}>March 11,24</p>
                <p className={styles.text}>
                  I have been using this extension for years and I had a great
                  experience.
                </p>
              </div>
              <div className={styles.card}>
                <Image src={avatar1} />
                <h2>Rahul Rawat</h2>
                <p className={styles.date}>March 20,24</p>
                <p className={styles.text}>
                  This is the best adblocker Chrome extension as I can watch all
                  my favorite shows without ads.
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
