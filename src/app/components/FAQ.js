"use client";
import React, { useState } from "react";
import styles from "../styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import background from "../../../public/3.png";
import faqBackground from "../../../public/faqBackground.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const questions = [
  {
    id: 1,
    ques: "What is Trueadblocker and how does it work?",
    ans: "It is the best extension that is designed to improve your online experience by eliminating all unwanted ads. It also protects your privacy and saves your data usage. The best part is it is free to use. ",
  },
  {
    id: 2,
    ques: "Does this extension block all types of ads?",
    ans: "Yes, this adblocker Chrome extension blocks all types of ads including banner ads, pop-ups, video ads, and many more.",
  },
  {
    id: 3,
    ques: "Can this extension affect your web browsing speed?    ",
    ans: "It can speed up your page loading by blocking all the unwanted ads.",
  },
  {
    id: 4,
    ques: "How to whitelist websites in Trueadblocker?",
    ans: "You can whitelist websites by adding them to the allowed list in its settings then it will permit all the ads on those selected sites.",
  },
  {
    id: 5,
    ques: "Is using this adblocker Chrome extension legal?",
    ans: "Yes, this extension is absolutely legal and safe to use.",
  },
  {
    id: 6,
    ques: "Is this extension compatible with other websites?",
    ans: "This adblocker Chrome extension is compatible with most of the major browsers including Google and Firefox.",
  },
  {
    id: 7,
    ques: "How can I install Trueadblocker on my web browser?",
    ans: "It is very simple as you just need to search for the extension or you can visit our website and download the extension from there.",
  },
  {
    id: 8,
    ques: "Is it safe to use Trueadblocker on multiple sites?",
    ans: "Yes, it is absolutely safe to the extension on multiple browsers including Google Chrome and Firefox.",
  },
  {
    id: 9,
    ques: "Is there any free version of Trueadblocker?",
    ans: "Yes, our extension is free to use. You can block all types of ads for free and enhance your online experience.",
  },
  {
    id: 10,
    ques: "Why Trueadblocker is better than other adblockers?",
    ans: "The majority of adblockers can not get rid of unnecessary ads, but by installing our extension you can block all types of hidden ads that may ruin your experience. It not only blocks ads but also protects your browser from dangerous websites.",
  },
];

const limitedQuestions = questions.slice(0, 5);

const FrequentlyAskedQuestion = () => {
  const pathname = usePathname();
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.frequently}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={faqBackground}
        className={styles.faqBackground}
        alt="faqBackground"
      />
      <div className={styles.container}>
        <h2 className={styles.heading}>FAQs</h2>
        {pathname === "/" ? (
          <ol>
            {limitedQuestions.map((question) => (
              <li key={question.id} onClick={() => toggleAnswer(question.id)}>
                <div className={styles.question}>
                  <p>{question.id}</p>
                  <p className={styles.questionHeading}>{question.ques}</p>
                  <div className={styles["image-container"]}>
                    {showAnswer ? (
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 0C10.9288 0 8.41543 0.762437 6.27759 2.1909C4.13975 3.61935 2.47351 5.64968 1.48957 8.02512C0.505633 10.4006 0.248189 13.0144 0.749797 15.5362C1.25141 18.0579 2.48953 20.3743 4.30762 22.1924C6.1257 24.0105 8.44208 25.2486 10.9638 25.7502C13.4856 26.2518 16.0995 25.9944 18.4749 25.0104C20.8503 24.0265 22.8807 22.3603 24.3091 20.2224C25.7376 18.0846 26.5 15.5712 26.5 13C26.4964 9.5533 25.1256 6.24882 22.6884 3.81163C20.2512 1.37445 16.9467 0.00363977 13.5 0ZM19.2075 15.7075C19.1146 15.8005 19.0043 15.8742 18.8829 15.9246C18.7615 15.9749 18.6314 16.0008 18.5 16.0008C18.3686 16.0008 18.2385 15.9749 18.1171 15.9246C17.9957 15.8742 17.8854 15.8005 17.7925 15.7075L13.5 11.4137L9.20751 15.7075C9.1146 15.8004 9.0043 15.8741 8.8829 15.9244C8.76151 15.9747 8.6314 16.0006 8.50001 16.0006C8.36861 16.0006 8.2385 15.9747 8.11711 15.9244C7.99572 15.8741 7.88542 15.8004 7.79251 15.7075C7.69959 15.6146 7.62589 15.5043 7.57561 15.3829C7.52533 15.2615 7.49945 15.1314 7.49945 15C7.49945 14.8686 7.52533 14.7385 7.57561 14.6171C7.62589 14.4957 7.69959 14.3854 7.79251 14.2925L12.7925 9.2925C12.8854 9.19952 12.9957 9.12576 13.1171 9.07544C13.2385 9.02512 13.3686 8.99921 13.5 8.99921C13.6314 8.99921 13.7615 9.02512 13.8829 9.07544C14.0043 9.12576 14.1146 9.19952 14.2075 9.2925L19.2075 14.2925C19.3005 14.3854 19.3742 14.4957 19.4246 14.6171C19.4749 14.7385 19.5008 14.8686 19.5008 15C19.5008 15.1314 19.4749 15.2615 19.4246 15.3829C19.3742 15.5043 19.3005 15.6146 19.2075 15.7075Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 3C13.9288 3 11.4154 3.76244 9.27759 5.1909C7.13975 6.61935 5.47351 8.64968 4.48957 11.0251C3.50563 13.4006 3.24819 16.0144 3.7498 18.5362C4.25141 21.0579 5.48953 23.3743 7.30762 25.1924C9.1257 27.0105 11.4421 28.2486 13.9638 28.7502C16.4856 29.2518 19.0995 28.9944 21.4749 28.0104C23.8503 27.0265 25.8807 25.3603 27.3091 23.2224C28.7376 21.0846 29.5 18.5712 29.5 16C29.4964 12.5533 28.1256 9.24882 25.6884 6.81163C23.2512 4.37445 19.9467 3.00364 16.5 3ZM22.2075 14.7075L17.2075 19.7075C17.1146 19.8005 17.0043 19.8742 16.8829 19.9246C16.7615 19.9749 16.6314 20.0008 16.5 20.0008C16.3686 20.0008 16.2385 19.9749 16.1171 19.9246C15.9957 19.8742 15.8854 19.8005 15.7925 19.7075L10.7925 14.7075C10.6049 14.5199 10.4994 14.2654 10.4994 14C10.4994 13.7346 10.6049 13.4801 10.7925 13.2925C10.9801 13.1049 11.2346 12.9994 11.5 12.9994C11.7654 12.9994 12.0199 13.1049 12.2075 13.2925L16.5 17.5863L20.7925 13.2925C20.8854 13.1996 20.9957 13.1259 21.1171 13.0756C21.2385 13.0253 21.3686 12.9994 21.5 12.9994C21.6314 12.9994 21.7615 13.0253 21.8829 13.0756C22.0043 13.1259 22.1146 13.1996 22.2075 13.2925C22.3004 13.3854 22.3741 13.4957 22.4244 13.6171C22.4747 13.7385 22.5006 13.8686 22.5006 14C22.5006 14.1314 22.4747 14.2615 22.4244 14.3829C22.3741 14.5043 22.3004 14.6146 22.2075 14.7075Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {showAnswer === question.id && (
                  <div
                    className={`${styles.answer} ${
                      showAnswer === question.id ? styles.active : ""
                    }`}
                  >
                    <p>{question.ans}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        ) : (
          <ol>
            {questions.map((question) => (
              <li key={question.id} onClick={() => toggleAnswer(question.id)}>
                <div className={styles.question}>
                  <p>{question.id}</p>
                  <p className={styles.questionHeading}>{question.ques}</p>
                  <div className={styles["image-container"]}>
                    {showAnswer ? (
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 0C10.9288 0 8.41543 0.762437 6.27759 2.1909C4.13975 3.61935 2.47351 5.64968 1.48957 8.02512C0.505633 10.4006 0.248189 13.0144 0.749797 15.5362C1.25141 18.0579 2.48953 20.3743 4.30762 22.1924C6.1257 24.0105 8.44208 25.2486 10.9638 25.7502C13.4856 26.2518 16.0995 25.9944 18.4749 25.0104C20.8503 24.0265 22.8807 22.3603 24.3091 20.2224C25.7376 18.0846 26.5 15.5712 26.5 13C26.4964 9.5533 25.1256 6.24882 22.6884 3.81163C20.2512 1.37445 16.9467 0.00363977 13.5 0ZM19.2075 15.7075C19.1146 15.8005 19.0043 15.8742 18.8829 15.9246C18.7615 15.9749 18.6314 16.0008 18.5 16.0008C18.3686 16.0008 18.2385 15.9749 18.1171 15.9246C17.9957 15.8742 17.8854 15.8005 17.7925 15.7075L13.5 11.4137L9.20751 15.7075C9.1146 15.8004 9.0043 15.8741 8.8829 15.9244C8.76151 15.9747 8.6314 16.0006 8.50001 16.0006C8.36861 16.0006 8.2385 15.9747 8.11711 15.9244C7.99572 15.8741 7.88542 15.8004 7.79251 15.7075C7.69959 15.6146 7.62589 15.5043 7.57561 15.3829C7.52533 15.2615 7.49945 15.1314 7.49945 15C7.49945 14.8686 7.52533 14.7385 7.57561 14.6171C7.62589 14.4957 7.69959 14.3854 7.79251 14.2925L12.7925 9.2925C12.8854 9.19952 12.9957 9.12576 13.1171 9.07544C13.2385 9.02512 13.3686 8.99921 13.5 8.99921C13.6314 8.99921 13.7615 9.02512 13.8829 9.07544C14.0043 9.12576 14.1146 9.19952 14.2075 9.2925L19.2075 14.2925C19.3005 14.3854 19.3742 14.4957 19.4246 14.6171C19.4749 14.7385 19.5008 14.8686 19.5008 15C19.5008 15.1314 19.4749 15.2615 19.4246 15.3829C19.3742 15.5043 19.3005 15.6146 19.2075 15.7075Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 3C13.9288 3 11.4154 3.76244 9.27759 5.1909C7.13975 6.61935 5.47351 8.64968 4.48957 11.0251C3.50563 13.4006 3.24819 16.0144 3.7498 18.5362C4.25141 21.0579 5.48953 23.3743 7.30762 25.1924C9.1257 27.0105 11.4421 28.2486 13.9638 28.7502C16.4856 29.2518 19.0995 28.9944 21.4749 28.0104C23.8503 27.0265 25.8807 25.3603 27.3091 23.2224C28.7376 21.0846 29.5 18.5712 29.5 16C29.4964 12.5533 28.1256 9.24882 25.6884 6.81163C23.2512 4.37445 19.9467 3.00364 16.5 3ZM22.2075 14.7075L17.2075 19.7075C17.1146 19.8005 17.0043 19.8742 16.8829 19.9246C16.7615 19.9749 16.6314 20.0008 16.5 20.0008C16.3686 20.0008 16.2385 19.9749 16.1171 19.9246C15.9957 19.8742 15.8854 19.8005 15.7925 19.7075L10.7925 14.7075C10.6049 14.5199 10.4994 14.2654 10.4994 14C10.4994 13.7346 10.6049 13.4801 10.7925 13.2925C10.9801 13.1049 11.2346 12.9994 11.5 12.9994C11.7654 12.9994 12.0199 13.1049 12.2075 13.2925L16.5 17.5863L20.7925 13.2925C20.8854 13.1996 20.9957 13.1259 21.1171 13.0756C21.2385 13.0253 21.3686 12.9994 21.5 12.9994C21.6314 12.9994 21.7615 13.0253 21.8829 13.0756C22.0043 13.1259 22.1146 13.1996 22.2075 13.2925C22.3004 13.3854 22.3741 13.4957 22.4244 13.6171C22.4747 13.7385 22.5006 13.8686 22.5006 14C22.5006 14.1314 22.4747 14.2615 22.4244 14.3829C22.3741 14.5043 22.3004 14.6146 22.2075 14.7075Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {showAnswer === question.id && (
                  <div
                    className={`${styles.answer} ${
                      showAnswer === question.id ? styles.active : ""
                    }`}
                  >
                    <p>{question.ans}</p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        )}
        {pathname === "/" ? (
          <div className={styles.buttonContainer}><Link className={styles.button} href="/faq">
            More Questions
          </Link></div>
        ) : null}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
