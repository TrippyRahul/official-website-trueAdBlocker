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
      <div className={styles.experienceCard}>
        <h2 className={styles.heading}>{data?.expTitle}</h2>
        <p className={styles.text}>{data?.expText}</p>
      </div>
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
            index={index}
          />
        ))}
      </div>
    </div>
  );
};



const UsageCard = ({ text, icon: Icon, title, gradient, index }) => {
  // Local state to manage the expanded/collapsed state of each card
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state of the current card
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.usageCard} ${isExpanded ? "group hover:h-[250px] transition-all" : "h-[120px] transition-all"}  cursor-pointer overflow-hidden`}
      style={{ background: gradient }}
      onMouseEnter={toggleExpansion}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`${styles.usageIcon} mx-auto`}>{Icon}</div>
      <h3 className={`${styles.usageHeading} text-center`}>{title}</h3>
      <p className={`${styles.usagetext}  ${isExpanded ? "block transition-all pt-4" : "h-[120px] hidden"} text-center`}>{text}</p>
    </div>
  );
};


export default Usage;
