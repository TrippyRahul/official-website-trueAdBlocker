import React from "react";
import styles from "../styles/aboutUs.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const data = [
  {
    id: 1,
    heading: "True AdBlocker for Chrome",
    desc: "While browsing adblock for chrome blocks unnecessary ads. With the chrome browser, you can prevent pop-ups, autoplay, video ads, and advertisements on facebook, YouTube, and your favourite websites. The most trusted adblock for chrome is True AdBlocker, which currently has over 225,000 five star evaluations (and counting). Enjoy quicker browsing and a safer web by downloading True AdBlocker right away!",
  },
  {
    id: 2,
    heading: "What is a True AdBlocker for Chrome?",
    desc: "This adblock for chrome provides protection from third party trackers and is an ad blocking browser extension that means it removes ads from chrome. This adblock for chrome is actually the most frequently used ad blocking Chrome, with over 60 million users. Millions of people use True AdBlocker to block Chrome advertising, speed up website load times, and support privacy protection. This is due to the fact that Adblock for Chrome is easy to use, totally customizable, and significantly enhances your online experience",
  },
  {
    id: 3,
    heading:
      "Block Ads and Protect Yourself Online with adblock chrome extension",
    desc: "Installing True AdBlocker will give you the best Adblock for Chrome and the ability to prevent annoying and intrusive ads from anywhere you browse. Adblock for chrome disables advertisements from all of your favourite websites, including Facebook, Google, YouTube, and more. Additionally, it shields your browser against malware and prevents third parties from accessing your browsing history and private data.",
  },
  {
    id: 4,
    heading: "This adblock for youtube chrome",
    desc: "Ad blocker youtube is one of the most visited websites on the internet, YouTube also has some of the most annoying advertisements. You won't have to watch pre-roll advertisements or any other YouTube advertisements after installing block youtube ads for chrome. Say goodbye to pre-roll, mid-roll, and even the adverts in the 'Up Next' sidebar when you install this youtube ablocker for chrome. You may entirely focus on watching YouTube without any interruptions by using True AdBlocker or adblocker chrome extension.",
  },
  {
    id: 5,
    heading: "YouTube Ad Blocking Options",
    desc: "So you want to keep supporting content producers while blocking YouTube advertisements from adblock chrome extension. True AdBlocker makes it possible for you to accomplish that. Only True AdBlocker YouTube adblock for chrome provides a straightforward choice for enabling adverts on your preferred channels. You can support your preferred content providers with a few clicks. (while keeping ads blocked everywhere else). It is simple to provide support by allowing adverts on your favourite channels without having to manually pause and unpause ad blocking every time you visit.",
  },
  {
    id: 6,
    heading: "Twitch adblock for chrome",
    desc: "True AdBlocker is the best option to block ads on Twitch. Tv. LIke no other adblock for chrome on the market offers Twitch ad blocking. Simply install  Adblocker for chrome or twitch adblock extension, launch the True AdBlocker menu, then choose on the general options tab to 'Enable hiding of streaming ads on Twitch.' Many Twitch adverts that play mid-stream will be hidden and muted if this functionality is enabled. Thus, this is the best adblock for twitch. Twitch adblock firefox is a browser extension that add to your firefox browser and blocks all unnecessary ads, popups, banner and video ads.",
  },
  {
    id: 7,
    heading: "Ads and Pop-Up Blocker",
    desc: "Adblock google chrome or chrome extensions adblock is one of the most unpleasant types of online advertising is pop-ups or pop-up advertising. According to some estimates, pop-up ads have been annoying people for 25 years and this is the best ad blocker chrome, making them one of the oldest. Pop-ups are any advertisements that appear in front of the information you are attempting to read; this is how they got their name. One of the most aggressive and annoying forms of advertising are pop-up windows, which you may permanently prevent using this adblock for chrome. They have also developed into equally unpleasant variations of pop-ups, pop-unders, and pop-ups with sound or video. Thus, this is the best google chrome adblocker or adguard adblocker.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles.about}>
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
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
