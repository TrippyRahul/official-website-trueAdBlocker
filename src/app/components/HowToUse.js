"use client";
import styles from "../styles/howToUse.module.scss";
import Button from "./Button";
import Image from "next/image";
import background from "../../../public/3.png";
import { useEffect, useState } from "react";

const HowToUse = () => {
  const steps = [
    {
      id: "1",
      text: "First, you need to search for the extension or you can visit its official website",
    },
    {
      id: "2",
      text: "Install the ad blocker Google Chrome",
    },
    {
      id: "3",
      text: "Right-click the extension to the toolbar",
    },
    {
      id: "4",
      text: "Now add to Chrome and successfully turn on adblocking ",
    },
    {
      id: "5",
      text: "Watch your favorite video freely as it will block all the disturbing ads",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0); // Initialize currentStep state

  const handleNextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep === steps.length - 1 ? 0 : prevStep + 1
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextStep();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} alt="bg"/>
      <div className={styles.wrapper} onClick={handleNextStep}>
        <h2 className={styles.heading}>How to use Trueadblocker</h2>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {currentStep + 1}
            {".  "}
            {steps[currentStep].text}
          </p>
        </div>
        <Button text="Block All Ads Now - it's Free" />
      </div>
    </div>
  );
};

export default HowToUse;
