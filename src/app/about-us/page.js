import styles from "../styles/aboutUs.module.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const data = [
  {
    id: 1,
    heading: "True AdBlocker for Chrome",
    desc: "This adblocker Chrome extension blocks all unnecessary ads. By simply downloading this extension you can prevent pop-ups, autoplay, video ads, and advertisements on several websites. This is the most trusted adblock and thousands of users using this for many years.",
  },
  {
    id: 2,
    heading: "What is a True AdBlocker?",
    desc: "It also protects your third-party trackers and saves your data usage. Its main motive is to give you the best online experience and speed up your page loading. It also supports privacy protection. It is very simple to use and is totally customizable enhancing your online experience. By installing this adblocker Chrome extension, will block all the disturbing ads automatically from every website that you use. This adblock Chrome disables advertisements from all your websites including Google, youtube, spotify, Hulu, and many more. Not only this, but it also shields your browser against malware and prevents third-party trackers.",
  },
  {
    id: 3,
    heading: "Youtube adblock Chrome",
    desc: "YouTube is the most visited website around the world and we all love watching videos on YouTube. But there are annoying ads that spoil our moment while watching any drama. So in that case Youtbe adblock chrome works like magic and blocks all types of ads that appear on your screen.",
  },
  {
    id: 4,
    heading: "Twitch adblock Chrome",
    desc: "For game streaming, twitch is the best extension but there are ads that can ruin our streaming. To remove all those ads, just download this adblocker Chrome extension and enjoy your favorite video.",
  },
  {
    id: 5,
    heading: "Adblock browser chrome",
    desc: "This extension works on both Google and Firefox. It is very easy to install. It has been helping people for the last ten years. It is compatible with various browser extensions and has the best quality. So, what are you waiting for? Hurry up and download the extension now and enjoy your content freely.",
  },
];

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <Navbar />
      <div className={styles.container}>
        <h2>About Us</h2>
        <div className={styles.content}>
          {data.map((item) => (
            <div className={styles.item} key={item.id}>
              <h4>{item.heading}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
