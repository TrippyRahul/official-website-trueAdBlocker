import React from "react";
import styles from "@/app/styles/aboutTrueAdBlocker.module.scss";
import Button from "./Button";
import Image from "next/image";

const AboutTrueAdBlocker = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2>회사 소개</h2>
            <p>
              귀찮은 광고를 모두 차단하는 최고의 브라우저 확장 프로그램입니다.
              또한 제3자 추적기로부터 웹을 보호하고 원치 않는 광고를 모두
              제거합니다. Spotify, YouTube, Hulu, Twitch 등 이제 어떤 방해도
              받지 않고 좋아하는 콘텐츠를 시청할 수 있습니다. 또한 개인 정보
              보호를 강화하고 웹 페이지 속도를 높입니다. 가장 좋은 점은 무료로
              사용할 수 있다는 것입니다. 따라서 확장 프로그램을 다운로드하여
              설치하면 더 빠르고 원활한 경험을 누릴 수 있습니다.
            </p>
          </div>
          <div className={styles.right}>
            <Button text="크롬에 추가" icon={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrueAdBlocker;
