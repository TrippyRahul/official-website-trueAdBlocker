import styles from "../styles/features.module.scss";
import background from "../../../public/2.png";
import featuresBackground from "../../../public/features1Background.png";
import Image from "next/image";
const Feature = ({ data }) => {
  return (
    <div className={styles.featureContainer}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={featuresBackground}
        className={styles.featuresBackground}
        alt="featuresBackground"
      />
      <h2 className={styles.heading}>{data?.title}</h2>
      <div className={styles.featureCardContainer}>
        {data?.features.map((feature, index) => (
          <FeatureCard key={index} text={feature.text} icon={feature.icon} />
        ))}
      </div>
    </div>
  );
};

export default Feature;

const FeatureCard = ({ text, icon: Icon }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{Icon}</div>
      <h3 className={styles.featureText}>{text}</h3>
    </div>
  );
};
