"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: " Is deze extensie veilig te gebruiken?",
    ans: "Ja, deze extensie is veilig te gebruiken, omdat we alleen de gegevens hebben die absoluut essentieel zijn om onze website te runnen en we uw persoonlijke gegevens met niemand delen.",
  },
  {
    id: 2,
    ques: " Kan ik deze extensie op meerdere platforms gebruiken?",
    ans: "Ja, u kunt deze extensie op meerdere platforms gebruiken.",
  },
  {
    id: 3,
    ques: "Is deze tool gratis te gebruiken?",
    ans: "Ja, dit is geheel gratis te gebruiken. Met deze gratis tool blokkeer je dus alle vervelende advertenties die ertussen komen. ",
  },
  {
    id: 4,
    ques: "Hoe blokkeer ik advertenties met deze tool?",
    ans: "Het is slechts een eenvoudig proces, u hoeft alleen de extensie te downloaden en te installeren en deze aan Chrome toe te voegen. ",
  },
  {
    id: 5,
    ques: " Welke soorten advertenties worden geblokkeerd?",
    ans: "Het blokkeert alle soorten vervelende advertenties, waaronder pop-upadvertenties, banneradvertenties, videoadvertenties en nog veel meer. ",
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
        <h2>Veelgestelde vragen</h2>
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
        <Button text="toevoegen aan Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
