"use client";
import React from "react";
import styles from "../styles/usage.module.scss";
import Image from "next/image";
import background from "../../../public/3.png";
import usage1 from "../../../public/usage1.png";
import usage2 from "../../../public/usage2.png";
import { useState } from "react";

const Usage = ({ data }) => {
  
  const subTitle = data?.subTitle.replace(/\|/g, "<br>");
  return (
    <div className={styles.usageContainer}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image src={usage1} className={styles.usage1} alt="usage1" />
      <Image src={usage2} className={styles.usage2} alt="usage2" />
      <h2 className={styles.heading}>{data?.title}</h2>
      {data?.expTitle&&<div className={styles.experienceCard}>
        <h2 className={styles.heading}>{data?.expTitle}</h2>
        <p className={styles.text}>{data?.expText}</p>
      </div>}
      {data?.titlePara&&<p className={'text-center w-[70%] text-[1.8rem]'}>{data?.titlePara}</p>}
      <h3
        className={styles.subHeading}
        dangerouslySetInnerHTML={{ __html: `<span>${subTitle}</span>` }}
      />
       <div className={styles.UsageCardContainer}>
        {data?.usage.map((data, index) => (
          <UsageCard
            key={index}
            text={data.text}
            icon={data.icon}
            title={data?.title}
            gradient={data.gradient}
          />
        ))}
      </div>
      {data?.CardbottomPara&&<p className={'text-center pt-10 z-50 w-[60%] text-[2rem]'}>{data?.CardbottomPara}</p>}
    </div>
  );
};



const UsageCard = ({ text, icon: Icon, title, gradient }) => {
  return (
    <div className={styles.usageCard} style={{ background: gradient }}>
      <div className={styles.usageIcon}>{Icon}</div>
      <h3 className={styles.usageHeading}>{title}</h3>
      <p className={styles.usagetext}>{text}</p>
    </div>
  );
};

export default Usage;
