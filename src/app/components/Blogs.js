import styles from "../styles/blogs.module.scss";
import background from "../../../public/3.png";
import blogsBackground from "../../../public/blogsBackground.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} />
      <Image src={blogsBackground} className={styles.blogsBackground} />
      <h2 className={styles.heading}>Blogs</h2>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return <div className={styles.card}></div>;
};

export default Benefits;
