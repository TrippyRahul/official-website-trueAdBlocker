import styles from "../styles/blogs.module.scss";
import background from "../../../public/3.png";
import blogsBackground from "../../../public/blogsBackground.png";
import Image from "next/image";

const Blogs = ({showbg}) => {
  return (
    <div className={styles.container}>
      {showbg && <Image src={background} className={styles.background} alt="bg" />}
      <Image
        src={blogsBackground}
        className={styles.blogsBackground}
        alt="blogsBackground"
      />
      <h2 className={styles.heading}>Blogs</h2>
      <div className={styles.cardContainer}>
        <Card src="/blog1.png" text="How does ad blocking work" link="/blogs/Howdoesadblockingwork" subtext="Ad blocking stops advertisements from loading on any website you visit. Ads of any kind, anyplace. Ad blockers are not only magic, unlike what some people may think." />
        <Card src="/blog2.png" text="TrueAdblocker – Adblock extension for Internet Explorer" subtext="Microsoft Windows operating systems come with Internet Explorer, which was once the most widely used web browser and is currently ranked second globally." link="/blogs/AdblockextensionforInternetExplorer" />
        <Card src="/blog3.png" text="YouTube's Battle Against Ad Blockers Is Full Of New Twist" subtext="Reddit users were the first to notice that YouTube is stepping up its campaign against ad blockers." link="/blogs/YouTubesBattleAgainstAdBlockersIsFullOfNewTwist" />

      </div>
    </div>
  );
};

const Card = ({ src, text, link, subtext }) => {
  return (
    <a href={link}>
      <div className={styles.card}>
        <div className={styles.blogImage} style={{ backgroundImage: `url(${src})` }} />
        <div className={styles.text}>
          <h3>{text}</h3>
          <p>{subtext}</p>
        </div>
      </div>
    </a>)
};

export default Blogs;
