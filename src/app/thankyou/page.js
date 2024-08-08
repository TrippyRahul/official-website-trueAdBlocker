import Image from "next/image";
import React from "react";
import styles from "../styles/header.module.scss";
import header from "../../../public/header.png";

const page = () => {
  return (
    <div style={{ background: "rgba(27, 27, 27, 1)" }} className="h-screen">
      <div className="border-b-[2px] fixed top-0 z-50  py-4 flex justify-center w-[90%] mx-[5%] border-white">
        <div className="flex items-center space-x-4">
          <video
            src="/video/thankyou.mp4"
            loop
            autoPlay
            muted
            className="w-[70px]"
          />
          <div className="text-white text-4xl tracking-widest">
            Trueadblocker
          </div>
        </div>
      </div>
      <div className={styles.hero}>
        <Image src={header} className={styles.background} alt="bg" />
        <Image
          src={"/6.png"}
          width={500}
          height={500}
          quality={100}
          className={styles.element}
          alt="element"
        />
      </div>
      <Image
        src={"/feature.png"}
        width={500}
        height={500}
        quality={100}
        className={
          "absolute left-0 bottom-14 z-50 w-[33%] lg:block hidden -rotate-90"
        }
        alt="element"
      />
      <div className="absolute w-full top-[55%] space-y-[18rem] md:space-y-[25rem] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
        <div className="text-center text-[4.5rem] font-semibold text-white  leading-snug tracking-widest">
          THANK YOU FOR ADDING <br />
          TRUEADBLOCKER CHROME EXTENSION.{" "}
        </div>
        <div className="text-center text-white text-5xl  tracking-widest">
          Now Enjoy Unlimited Ad Free Content.
        </div>
      </div>
    </div>
  );
};

export default page;
