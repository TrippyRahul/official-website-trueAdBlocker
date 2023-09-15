import React from "react";
import { AiFillChrome } from "react-icons/ai";
import Navbar from "./Navbar";
import Button from "./Button";
import styles from "@/app/styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.subtitle1}>최선의 선택</h2>
        <h1 className={styles.heading}>진정한 광고 차단기</h1>
        <p className={styles.subtitle2}>
          Adblock Chrome은 광고 없이 인터넷 여행을 즐길 수 있도록 도와주는
          최고의 확장 프로그램입니다. 이제 침입적인 광고와 작별하고 브라우저를
          완전히 제어하세요.
        </p>

        <Button text="크롬에 추가" icon={true} />
      </div>
    </div>
  );
};

export default Header;
Header;
