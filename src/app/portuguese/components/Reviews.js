import React from "react";
import styles from "@/app/styles/reviews.module.scss";
import Image from "next/image";
import Button from "./Button";

const data = [
  {
    id: 1,
    img: "/avatar.svg",
    username: "Jese Leo",
    stars: 5,
    desc: "Esta é uma ferramenta incrível que evita todos os anúncios interrompidos enquanto você navega na internet.",
  },
  {
    id: 2,
    img: "/avatar-1.png",
    username: "Peter Smith",
    stars: 4,
    desc: "É uma extensão excelente, pois agora posso curtir todos os meus programas favoritos no YouTube sem anúncios indesejados.",
  },
  {
    id: 3,
    img: "/avatar-2.png",
    username: " Michael Garcia",
    stars: 5,
    desc: "Esta é a melhor ferramenta, pois bloqueia gratuitamente todos os anúncios perturbadores",
  },
  {
    id: 4,
    img: "/avatar-3.png",
    username: "Benjamin Brown",
    stars: 3,
    desc: "Esta é uma ferramenta altamente recomendada, pois com ela posso transmitir meu conteúdo favorito sem qualquer perturbação.",
  },
  {
    id: 5,
    img: "/avatar-4.png",
    username: "James Johnson",
    stars: 4,
    desc: "Ele não apenas elimina anúncios, mas também protege nosso navegador de alguns sites perigosos",
  },
];

const Reviews = () => {
  return (
    <>
      <div className={styles.reviews}>
        <div className={styles.bg1}>
          <div className={styles["bg-container"]}>
            <Image
              fill={true}
              src="./Ellipse 10.svg"
              alt="Ellipse"
              className={styles["bg-image"]}
            />
          </div>
        </div>
        <div className={styles.bg2}>
          <div className={styles["bg-container"]}>
            <Image
              fill={true}
              src="./Ellipse 9.svg"
              alt="Ellipse"
              className={styles["bg-image"]}
            />
          </div>
        </div>
        <div className={styles.bg3}>
          <div className={styles["bg-container"]}>
            <Image
              fill={true}
              src="./Ellipse 9.svg"
              alt="Ellipse"
              className={styles["bg-image"]}
            />
          </div>
        </div>
        <div className={styles.container}>
          <h2>Avaliações</h2>

          <div className={styles.cards}>
            {data.map((item) => {
              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.profile}>
                    <div className={styles["image-container"]}>
                      <Image
                        src={item.img}
                        alt="profile"
                        className={styles["image"]}
                        fill={true}
                      />
                    </div>
                    <h3>{item.username}</h3>
                  </div>
                  <div className={styles.rating}>
                    {Array.from({ length: item.stars }, (_, i) => (
                      <span key={i}>
                        <div className={styles["image-container"]}>
                          <Image
                            className={styles.image}
                            fill={true}
                            src="/stars.svg"
                            alt="star"
                          />
                        </div>
                      </span>
                    ))}
                  </div>
                  <div className={styles.text}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Button text="LEIA TODAS AS AVALIAÇÕES" style={{ with: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
