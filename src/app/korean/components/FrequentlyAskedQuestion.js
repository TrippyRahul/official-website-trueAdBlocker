"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "이 확장 프로그램을 사용해도 안전한가요?",
    ans: "예, 이 확장 프로그램은 웹사이트를 운영하는 데 꼭 필요한 데이터만 보유하고 있으며 귀하의 개인 정보를 누구와도 공유하지 않으므로 안전하게 사용할 수 있습니다.",
  },
  {
    id: 2,
    ques: "여러 플랫폼에서 이 확장 프로그램을 사용할 수 있나요?",
    ans: "예, 여러 플랫폼에서 이 확장을 사용할 수 있습니다.",
  },
  {
    id: 3,
    ques: "이 도구는 무료로 사용할 수 있나요?",
    ans: "예, 이 기능은 완전히 무료로 사용할 수 있습니다. 따라서 이 무료 도구를 사용하면 중간에 나타나는 성가신 광고를 모두 차단할 수 있습니다.",
  },
  {
    id: 4,
    ques: "이 도구를 사용하여 광고를 어떻게 차단하나요?",
    ans: "이는 단순한 과정으로, 확장 프로그램을 다운로드하여 설치하고 Chrome에 추가하기만 하면 됩니다.",
  },
  {
    id: 5,
    ques: " 어떤 유형의 광고를 차단하나요?",
    ans: "팝업 광고, 배너 광고, 비디오 광고 등 모든 유형의 성가신 광고를 차단합니다.",
  },
];

const FrequentlyAskedQuestion = () => {
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
      <div className={styles.container}>
        <h2>FAQ</h2>
        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    className={styles["image"]}
                    fill={true}
                    src="/addLogo.svg"
                    alt="add-logo"
                  />
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

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button text="크롬에 추가" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
