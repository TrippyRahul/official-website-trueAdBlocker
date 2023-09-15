"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "Czy korzystanie z tego rozszerzenia jest bezpieczne?",
    ans: "Tak, korzystanie z tego rozszerzenia jest bezpieczne, ponieważ posiadamy tylko te dane, które są absolutnie niezbędne do działania naszej witryny i nie udostępniamy nikomu Twoich danych osobowych. ",
  },
  {
    id: 2,
    ques: "Czy mogę używać tego rozszerzenia na kilku platformach?",
    ans: "Tak, możesz używać tego rozszerzenia na wielu platformach.",
  },
  {
    id: 3,
    ques: " Czy korzystanie z tego narzędzia jest bezpłatne?",
    ans: "Tak, korzystanie z tej aplikacji jest całkowicie bezpłatne. Dzięki temu bezpłatnemu narzędziu zablokuj wszystkie irytujące reklamy, które pojawiają się pomiędzy nimi. ",
  },
  {
    id: 4,
    ques: "Jak blokować reklamy za pomocą tego narzędzia?",
    ans: "To prosty proces, wystarczy pobrać i zainstalować rozszerzenie oraz dodać je do przeglądarki Chrome. To najlepsze blokowanie reklam.",
  },
  {
    id: 5,
    ques: "Jakie typy reklam blokuje?",
    ans: "Blokuje wszelkiego rodzaju irytujące reklamy, w tym reklamy wyskakujące, banery reklamowe, reklamy wideo i wiele innych.",
  },
  {
    id: 6,
    ques: "Jak wyłączyć blokadę reklam?",
    ans: "Jest to bardzo łatwe i proste. Przejdź na prawą stronę rozszerzenia, kliknij pasek narzędzi i kliknij przycisk zatrzymania. ",
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
        <h2>Często zadawane pytania</h2>
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
        <Button text="Dodaj do Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
