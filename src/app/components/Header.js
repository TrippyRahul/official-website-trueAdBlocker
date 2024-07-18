"use client"
import React from "react";
import styles from "../styles/header.module.scss";
import Navbar from "./Navbar";
import Button from "./Button";
import Image from "next/image";
import header from "../../../public/header.png";
import { usePathname } from "next/navigation";
const Header = ({ data }) => {
  const path=usePathname()
  const Heading = data?.title.replace(/\|/g, "<br>");
  const expectedroutes=['/features','/youtube-adblocker','/hulu-adblocker','/spotify-adblocker','/twitch-adblocker']
  return (
    <div className={styles.hero}>
      <Image src={header} className={styles.background} alt="bg" />
      <Image src={data?.element} width={500} height={500} quality={100} className={styles.element} alt="element" />
      <Navbar data={data?.Navbar} />
      <div className={`grid grid-cols-12 ${path=="/features"?'':'items-center'} h-full`}>
        {expectedroutes.includes(path)&&<div className="hidden md:block  col-span-5">
          <Image src={data?.bannerImage} height={300} width={300} quality={100} className={`${path=="/features"?'w-full':'ml-auto w-[80%] '}`}/>
        </div>}
        <div className={`${styles.container} ${!expectedroutes.includes(path)?'col-span-12 h-full' :'pb-32 h-full col-span-12 md:col-span-7'}`}>
          <Button customClass={styles.headerButton} text={data?.button} />
          <p className={styles.subtitle1}>{data?.subHeading}</p>
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: `<span>${Heading}</span>` }}
          ></h1>
          <p className={styles.subtitle2}>
            {data?.subTitle}
            {/* <a href="https://www.trueadblocker.net/">
            {" "}
            Adblocker Chrome Extension{" "}
          </a>
          That Blocks All Annoying Ads. */}
          </p>
          <Button text={data?.button} />
        </div>
      </div>

    </div>
  );
};

export default Header;
