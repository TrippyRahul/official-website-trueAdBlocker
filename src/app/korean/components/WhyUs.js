import React from "react";
import styles from "@/app/styles/whyus.module.scss";
import Button from "./Button";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className={styles["why-us"]}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>브라우저에서 추적을 끄고 광고를 중단하고 싶으십니까?</h2>
          <p>
            추적을 비활성화하고 광고를 차단하는 방법을 찾고 있다면 제대로
            찾아오셨습니다. 이 애드온을 사용하면 온라인 활동을 완벽하게 제어할
            수 있으며 브라우저 사용을 망칠 수 있는 짜증나고 원치 않는 광고를
            모두 제거할 수도 있습니다.
          </p>
        </div>
        <div className={styles.right}>
          <h2>원치 않는 광고 없이 인터넷을 사용하세요</h2>
          <ul>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./uil_youtube.svg"
                  alt="uil_youtube"
                />
              </div>
              더 빠른 인터넷 서핑 및 원치 않는 광고 차단
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./mdi_twitch.svg"
                  alt="mdi_twitch"
                />
              </div>
              좋아하는 음악을 즐기려면 YouTube adblock 으로 팝업 광고를
              차단하세요.
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./fontisto_spotify.svg"
                  alt="fontisto_spotify"
                />
              </div>
              광고 차단기 Google Chrome 으로 속도를 높이세요 .{" "}
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./simple-icons_hulu.svg"
                  alt="icons_hulu"
                />
              </div>
              개인 정보를 유지하세요{" "}
            </li>
            <li>
              <div className={styles["image-container"]}>
                <Image
                  className={styles["image"]}
                  fill={true}
                  src="./simple-icons_adblock.svg"
                  alt="icons_adblock"
                />
              </div>
              Ad Blocker Free는 오픈 소스 프로그램입니다.
            </li>
          </ul>
          <Button text="크롬에 추가" icon={true} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
