"use client";
import styles from "../styles/howToUse.module.scss";
import Button from "./Button";
import Image from "next/image";
import background from "../../../public/3.png";
import { useEffect, useState } from "react";

const HowToUse = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(0); // Initialize currentStep state

  const handleNextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep === data?.steps.length - 1 ? 0 : prevStep + 1
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
      <Image src={background} className={styles.background} alt="bg" />
      <div className={styles.wrapper} onClick={handleNextStep}>
        <h2 className={styles.heading}>{data?.title}</h2>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {currentStep + 1}
            {".  "}
            {data?.steps[currentStep].text}
          </p>
        </div>
        <Button text={data?.button} />
      </div>
    </div>
  );
};

export default HowToUse;
