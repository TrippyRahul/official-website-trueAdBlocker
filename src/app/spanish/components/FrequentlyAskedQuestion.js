"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "¿Es segura esta extensión?",
    ans: "Sí, esta extensión es segura de usar ya que solo tenemos los datos que son absolutamente esenciales para ejecutar nuestro sitio web y no compartimos su información personal con nadie.",
  },
  {
    id: 2,
    ques: "¿Puedo usar esta extensión en varias plataformas?",
    ans: "Sí, puedes utilizar esta extensión en múltiples plataformas.",
  },
  {
    id: 3,
    ques: " ¿Esta herramienta es de uso gratuito?",
    ans: "Sí, su uso es absolutamente gratuito. Entonces, con esta herramienta gratuita, bloquea todos los anuncios molestos que se interponen.",
  },
  {
    id: 4,
    ques: "¿Cómo bloqueo anuncios con esta herramienta?",
    ans: "Es solo un proceso simple, solo necesitas descargar e instalar la extensión y agregarla a Chrome. ",
  },
  {
    id: 5,
    ques: " ¿Qué tipo de anuncios bloquea?",
    ans: "Bloquea todo tipo de anuncios molestos, incluidos anuncios emergentes, anuncios publicitarios, anuncios de vídeo y muchos más. ",
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
        <h2>Preguntas frecuentes</h2>
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
        <Button text="Añadir a Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
