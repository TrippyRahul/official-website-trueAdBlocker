"use client";

import React, { useState } from "react";
import styles from "@/app/styles/frequentlyAskedQuestions.module.scss";
import Image from "next/image";
import Button from "./Button";

const questions = [
  {
    id: 1,
    ques: "Esta extensão é segura para uso?",
    ans: "Sim, esta extensão é segura para uso, pois temos apenas os dados absolutamente essenciais para o funcionamento do nosso site e não compartilhamos suas informações pessoais com ninguém.",
  },
  {
    id: 2,
    ques: " Posso usar esta extensão em várias plataformas?",
    ans: "Sim, você pode usar esta extensão em várias plataformas.",
  },
  {
    id: 3,
    ques: "Esta ferramenta é gratuita?",
    ans: "Sim, é totalmente gratuito. Portanto, com esta ferramenta gratuita, bloqueie todos os anúncios irritantes que aparecem no meio.",
  },
  {
    id: 4,
    ques: "Como faço para bloquear anúncios com esta ferramenta?",
    ans: "É um processo simples, você só precisa baixar e instalar a extensão e adicioná-la ao Chrome.",
  },
  {
    id: 5,
    ques: " Que tipos de anúncios ele bloqueia?",
    ans: "Ele bloqueia todos os tipos de anúncios irritantes, incluindo anúncios pop-up, banners, anúncios em vídeo e muito mais.r",
  },
  {
    id: 6,
    ques: " Como desativar o Adblock?",
    ans: "É muito fácil e simples. Vá para o lado direito da sua extensão, clique na barra de ferramentas e clique no botão parar",
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
        <h2>Perguntas frequentes</h2>
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
        <Button text="adicionar ao Chrome" icon={true} />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
