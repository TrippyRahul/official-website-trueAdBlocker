"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: " Questa estensione è sicura da usare?",
    ans: "Sì, questa estensione è sicura da usare poiché disponiamo solo dei dati assolutamente essenziali per gestire il nostro sito Web e non condividiamo le tue informazioni personali con nessuno.",
  },
  {
    id: 2,
    ques: "Posso utilizzare questa estensione su più piattaforme?",
    ans: "Sì, puoi utilizzare questa estensione su più piattaforme.",
  },
  {
    id: 3,
    ques: "Questo strumento è gratuito?",
    ans: "Sì, è assolutamente gratuito. Quindi, con questo strumento gratuito, blocca tutte le fastidiose pubblicità che si frappongono.",
  },
  {
    id: 4,
    ques: "Come posso bloccare gli annunci con questo strumento?",
    ans: "È solo un processo semplice, devi solo scaricare e installare l'estensione e aggiungerla a Chrome.",
  },
  {
    id: 5,
    ques: " Quali tipi di annunci blocca?",
    ans: "Blocca tutti i tipi di annunci fastidiosi, inclusi annunci pop-up, banner pubblicitari, annunci video e molti altri",
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
        <h2>Domande frequenti</h2>
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
        <Button text="Aggiungi a Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
