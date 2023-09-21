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
    desc: "이것은 인터넷을 탐색하는 동안 중단되는 모든 광고를 방지하는 놀라운 도구입니다. ",
  },
  {
    id: 2,
    img: "/avatar-1.png",
    username: "Peter Smith",
    stars: 4,
    desc: "이제 원치 않는 광고 없이 유튜브 애드블록 에서 내가 좋아하는 프로그램을 모두 즐길 수 있으므로 뛰어난 확장 프로그램입니다.    ",
  },
  {
    id: 3,
    img: "/avatar-2.png",
    username: " Michael Garcia",
    stars: 5,
    desc: "이것은 방해가 되는 모든 광고를 무료로 차단하므로 최고의 도구입니다. ",
  },
  {
    id: 4,
    img: "/avatar-3.png",
    username: "Benjamin Brown",
    stars: 3,
    desc: "이 도구를 사용하면 내가 좋아하는 콘텐츠를 방해 없이 스트리밍할 수 있으므로 매우 권장되는 도구입니다.",
  },
  {
    id: 5,
    img: "/avatar-4.png",
    username: "James Johnson",
    stars: 4,
    desc: " 광고를 제거할 뿐만 아니라 일부 위험한 웹사이트로부터 브라우저를 보호합니다.",
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
          <h2>리뷰</h2>

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

          <Button text="모든 리뷰 읽기" style={{ with: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
