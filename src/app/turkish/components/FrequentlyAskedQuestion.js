"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "Bu uzantının kullanımı güvenli mi?",
    ans: "Evet, yalnızca web sitemizi çalıştırmak için kesinlikle gerekli olan verilere sahip olduğumuz ve kişisel bilgilerinizi kimseyle paylaşmadığımız için bu uzantının kullanımı güvenlidir.",
  },
  {
    id: 2,
    ques: "Bu uzantıyı birden fazla platformda kullanabilir miyim?",
    ans: "Evet, bu uzantıyı birden fazla platformda kullanabilirsiniz.",
  },
  {
    id: 3,
    ques: "Bu aracın kullanımı ücretsiz mi?",
    ans: "Evet, bunu kullanmak kesinlikle ücretsizdir. Yani bu ücretsiz araçla araya giren tüm sinir bozucu reklamları engelleyin.",
  },
  {
    id: 4,
    ques: "Bu araçla reklamları nasıl engellerim?",
    ans: "Bu sadece basit bir işlemdir, yalnızca uzantıyı indirip yüklemeniz ve Chrome'a eklemeniz yeterlidir.",
  },
  {
    id: 5,
    ques: "Hangi tür reklamları engeller?",
    ans: "Pop-up reklamlar, banner reklamlar, video reklamlar ve çok daha fazlası dahil olmak üzere her türlü sinir bozucu reklamı engeller. ",
  },
  {
    id: 6,
    ques: "Adblock nedir?",
    ans: "Tarayıcınızdaki her türlü reklamı durdurmanıza yardımcı olan bir yazılımdır. Ayrıca gizliliğinizi artıracak ve sizi kötü amaçlı yazılım web sitelerinden koruyacaktır. ",
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
        <h2>SSS&apos;ler</h2>
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
        <Button text="Chrome'a ​​ekle" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
