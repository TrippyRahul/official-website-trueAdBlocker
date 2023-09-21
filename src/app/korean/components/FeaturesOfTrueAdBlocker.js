import React from "react";
import styles from "@/app/styles/featuresOfTrueAdBlocker.module.scss";
import Image from "next/image";

const FeaturesOfTrueAdBlocker = () => {
  return (
    <div className={styles.featuresOfTrueAdBlocker}>
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
      <div className={styles.container}>
        <h2>특징</h2>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                adblock extension 으로 빠른 탐색을 즐겨보세요
              </span>
              <span className={styles["item-text"]}>
                온라인 여정을 방해하는 방해가 되는 광고를 제거하고 팝업, 배너,
                비디오 광고 등을 거부하세요. 이러한 광고를 차단하면 웹페이지
                속도가 더욱 빨라집니다.
              </span>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="/BlockAd.svg"
                alt="block-ad-logo"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.item}>
              <span className={styles["item-title"]}>
                Twitch adblock 으로 웹 브라우징을 보호하세요
              </span>
              <span className={styles["item-text"]}>
                광고 차단기 Safari와 비교할 때 이 확장 프로그램은 악성 코드를
                유포하는 것으로 알려진 모든 위험한 사이트를 피하는 데 도움이
                됩니다. 이렇게 하면 해커가 귀하의 온라인 활동을 추적하는 것도
                막을 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOfTrueAdBlocker;
