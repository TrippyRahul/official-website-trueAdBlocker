"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "Ce bloqueur de publicités est-il sûr à utiliser ?",
    ans: "Oui, ce bloqueur de publicités est sûr à utiliser car nous ne disposons que des données absolument essentielles au fonctionnement de notre site Web et nous ne partageons vos informations personnelles avec personne.",
  },
  {
    id: 2,
    ques: "Puis-je utiliser cette extension sur plusieurs plateformes ?",
    ans: "Oui, vous pouvez utiliser cette extension sur plusieurs plateformes.",
  },
  {
    id: 3,
    ques: "Cet outil est-il gratuit ?",
    ans: "Oui, son utilisation est absolument gratuite. Ainsi, avec cet outil gratuit, bloquez toutes les publicités ennuyeuses qui se trouvent entre les deux",
  },
  {
    id: 4,
    ques: "Comment bloquer les publicités avec cet outil ?",
    ans: "C'est juste un processus simple, il vous suffit de télécharger et d'installer l'extension et de l'ajouter à Chrome",
  },
  {
    id: 5,
    ques: "Quels types de publicités bloque-t-il ?",
    ans: "Il bloque tous les types de publicités ennuyeuses, y compris les publicités pop-up, les bannières publicitaires, les publicités vidéo et bien d'autres.",
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
        <Button text="Ajouter à Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
