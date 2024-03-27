import styles from "../styles/whyTrueAdBlocker.module.scss";
import background from "../../../public/3.png";
import whyTrueAdBlocker1 from "../../../public/whyTrueAdBlocker1.png";
import whyTrueAdBlocker2 from "../../../public/whyTrueAdBlocker2.png";
import Image from "next/image";

const WhyTrueAdBlocker = () => {
  const text = [
    "Stop online advertisements",
    "Maintain your privacy",
    "Save data usage and fasten up the page loading",
    "Keep your regular sites maintain",
    "It is compatible with various browsers",
    "It has the best technical assistance",
  ];
  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} />
      <Image src={whyTrueAdBlocker1} className={styles.whyTrueAdBlocker1} />
      <Image src={whyTrueAdBlocker2} className={styles.whyTrueAdBlocker2} />
      <h2 className={styles.heading}>Why True Adblocker</h2>
      <div className={styles.subContainer}>
        <div className={styles.textContainer}>
          {text.map((data, index) => (
            <p key={index} className={styles.text}>
              {data}
            </p>
          ))}
        </div>
        <div className={styles.trueAdBlocker}>
          <div className={styles.logoContainer}>
            <svg
              width="4rem"
              height="4rem"
              viewBox="0 0 250 213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.7715 184.722L59.3194 212.974H234.573L249.167 184.722H75.7715Z"
                fill="url(#paint0_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M123.126 94.5537C123.188 94.4461 123.259 94.3456 123.337 94.2527L107.448 66.472L21.1701 212.973H54.1645L123.126 94.5537Z"
                fill="url(#paint1_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.8496 211.533L104.901 62.0194L87.2733 31.199L3.05176e-05 182.54L16.8496 211.533Z"
                fill="url(#paint2_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M104.419 1.4657L188.593 145.604H157.84L110.051 62.0506L110.125 61.9258L109.913 61.809L89.8503 26.7303L104.419 1.4657Z"
                fill="url(#paint3_linear_6_65)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M194.687 147.778C194.687 147.375 194.574 146.998 194.376 146.674L108.722 0H144.899L248.915 180.376H78.3026L96.0203 149.951H192.442C193.682 149.951 194.687 148.978 194.687 147.778Z"
                fill="url(#paint4_radial_6_65)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_65"
                  x1="67.3524"
                  y1="199.653"
                  x2="244.352"
                  y2="199.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9B52F0" />
                  <stop offset="1" stopColor="#E65AAA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6_65"
                  x1="116.852"
                  y1="81.6532"
                  x2="35.8525"
                  y2="216.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CD34A3" />
                  <stop offset="1" stopColor="#9B52EF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6_65"
                  x1="95.3524"
                  y1="47.6532"
                  x2="8.85245"
                  y2="198.653"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E75AAA" />
                  <stop offset="1" stopColor="#9A53F1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_6_65"
                  x1="94.8524"
                  y1="12.1533"
                  x2="172.352"
                  y2="145.153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9C53EF" />
                  <stop offset="1" stopColor="#CF33A1" />
                </linearGradient>
                <radialGradient
                  id="paint4_radial_6_65"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(250.852 182.653) rotate(-180) scale(174 168.326)"
                >
                  <stop stopColor="#CE33A2" />
                  <stop offset="1" stopColor="#9A52EF" />
                </radialGradient>
              </defs>
            </svg>
            <h2 className={styles.logoText}>Trueadblocker</h2>
          </div>
          <div className={styles.iconContainer}>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
          </div>
        </div>
        <div className={styles.otherExtension}>
          <div className={styles.logoContainer}>
            <svg
              width="41"
              height="41"
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
            <h2 className={styles.logoText}>Other Extension</h2>
          </div>
          <div className={styles.iconContainer}>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8792 30.583C19.8574 30.583 23.6727 29.0027 26.4858 26.1896C29.2988 23.3766 30.8792 19.5613 30.8792 15.583C30.8792 11.6048 29.2988 7.78945 26.4858 4.97641C23.6727 2.16336 19.8574 0.583008 15.8792 0.583008C11.9009 0.583008 8.08559 2.16336 5.27255 4.97641C2.4595 7.78945 0.87915 11.6048 0.87915 15.583C0.87915 19.5613 2.4595 23.3766 5.27255 26.1896C8.08559 29.0027 11.9009 30.583 15.8792 30.583ZM13.4548 10.5074C13.1011 10.1658 12.6275 9.97685 12.1359 9.98112C11.6443 9.98539 11.174 10.1826 10.8264 10.5302C10.4787 10.8779 10.2815 11.3481 10.2773 11.8398C10.273 12.3314 10.462 12.805 10.8035 13.1586L13.2279 15.583L10.8035 18.0074C10.6244 18.1803 10.4816 18.3872 10.3833 18.616C10.2851 18.8448 10.2333 19.0908 10.2312 19.3398C10.229 19.5887 10.2765 19.8356 10.3707 20.066C10.465 20.2965 10.6042 20.5058 10.7803 20.6819C10.9563 20.8579 11.1657 20.9971 11.3961 21.0914C11.6265 21.1857 11.8734 21.2331 12.1224 21.231C12.3714 21.2288 12.6174 21.1771 12.8462 21.0788C13.0749 20.9806 13.2818 20.8377 13.4548 20.6586L15.8792 18.2343L18.3035 20.6586C18.6572 21.0002 19.1308 21.1892 19.6224 21.1849C20.114 21.1806 20.5843 20.9834 20.9319 20.6358C21.2796 20.2882 21.4768 19.8179 21.481 19.3263C21.4853 18.8346 21.2963 18.361 20.9548 18.0074L18.5304 15.583L20.9548 13.1586C21.2963 12.805 21.4853 12.3314 21.481 11.8398C21.4768 11.3481 21.2796 10.8779 20.9319 10.5302C20.5843 10.1826 20.114 9.98539 19.6224 9.98112C19.1308 9.97685 18.6572 10.1658 18.3035 10.5074L15.8792 12.9318L13.4548 10.5074Z"
                fill="#F21856"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8792 0.583008C12.9124 0.583008 10.0123 1.46274 7.5456 3.11096C5.07887 4.75918 3.15628 7.10186 2.02096 9.84275C0.88565 12.5836 0.5886 15.5996 1.16738 18.5094C1.74616 21.4191 3.17477 24.0918 5.27255 26.1896C7.37034 28.2874 10.0431 29.716 12.9528 30.2948C15.8625 30.8736 18.8785 30.5765 21.6194 29.4412C24.3603 28.3059 26.703 26.3833 28.3512 23.9166C29.9994 21.4498 30.8792 18.5497 30.8792 15.583C30.875 11.606 29.2932 7.79318 26.4811 4.98104C23.669 2.16891 19.8561 0.587208 15.8792 0.583008ZM3.18685 15.583C3.19067 12.218 4.52911 8.99185 6.90855 6.61241C9.05113 4.46983 11.8802 3.17131 14.879 2.93123C15.43 2.88712 15.8792 3.33911 15.8792 3.89183V27.2742C15.8792 27.8269 15.43 28.2789 14.879 28.2348C11.8802 27.9947 9.05113 26.6962 6.90855 24.5536C4.52911 22.1742 3.19067 18.948 3.18685 15.583Z"
                fill="#FFCC00"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8792 0.583008C12.9124 0.583008 10.0123 1.46274 7.5456 3.11096C5.07887 4.75918 3.15628 7.10186 2.02096 9.84275C0.88565 12.5836 0.5886 15.5996 1.16738 18.5094C1.74616 21.4191 3.17477 24.0918 5.27255 26.1896C7.37034 28.2874 10.0431 29.716 12.9528 30.2948C15.8625 30.8736 18.8785 30.5765 21.6194 29.4412C24.3603 28.3059 26.703 26.3833 28.3512 23.9166C29.9994 21.4498 30.8792 18.5497 30.8792 15.583C30.875 11.606 29.2932 7.79318 26.4811 4.98104C23.669 2.16891 19.8561 0.587208 15.8792 0.583008ZM3.18685 15.583C3.19067 12.218 4.52911 8.99185 6.90855 6.61241C9.05113 4.46983 11.8802 3.17131 14.879 2.93123C15.43 2.88712 15.8792 3.33911 15.8792 3.89183V27.2742C15.8792 27.8269 15.43 28.2789 14.879 28.2348C11.8802 27.9947 9.05113 26.6962 6.90855 24.5536C4.52911 22.1742 3.19067 18.948 3.18685 15.583Z"
                fill="#FFCC00"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1057 30.741C19.084 30.741 22.8993 29.1606 25.7123 26.3476C28.5254 23.5345 30.1057 19.7192 30.1057 15.741C30.1057 11.7627 28.5254 7.94741 25.7123 5.13437C22.8993 2.32132 19.084 0.740967 15.1057 0.740967C11.1275 0.740967 7.31216 2.32132 4.49911 5.13437C1.68607 7.94741 0.105713 11.7627 0.105713 15.741C0.105713 19.7192 1.68607 23.5345 4.49911 26.3476C7.31216 29.1606 11.1275 30.741 15.1057 30.741ZM22.0563 13.3166C22.3979 12.963 22.5869 12.4893 22.5826 11.9977C22.5783 11.5061 22.3811 11.0358 22.0335 10.6882C21.6859 10.3405 21.2156 10.1434 20.724 10.1391C20.2323 10.1348 19.7587 10.3238 19.4051 10.6653L13.2307 16.8397L10.8063 14.4153C10.4527 14.0738 9.97908 13.8848 9.48746 13.8891C8.99584 13.8934 8.52557 14.0905 8.17793 14.4382C7.83029 14.7858 7.6331 15.2561 7.62882 15.7477C7.62455 16.2393 7.81354 16.713 8.15509 17.0666L11.9051 20.8166C12.2567 21.1681 12.7335 21.3656 13.2307 21.3656C13.7279 21.3656 14.2047 21.1681 14.5563 20.8166L22.0563 13.3166Z"
                fill="#09B37D"
              />
            </svg>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8792 30.583C19.8574 30.583 23.6727 29.0027 26.4858 26.1896C29.2988 23.3766 30.8792 19.5613 30.8792 15.583C30.8792 11.6048 29.2988 7.78945 26.4858 4.97641C23.6727 2.16336 19.8574 0.583008 15.8792 0.583008C11.9009 0.583008 8.08559 2.16336 5.27255 4.97641C2.4595 7.78945 0.87915 11.6048 0.87915 15.583C0.87915 19.5613 2.4595 23.3766 5.27255 26.1896C8.08559 29.0027 11.9009 30.583 15.8792 30.583ZM13.4548 10.5074C13.1011 10.1658 12.6275 9.97685 12.1359 9.98112C11.6443 9.98539 11.174 10.1826 10.8264 10.5302C10.4787 10.8779 10.2815 11.3481 10.2773 11.8398C10.273 12.3314 10.462 12.805 10.8035 13.1586L13.2279 15.583L10.8035 18.0074C10.6244 18.1803 10.4816 18.3872 10.3833 18.616C10.2851 18.8448 10.2333 19.0908 10.2312 19.3398C10.229 19.5887 10.2765 19.8356 10.3707 20.066C10.465 20.2965 10.6042 20.5058 10.7803 20.6819C10.9563 20.8579 11.1657 20.9971 11.3961 21.0914C11.6265 21.1857 11.8734 21.2331 12.1224 21.231C12.3714 21.2288 12.6174 21.1771 12.8462 21.0788C13.0749 20.9806 13.2818 20.8377 13.4548 20.6586L15.8792 18.2343L18.3035 20.6586C18.6572 21.0002 19.1308 21.1892 19.6224 21.1849C20.114 21.1806 20.5843 20.9834 20.9319 20.6358C21.2796 20.2882 21.4768 19.8179 21.481 19.3263C21.4853 18.8346 21.2963 18.361 20.9548 18.0074L18.5304 15.583L20.9548 13.1586C21.2963 12.805 21.4853 12.3314 21.481 11.8398C21.4768 11.3481 21.2796 10.8779 20.9319 10.5302C20.5843 10.1826 20.114 9.98539 19.6224 9.98112C19.1308 9.97685 18.6572 10.1658 18.3035 10.5074L15.8792 12.9318L13.4548 10.5074Z"
                fill="#F21856"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrueAdBlocker;
