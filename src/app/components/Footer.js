"use client"
import React from "react";
import styles from "../styles/footer.module.scss";
import Link from "next/link";
import background from "../../../public/3.png";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Footer = ({ Footerdata, data }) => {
  const expectedroutes = ['/','/features', '/youtube-adblocker', '/hulu-adblocker', '/spotify-adblocker', '/twitch-adblocker','/dutch','/french','/german','/italian','/korean','/polish','/portuguese','/spanish','/turkish']
 const path=usePathname()
  const footer = {
    title: "Get it free and block ads",
    subTitle:
      "This is the best extension that blocks all kinds of ads for free including banner ads, video ads, pop-ups, and many more.",
    subText:
      "Ad-free freedom with Trueadblocker Get ready to use this ad-free extension now",
    button1: "Add to Chrome it's free",
    button2: "About Us",
    button3: "Contact Us",
    popularSearch: [
      {
        data: "adblocker chrome extension",
        link: "https://www.trueadblocker.net/",
      },
      {
        data: "adblock plus chrome",
        link: "https://www.trueadblocker.net/korean",
      },
      {
        data: "ad blocker google chrome",
        link: "https://www.trueadblocker.net/dutch",
      },
      {
        data: "blocker chrome",
        link: "https://www.trueadblocker.net/italian",
      },
      {
        data: "ad blocker in chrome",
        link: "https://www.trueadblocker.net/germany",
      },
      {
        data: "hulu adblock",
        link: "https://www.huluadblocker.net/",
      },
      {
        data: "Spotify adblock",
        link: "https://www.spotifyadblocker.co/",
      },
      {
        data: "youtube adblocker",
        link: "https://www.youtubeadblocker.net/",
      },
      {
        data: "pop up blocker chrome",
        link: "https://www.trueadblocker.net/polish",
      },
      {
        data: "Best ad blocker firefox",
        link: "https://www.trueadblocker.net/french",
      },
      {
        data: "Best ad blocker firefox",
        link: "https://www.trueadblocker.net/french",
      },
      {
        data: "ad blocker google chrome",
        link: "https://www.trueadblocker.net/turkish",
      },
      {
        data: "chrome extension",
        link: "https://www.trueadblocker.net/spanish",
      },
      {
        data: "chrome ad blocker",
        link: "https://www.trueadblocker.net/portuguese",
      },
    ],
    popularKeywords:
      "advertisement blocker chrome, abp plus chrome, adb plus chrome, browser chrome, youtube no ads, hulu without ads, adguard ablocker and Pop-up ads",
    links: [
      {
        name: "Contact Us",
        link: "/contact-us",
      },
      {
        name: "EULA",
        link: "/terms",
      },
      {
        name: "Terms of service",
        link: "/terms",
      },
      {
        name: " Privacy Policy",
        link: "/privacy-policy",
      },

    ],
  };
  return (
    <div className={styles.footer}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={Footerdata?.footerBackground}
        className={styles.footerbackground}
        alt="footerbackground"
        width={500}
        height={500}
        quality={100}
      />
      <div className={styles.container}>
        <h2 className={styles.heading}>{data?.title || footer.title}</h2>
        <p className={styles.subHeading}>{data?.subTitle || footer.subTitle}</p>
        <p className={styles.subText}>{data?.subText || footer.subText}</p>
        <Button text={data?.button1 || footer.button1}></Button>
        <div className={styles.buttonContainer}>
          <Link href="/about-us" className={styles.btn}>
            {data?.button2 || footer.button2}
          </Link>
          <Link href="/contact-us" className={styles.btn}>
            {data?.button3 || footer.button3}
          </Link>
          <Link href="/blogs" className={styles.btn}>
            Blogs
          </Link>
          {!expectedroutes.includes(path)&&<>
            <Link href="/youtube-adblocker" className={styles.btn}>
              Youtube Adblocker
            </Link>
            <Link href="/hulu-adblocker" className={styles.btn}>
              Hulu Adblocker
            </Link>
            <Link href="/spotify-adblocker" className={styles.btn}>
              Spotify Adblocker
            </Link>
            <Link href="/twitch-adblocker" className={styles.btn}>
              Twitch Adblocker
            </Link>
          </>}
        </div>
        <hr className={styles.line} />
        <div className={styles.popularSearch}>
          <span className={styles.heading}>Popular searchs: </span>
          {data?.popularSearch ? (
            <span>
              {data?.popularSearch.map((data, index) => (
                <>
                  <span key={index}>
                    <a href={data.link}>
                      {data.data}
                    </a>
                  </span>
                  <span>{data?.popularKeywords}</span>
                </>
              ))}
            </span>
          ) : (
            <span>
              {footer?.popularSearch.map((data, index) => (
                <span key={index}>
                  <a href={data?.link}>
                    {data?.data}
                  </a>
                  {index === footer?.popularSearch.length - 1 ? ' ' : ' , '}
                </span>
              ))}
            </span>
          )}
          {data?.popularKeywords ? (
            <span>
              {data?.popularKeywords}
            </span>
          ) : null}
        </div>

        <div className={styles.content}>
          <ul className={styles.contentLinkContainer}>
            {data ? (
              <>
                {data?.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {footer.links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </>
            )}
          </ul>
          <ul className={styles.socials}>
            <li>
              <a href="https://www.facebook.com/people/True-Ad-Blocker/61557642626103/">
                <svg
                  width="35%"
                  height="35%"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.631 44.7956C36.5735 43.2707 44.9968 33.8735 44.9968 22.5066H45C45 10.0769 34.9261 0 22.5 0C10.0739 0 0 10.0769 0 22.5066C0 33.7079 8.18211 42.9995 18.8945 44.7247C20.0674 44.9139 21.2719 45.0117 22.4984 45.0117C23.561 45.0117 24.6078 44.9376 25.631 44.7956ZM25.5883 17.7789V12.876L25.5899 12.8745C25.5899 11.7028 26.5406 10.7519 27.7119 10.7519H31.6532V5.04004H25.6215C25.6159 5.04004 25.6108 5.04083 25.6057 5.04162C25.6006 5.04241 25.5954 5.0432 25.5899 5.0432V5.04004C21.8678 5.04004 18.8519 8.05838 18.8519 11.7801V17.7789H13.26V24.3833H18.8519V39.5286C20.0248 39.7178 21.2293 39.8156 22.4558 39.8156C23.5184 39.8156 24.5652 39.7414 25.5883 39.5995V24.3833H30.6915L31.6516 17.7789H25.5883Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/block_ads_/">
                <svg
                  width="35%"
                  height="35%"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.448 0H22.5504C34.9481 0 44.9984 10.0533 44.9984 22.4546V22.5571C44.9984 34.9584 34.9481 45.0117 22.5504 45.0117H22.448C10.0503 45.0117 0 34.9584 0 22.5571V22.4546C0 10.0533 10.0503 0 22.448 0ZM15.5381 9.1582H29.4619C33.3085 9.1582 36.4379 12.2885 36.4379 16.1363V28.8783C36.4379 32.7261 33.3085 35.8564 29.4619 35.8564H15.5381C11.6914 35.8564 8.56201 32.7261 8.56201 28.8783V16.1363C8.56201 12.2885 11.6914 9.1582 15.5381 9.1582ZM15.5381 11.6199C13.0488 11.6199 11.023 13.6463 11.023 16.1363V28.8783C11.023 31.3684 13.0488 33.3948 15.5381 33.3948H29.4619C31.9512 33.3948 33.977 31.3684 33.977 28.8783V16.1363C33.977 13.6463 31.9512 11.6199 29.4619 11.6199H15.5381ZM22.5002 28.9964C26.0773 28.9964 28.9891 26.0853 28.9891 22.5055C28.9891 18.9258 26.0788 16.0147 22.5002 16.0147C18.9215 16.0147 16.0112 18.9258 16.0112 22.5055C16.0112 26.0853 18.9215 28.9964 22.5002 28.9964ZM22.5002 18.4779C24.7215 18.4779 26.5282 20.2852 26.5282 22.5071C26.5282 24.7291 24.7215 26.5363 22.5002 26.5363C20.2789 26.5363 18.4722 24.7291 18.4722 22.5071C18.4722 20.2852 20.2789 18.4779 22.5002 18.4779ZM31.338 15.3147C31.338 16.2798 30.5529 17.0636 29.5896 17.0636C28.6248 17.0636 27.8413 16.2798 27.8413 15.3147C27.8413 14.3496 28.6248 13.5658 29.5896 13.5658C30.5544 13.5658 31.338 14.3496 31.338 15.3147Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@Trueadblocker?si=VfnzS30sKM-K8sE5">
                <svg
                  width="35%"
                  height="35%"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.4338 0C34.8245 0 44.8691 10.0476 44.8691 22.442C44.8691 34.8363 34.8245 44.8839 22.4338 44.8839C10.0431 44.8839 -0.00158691 34.8363 -0.00158691 22.442C-0.00158691 10.0476 10.0431 0 22.4338 0ZM34.6059 13.2118C36.0043 14.2022 36.3842 16.0867 36.5608 17.7914C36.884 20.9312 36.8872 24.1025 36.5719 27.2438C36.4426 28.5385 36.2234 29.9057 35.3705 30.8882C34.5255 31.8628 33.2722 32.2397 31.9574 32.3816C31.289 32.4541 30.6047 32.4667 29.9489 32.4652C24.8331 32.462 19.7173 32.4573 14.6031 32.4526C12.9919 32.451 11.2388 32.4005 9.99656 31.3771C8.59504 30.2211 8.30339 28.2168 8.1883 26.4033C8.03223 23.9179 8.01804 21.4247 8.14889 18.9379C8.21983 17.5722 8.34279 16.1734 8.93083 14.9386C9.35491 14.0508 10.0596 13.2528 10.9598 12.8334C11.8704 12.4088 12.8178 12.4184 13.7907 12.4282C13.938 12.4297 14.0858 12.4312 14.2342 12.4312C15.5849 12.4297 16.9356 12.4285 18.2862 12.4273C19.6377 12.4261 20.9892 12.4249 22.3407 12.4234C23.4648 12.4227 24.5893 12.4216 25.7137 12.4205C27.3994 12.4187 29.0851 12.417 30.7703 12.417C32.0993 12.4155 33.5229 12.4439 34.6059 13.2118ZM19.3831 18.0374V26.8448L27.0072 22.4403L19.3831 18.0374Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright © {new Date().getFullYear()} Truead blocker, All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
