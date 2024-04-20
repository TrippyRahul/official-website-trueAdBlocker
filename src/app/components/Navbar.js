"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Button from "./Button";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [logoRedirectUrl, setlogoRedirectUrl] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const currentLanguage = pathname.substring(1);
    console.log("CURRENT LAG : ", currentLanguage);
    setSelectedLanguage(currentLanguage);
  }, [pathname]);

  useEffect(() => {
    switch (selectedLanguage) {
      case "french":
        setlogoRedirectUrl("/french");
        break;

      case "german":
        setlogoRedirectUrl("/german");
        break;

      case "italian":
        setlogoRedirectUrl("/italian");
        break;

      case "korean":
        setlogoRedirectUrl("/korean");
        break;

      case "polish":
        setlogoRedirectUrl("/polish");
        break;

      case "portuguese":
        setlogoRedirectUrl("/portuguese");
        break;

      case "spanish":
        setlogoRedirectUrl("/spanish");
        break;

      case "turkish":
        setlogoRedirectUrl("/turkish");
        break;

      default:
        setlogoRedirectUrl("/");
        break;
    }
  }, [selectedLanguage]);

  const handleLanguageChange = (language) => {
    if (language === "english") {
      router.push("/");
    } else {
      router.push(`/${language}`);
    }
    setSelectedLanguage(language);
  };
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <svg
              width="6rem"
              height="6rem"
              viewBox="0 0 250 213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.7715 184.722L59.3194 212.974H234.573L249.167 184.722H75.7715Z"
                fill="url(#paint0_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M123.126 94.5537C123.188 94.4461 123.259 94.3456 123.337 94.2527L107.448 66.472L21.1701 212.973H54.1645L123.126 94.5537Z"
                fill="url(#paint1_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.8496 211.533L104.901 62.0194L87.2733 31.199L3.05176e-05 182.54L16.8496 211.533Z"
                fill="url(#paint2_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M104.419 1.4657L188.593 145.604H157.84L110.051 62.0506L110.125 61.9258L109.913 61.809L89.8503 26.7303L104.419 1.4657Z"
                fill="url(#paint3_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M194.687 147.778C194.687 147.375 194.574 146.998 194.376 146.674L108.722 0H144.899L248.915 180.376H78.3026L96.0203 149.951H192.442C193.682 149.951 194.687 148.978 194.687 147.778Z"
                fill="url(#paint4_radial_6_65)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_65"
                  x1="67.3524"
                  y1="199.653"
                  x2="244.352"
                  y2="199.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9B52F0" />
                  <stop offset="1" stopColor="#E65AAA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6_65"
                  x1="116.852"
                  y1="81.6532"
                  x2="35.8525"
                  y2="216.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CD34A3" />
                  <stop offset="1" stopColor="#9B52EF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6_65"
                  x1="95.3524"
                  y1="47.6532"
                  x2="8.85245"
                  y2="198.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E75AAA" />
                  <stop offset="1" stopColor="#9A53F1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_6_65"
                  x1="94.8524"
                  y1="12.1533"
                  x2="172.352"
                  y2="145.153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9C53EF" />
                  <stop offset="1" stopColor="#CF33A1" />
                </linearGradient>
                <radialGradient
                  id="paint4_radial_6_65"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(250.852 182.653) rotate(-180) scale(174 168.326)"
                >
                  <stop stopColor="#CE33A2" />
                  <stop offset="1" stopColor="#9A52EF" />
                </radialGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>Trueadblocker</span>
          </div>
        </Link>
        <div className={styles.linksContainer}>
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className={styles.btn}
          >
            <option value="english">English</option>
            <option value="dutch">Dutch</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="italian">Italian</option>
            <option value="korean">Korean</option>
            <option value="polish">Polish</option>
            <option value="portuguese">Portuguese</option>
            <option value="spanish">Spanish</option>
            <option value="turkish">Turkish</option>
          </select>
          <ul className={styles.links}>
            {/* <li className={styles.link}>
              <Link href="/blogs">Blogs</Link>
            </li> */}
            {/* <li className={styles.link}>
              <Link href="/blogs">All Adblockers</Link>
            </li> */}
            <li className={styles.link}>
              <Link href="/about-us">{data?.title1 || "About Us"}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/contact-us">{data?.title2 || "Contact Us"}</Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/about-us">{data?.title1 || "About Us"}</Link>
            </li>
            <li className={styles.link}>
              <Link href="/contact-us">{data?.title2 || "Contact Us"}</Link>
            </li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button text="Add to Chrome it's free" />
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={styles.btn}
            >
              <option value="english">English</option>
              <option value="dutch">Dutch</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="korean">Korean</option>
              <option value="polish">Polish</option>
              <option value="portuguese">Portuguese</option>
              <option value="spanish">Spanish</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
