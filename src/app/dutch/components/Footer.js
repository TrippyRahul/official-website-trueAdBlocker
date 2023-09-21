import React from "react";
import styles from "@/app/styles/footer.module.scss";
import Button from "./Button";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>Echte adblocker</h2>
        <p>
          Adblocker Chrome is de beste extensie waarmee u zonder advertenties
          van uw internetreis kunt genieten. Zeg dus vaarwel tegen opdringerige
          advertenties en neem de volledige controle over uw browser over.
        </p>

        <Button text="toevoegen aan Chrome" icon={true} />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular Searches : </span> youtube no ads, chrome youtube
              adblocker, hulu without ads, pop up blocker chrome, Best ad
              blocker fireforx, twitch adblock firefox, adguard ablocker, Pop-
              up ads, ad blocker google chrome, chrome extension adblock and
              google chrome ad blocker.
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
