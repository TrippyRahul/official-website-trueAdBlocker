import React from "react";
import styles from "../styles/topPoints.module.scss";
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
        <div className={styles.top}>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles["image"]}
                fill={true}
                src="./subway_time-1.svg"
                alt="subway_time-1"
              />
            </div>
            <h3>Boost your speed</h3>
            <p>
              Experience a quicker Internet while improving page load times{" "}
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles.image}
                fill={true}
                src="/healthicons_fingerprint-outline.svg"
                alt="healthicons_fingerprint-outline"
              />
            </div>
            <h3>Maintain Your Privacy</h3>
            <p>Avoid letting online ads follow you.</p>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles.image}
                fill={true}
                src="/jam_task-list.svg"
                alt="jam_task-list"
              />
            </div>
            <h3>Eliminate Distractions </h3>
            <p>Remove pop-ups, banners, and video advertising</p>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles.image}
                fill={true}
                src="/eva_cube-fill.svg"
                alt="eva_cube-fill.svg"
              />
            </div>
            <h3>Assistance Websites</h3>
            <p>
              By permitting Acceptable Ads, you may promote a robust online
              environment for websites.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles["image-container"]}>
              <Image
                className={styles.image}
                fill={true}
                src="/ant-design_control-outlined.svg"
                alt="ant-design_control-outlined.svg"
              />
            </div>
            <h3>Parenting control </h3>
            <p>
              By using parenting control, you can restrict such adults websites.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <h2>TOP POINTS FOR TRUE ADBLOCKER</h2>
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
                  blocks all advertisements
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
                  Eliminates unwanted web components
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
                  reduces traffic and improves page load
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
                  Works with apps and browsers
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/material-symbols_wall-art-rounded.svg"
                      alt="/material-symbols_wall-art-rounded.svg"
                    />
                  </div>
                  keeps the site&apos;s design and functionality intact
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <ul>
                <li>
                  {" "}
                  <h3>ADD-FREE AND SUCURE WEB BROWSING</h3>
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
                  Banner, pop-ups and video adverts are removed using the
                  extension.
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
                  This extension offers defence against dangerous websites.
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/healthicons_fingerprint-outline.svg"
                      alt="/healthicons_fingerprint-outline.svg"
                    />
                  </div>
                  Your data is protected from internet trackers by this
                  extension.
                </li>
                <li>
                  <div className={styles["image-container"]}>
                    <Image
                      className={styles.image}
                      fill={true}
                      src="/mdi_children-toy.svg"
                      alt="/mdi_children-toy.svg"
                    />
                  </div>
                  Children are protected from inappropriate content
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
