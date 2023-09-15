"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "Ist die Verwendung dieser Erweiterung sicher?",
    ans: "Ja, die Verwendung dieser Erweiterung ist sicher, da wir nur über die Daten verfügen, die für den Betrieb unserer Website unbedingt erforderlich sind, und wir Ihre persönlichen Daten nicht an Dritte weitergeben.",
  },
  {
    id: 2,
    ques: "Kann ich diese Erweiterung auf mehreren Plattformen verwenden?",
    ans: "Ja, Sie können diese Erweiterung auf mehreren Plattformen verwenden.",
  },
  {
    id: 3,
    ques: "Ist die Nutzung dieses Tools kostenlos?",
    ans: "Ja, die Nutzung ist absolut kostenlos. Blockieren Sie also mit diesem kostenlosen Tool alle lästigen Werbeanzeigen, die dazwischenkommen. ",
  },
  {
    id: 4,
    ques: "Wie blockiere ich Werbung mit diesem Tool?",
    ans: "Es ist nur ein einfacher Vorgang. Sie müssen lediglich die Erweiterung herunterladen, installieren und zu Chrome hinzufügen. ",
  },
  {
    id: 5,
    ques: " Welche Arten von Werbung werden blockiert?",
    ans: "Es blockiert alle Arten lästiger Werbung, einschließlich Pop-up-Anzeigen, Banner-Anzeigen, Video-Anzeigen und viele mehr",
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
        <h2>FAQs</h2>
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
        <Button text="Zu Chrome hinzufügen" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
