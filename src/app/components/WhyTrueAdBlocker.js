import styles from "../styles/whyTrueAdBlocker.module.scss";
import background from "../../../public/3.png";
import whyTrueAdBlocker1 from "../../../public/whyTrueAdBlocker1.png";
import Image from "next/image";

const WhyTrueAdBlocker = ({ data }) => {
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} alt="bg" />
      <Image
        src={whyTrueAdBlocker1}
        className={styles.whyTrueAdBlocker1}
        alt="whyTrueAdBlocker1"
      />

      <h2 className={styles.heading}>{data?.title}</h2>
      <div className={styles.subContainer}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.col}></div>
            <div className={styles.col}>
              <div className={styles.heading}>
                <div className={styles.logo}>
                  <svg
                    width="15%"
                    height="15%"
                    viewBox="0 0 48 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4946 35.3367L11.3474 40.7411H44.8727L47.6646 35.3367H14.4946Z"
                      fill="url(#paint0_linear_529_160)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5535 18.0877C23.5655 18.0671 23.579 18.0479 23.5938 18.0301L20.5543 12.7158L4.0498 40.741H10.3615L23.5535 18.0877Z"
                      fill="url(#paint1_linear_529_160)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.22325 40.4654L20.0671 11.8641L16.695 5.96826L0 34.9193L3.22325 40.4654Z"
                      fill="url(#paint2_linear_529_160)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.975 0.280273L36.0771 27.8534H30.1941L21.0524 11.8699L21.0665 11.846L21.026 11.8237L17.188 5.11329L19.975 0.280273Z"
                      fill="url(#paint3_linear_529_160)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.2428 28.2692C37.2428 28.1922 37.2212 28.1201 37.1835 28.0582L20.7981 0H27.7185L47.6164 34.5051H14.979L18.3683 28.685H36.8133C37.0505 28.685 37.2428 28.4988 37.2428 28.2692Z"
                      fill="url(#paint4_radial_529_160)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_529_160"
                        x1="12.8841"
                        y1="38.193"
                        x2="46.7435"
                        y2="38.193"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9B52F0" />
                        <stop offset="1" stopColor="#E65AAA" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_529_160"
                        x1="22.3535"
                        y1="15.6199"
                        x2="6.85848"
                        y2="41.4449"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#CD34A3" />
                        <stop offset="1" stopColor="#9B52EF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_529_160"
                        x1="18.2405"
                        y1="9.11589"
                        x2="1.69343"
                        y2="38.0016"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E75AAA" />
                        <stop offset="1" stopColor="#9A53F1" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_529_160"
                        x1="18.1449"
                        y1="2.32476"
                        x2="32.9703"
                        y2="27.7671"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9C53EF" />
                        <stop offset="1" stopColor="#CF33A1" />
                      </linearGradient>
                      <radialGradient
                        id="paint4_radial_529_160"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(47.9871 34.9408) rotate(-180) scale(33.2855 32.2001)"
                      >
                        <stop stopColor="#CE33A2" />
                        <stop offset="1" stopColor="#9A52EF" />
                      </radialGradient>
                    </defs>
                  </svg>
                  <span>Trueadblocker</span>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.heading}>
                <div className={styles.logo}>
                  <svg
                    width="15%"
                    height="15%"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.6361 22.962C40.6361 21.5109 40.1351 20.2845 39.133 19.2825C38.131 18.2804 36.9046 17.7794 35.4535 17.7794V9.48734C35.4535 8.34719 35.0477 7.37135 34.2357 6.55933C33.4237 5.74731 32.4479 5.34155 31.3077 5.34155H23.0156V12.1301H28.6655V28.1452H35.454C36.9051 28.1452 38.1315 27.6446 39.1335 26.6426C40.1356 25.6405 40.6366 24.4142 40.6366 22.963L40.6361 22.962Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M17.8324 0.158463C16.3812 0.158463 15.1549 0.659486 14.1529 1.66153C13.1508 2.66358 12.6498 3.88993 12.6498 5.34108H4.3577C3.21755 5.34108 2.24171 5.74684 1.42969 6.55886C0.617672 7.37088 0.211914 8.34671 0.211914 9.48687V12.1291H23.0155V5.34057C23.0155 3.88942 22.5145 2.66307 21.5125 1.66103C20.5104 0.658982 19.2841 0.157959 17.8329 0.157959L17.8324 0.158463Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.0651 33.7946H6.99994C7.68292 33.3969 8.33566 32.6812 8.95312 32.158C11.7042 29.8273 13.2194 26.5616 13.2194 22.9616C13.2194 19.3617 11.7042 16.0965 8.95312 13.7653C8.33566 13.2421 7.68292 12.5264 6.99994 12.1287H0.211426V17.3642C1.86974 17.3642 3.32089 17.8909 4.56488 18.9449C5.80887 19.9989 6.43087 21.3376 6.43087 22.9616C6.43087 24.5857 5.80887 25.9244 4.56488 26.9784C3.32089 28.0324 1.86974 28.5591 0.211426 28.5591V36.4368C0.211426 37.577 0.617184 38.5528 1.4292 39.3649C2.24122 40.1769 3.21706 40.5826 4.35722 40.5826H12.0646V33.7941L12.0651 33.7946Z"
                      fill="#34A853"
                    />
                    <path
                      d="M28.6647 33.7944H12.0649V40.5829H31.3069C32.4471 40.5829 33.4234 40.1771 34.235 39.3651C35.047 38.5531 35.4527 37.5773 35.4527 36.4371V28.145H28.6642V33.7949L28.6647 33.7944Z"
                      fill="#FBBC04"
                    />
                  </svg>

                  <span>Other Extensions</span>
                </div>
              </div>
            </div>
          </div>
          {data?.text.map((data, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>
                <p>{data?.title}</p>
              </div>
              <div className={styles.col}>
                <div className={styles.icon}>{data.icon1}</div>
              </div>
              <div className={styles.col}>
                <div className={styles.icon}>{data.icon2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTrueAdBlocker;
