import styles from "../styles/howToUse.module.scss";
import Button from "./Button";
import Image from "next/image";
import background from "../../../public/3.png";


const HowToUse = () => {
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} />
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>How to use Trueadblocker</h2>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            First, you need to search for the extension or you can visit its
            official website
          </p>
        </div>
        <Button text="Block All Ads Now - it's Free" />
      </div>
    </div>
  );
};

export default HowToUse;
