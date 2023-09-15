import React from "react";
import styles from "@/app/styles/topPoints.module.scss";
import Image from "next/image";

const TopPoints = () => {
  return (
    <div className={styles["top-points"]}>
      <div className={styles.bg1}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="./Ellipse 5.svg"
            alt="bg-image"
          />
        </div>
      </div>
      <div className={styles.bg2}>
        <div className={styles["bg-container"]}>
          <Image
            className={styles["bg-image"]}
            fill={true}
            src="./Ellipse 6.svg"
            alt="bg-image"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <h2>광고 차단기의 핵심 포인트</h2>
          <div className={styles.content}>
            <div className={styles.item}>
              <ul>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/icon-park-outline_ad.svg"
                      alt="icon-park-outline_ad.svg"
                    />
                  </div>
                  이 확장 프로그램을 사용하면 방해가 되는 모든 광고를 제거할 수
                  있습니다.
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/uiw_chrome.svg"
                      alt="/uiw_chrome.svg"
                    />
                  </div>
                  모든 위험한 웹사이트로부터 브라우저를 보호합니다
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/fluent_top-speed-20-filled.svg"
                      alt="/fluent_top-speed-20-filled.svg"
                    />
                  </div>
                  인터넷 해커로부터 데이터를 보호합니다
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/akar-icons_network.svg"
                      alt="/akar-icons_network.svg"
                    />
                  </div>
                  부적절한 콘텐츠로부터 어린이를 보호합니다
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <ul>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/material-symbols_wall-art-rounded.svg"
                      alt="/material-symbols_wall-art-rounded.svg"
                    />
                  </div>
                  Adblock Plus 에 비해 페이지 로딩 속도가 빨라집니다.
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/Group.svg"
                      alt="/Group.svg"
                    />
                  </div>
                  눈에 띄는 구성 요소를 차단합니다.
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/twemoji_top-arrow.svg"
                      alt="/twemoji_top-arrow.svg"
                    />
                  </div>
                  Adblock Opera와는 달리 최고의 기술 지원을 제공합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPoints;
