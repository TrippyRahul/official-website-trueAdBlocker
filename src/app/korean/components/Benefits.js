import React from "react";
import styles from "@/app/styles/benefits.module.scss";
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
            <h3>YouTube용 광고 차단 으로 중단 없는 동영상을 경험하세요</h3>
            <p>
              중간에 나오는 피싱 광고 없이 좋아하는 프로그램과 영화를 자유롭게
              스트리밍하세요. 따라서 번거로운 광고 없이 마음껏 즐기시고
              YouTube와 Hulu에서 광고를 차단하세요.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <h3>Spotify 광고 차단기로 Spotify 경험을 향상하세요</h3>
            <p>
              이 애드온을 사용하면 광고의 방해 없이 좋아하는 음악이나 재생
              목록을 즐길 수 있습니다. 원치 않는 광고를 모두 차단하려면 확장
              프로그램을 다운로드하여 설치하세요.
            </p>
          </div>
          <div className={styles.item}>
            <h3> 데이터 보호</h3>
            <p>
              이 확장 프로그램을 다운로드하면 귀하의 데이터가 인터넷
              추적기로부터 보호되며 당사는 귀하의 정보를 저장하거나 유출하지
              않습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
