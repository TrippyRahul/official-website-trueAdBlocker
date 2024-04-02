import styles from "../styles/privacy.module.scss";
import background from "../../../public/3.png";
import Image from "next/image";
const Privacy = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} alt="bg" />
      <h2 className={styles.heading}>{data?.title}</h2>
      <h3 className={styles.subHeading}>{data?.subTitle}</h3>
      <div className={styles.cardContainer}>
        {data?.privacy.map((data, index) => (
          <PrivacyCard
            key={index}
            title={data?.title}
            text={data?.text}
            icon={data?.icon}
          />
        ))}
      </div>
    </div>
  );
};

const PrivacyCard = ({ text, icon: Icon, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{Icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default Privacy;
