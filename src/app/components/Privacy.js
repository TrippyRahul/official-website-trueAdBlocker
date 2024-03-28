import styles from "../styles/privacy.module.scss";
import background from "../../../public/3.png";
import Image from "next/image";
const Privacy = () => {
  const privacy = [
    {
      title: "Clear History",
      icon: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.625 17.4998C30.6251 20.0634 29.8744 22.5709 28.4656 24.7127C27.0569 26.8545 25.0517 28.5369 22.6978 29.5521C20.3438 30.5673 17.744 30.8709 15.2194 30.4255C12.6949 29.9801 10.356 28.8051 8.4916 27.0455C8.38711 26.9468 8.30309 26.8284 8.24434 26.6972C8.18559 26.566 8.15326 26.4245 8.1492 26.2808C8.14513 26.1371 8.16942 25.994 8.22066 25.8596C8.2719 25.7253 8.3491 25.6024 8.44785 25.4979C8.64728 25.2868 8.92238 25.1637 9.21262 25.1555C9.35633 25.1514 9.49944 25.1757 9.63377 25.2269C9.7681 25.2782 9.89102 25.3554 9.99551 25.4541C11.5592 26.9294 13.523 27.9111 15.6414 28.2766C17.7599 28.6421 19.9391 28.3752 21.9067 27.5093C23.8744 26.6434 25.5432 25.2168 26.7047 23.4078C27.8662 21.5989 28.4689 19.4877 28.4374 17.3382C28.406 15.1887 27.7418 13.0961 26.5278 11.3219C25.3138 9.54773 23.6039 8.17063 21.6118 7.36268C19.6196 6.55473 17.4335 6.35177 15.3267 6.77915C13.2199 7.20652 11.2857 8.24529 9.76582 9.76566C9.2832 10.2537 8.8293 10.7336 8.3877 11.2108L10.6176 13.4448C10.7707 13.5977 10.875 13.7927 10.9173 14.005C10.9596 14.2173 10.9379 14.4373 10.8551 14.6373C10.7722 14.8372 10.6319 15.0081 10.4519 15.1283C10.2718 15.2485 10.0602 15.3125 9.84375 15.3123H4.375C4.08492 15.3123 3.80672 15.1971 3.6016 14.992C3.39648 14.7869 3.28125 14.5087 3.28125 14.2186V8.74984C3.28108 8.53339 3.34514 8.32176 3.46531 8.14173C3.58548 7.96171 3.75636 7.82139 3.95632 7.73853C4.15629 7.65568 4.37634 7.63402 4.58862 7.67629C4.8009 7.71856 4.99586 7.82287 5.14883 7.97601L6.83594 9.66585C7.27617 9.1887 7.73008 8.70882 8.21133 8.22347C10.0462 6.38546 12.3851 5.13313 14.9321 4.625C17.479 4.11687 20.1194 4.37578 22.5192 5.36896C24.9189 6.36213 26.97 8.04493 28.4129 10.2043C29.8559 12.3638 30.6257 14.9027 30.625 17.4998ZM17.5 9.84359C17.2099 9.84359 16.9317 9.95882 16.7266 10.1639C16.5215 10.3691 16.4062 10.6473 16.4062 10.9373V17.4998C16.4062 17.6887 16.455 17.8743 16.548 18.0386C16.6409 18.203 16.7749 18.3405 16.9367 18.4377L22.4055 21.719C22.5286 21.7929 22.6652 21.8419 22.8073 21.8631C22.9494 21.8844 23.0942 21.8774 23.2336 21.8426C23.373 21.8078 23.5042 21.7459 23.6197 21.6604C23.7352 21.5749 23.8327 21.4675 23.9066 21.3444C23.9806 21.2212 24.0296 21.0847 24.0508 20.9426C24.072 20.8005 24.065 20.6556 24.0302 20.5162C23.9955 20.3768 23.9336 20.2456 23.8481 20.1301C23.7626 20.0147 23.6552 19.9172 23.532 19.8432L18.5938 16.8805V10.9373C18.5938 10.6473 18.4785 10.3691 18.2734 10.1639C18.0683 9.95882 17.7901 9.84359 17.5 9.84359Z"
            fill="white"
          />
        </svg>
      ),
      text: "Clear all your browsing history of every website that you visit.",
    },
    {
      title: "Delete Cookies",
      icon: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 7C28 7.26522 27.8946 7.51957 27.7071 7.70711C27.5196 7.89464 27.2652 8 27 8H26V26C26 26.5304 25.7893 27.0391 25.4142 27.4142C25.0391 27.7893 24.5304 28 24 28H8C7.46957 28 6.96086 27.7893 6.58579 27.4142C6.21071 27.0391 6 26.5304 6 26V8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7ZM11 4H21C21.2652 4 21.5196 3.89464 21.7071 3.70711C21.8946 3.51957 22 3.26522 22 3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H11C10.7348 2 10.4804 2.10536 10.2929 2.29289C10.1054 2.48043 10 2.73478 10 3C10 3.26522 10.1054 3.51957 10.2929 3.70711C10.4804 3.89464 10.7348 4 11 4Z"
            fill="white"
          />
        </svg>
      ),
      text: "Avoid being tracked by blocking all the cookies.",
    },
    {
      title: "Remove Cache",
      icon: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.83 3.16994C28.4585 2.79841 28.0175 2.50369 27.5322 2.30262C27.0468 2.10154 26.5266 1.99805 26.0012 1.99805C25.4759 1.99805 24.9556 2.10154 24.4703 2.30262C23.9849 2.50369 23.5439 2.79841 23.1725 3.16994C23.16 3.18244 23.1475 3.19494 23.1362 3.20869L16.2725 10.8562L15.125 9.70494C14.8464 9.4262 14.5156 9.20508 14.1515 9.05422C13.7874 8.90336 13.3972 8.82571 13.0031 8.82571C12.609 8.82571 12.2188 8.90336 11.8547 9.05422C11.4906 9.20508 11.1598 9.4262 10.8812 9.70494L1.29498 19.2924C1.10759 19.48 1.00232 19.7342 1.00232 19.9993C1.00232 20.2644 1.10759 20.5187 1.29498 20.7062L11.295 30.7062C11.4825 30.8936 11.7368 30.9989 12.0019 30.9989C12.267 30.9989 12.5212 30.8936 12.7087 30.7062L22.295 21.1249C22.5737 20.8463 22.7948 20.5156 22.9457 20.1515C23.0966 19.7874 23.1742 19.3972 23.1742 19.0031C23.1742 18.609 23.0966 18.2187 22.9457 17.8547C22.7948 17.4906 22.5737 17.1598 22.295 16.8812L21.1437 15.7312L28.7912 8.86744C28.8051 8.85592 28.818 8.84338 28.83 8.82994C29.2019 8.45845 29.4969 8.0173 29.6982 7.5317C29.8995 7.04611 30.0031 6.5256 30.0031 5.99994C30.0031 5.47428 29.8995 4.95377 29.6982 4.46818C29.4969 3.98259 29.2019 3.54144 28.83 3.16994ZM12 28.5862L9.91498 26.4999L12.7075 23.7062C12.8871 23.5171 12.9858 23.2654 12.9824 23.0046C12.9791 22.7439 12.874 22.4947 12.6896 22.3103C12.5052 22.1259 12.2561 22.0208 11.9953 22.0175C11.7345 22.0142 11.4828 22.1128 11.2937 22.2924L8.49998 25.0849L6.91498 23.4999L9.70748 20.7062C9.8871 20.5171 9.98576 20.2654 9.98242 20.0046C9.97908 19.7439 9.87401 19.4947 9.68961 19.3103C9.50521 19.1259 9.25607 19.0208 8.99531 19.0175C8.73454 19.0142 8.48279 19.1128 8.29373 19.2924L5.49998 22.0849L3.41373 19.9999L8.99998 14.4137L17.5862 22.9999L12 28.5862Z"
            fill="white"
          />
        </svg>
      ),
      text: "With this adblocker Chrome extension, you can free up all your space by removing unnecessary images and files in your browser. ",
    },
    {
      title: "Stop Notification",
      icon: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.7425 26.3274C26.8327 26.4243 26.9027 26.5381 26.9486 26.6622C26.9944 26.7863 27.0152 26.9183 27.0097 27.0505C27.0042 27.1827 26.9724 27.3125 26.9164 27.4324C26.8603 27.5523 26.781 27.6598 26.6831 27.7488C26.5852 27.8378 26.4705 27.9065 26.3459 27.9509C26.2212 27.9953 26.089 28.0144 25.9568 28.0073C25.8247 28.0002 25.6953 27.967 25.5761 27.9095C25.4569 27.852 25.3503 27.7714 25.2625 27.6724L22.8325 24.9999H5.99999C5.64841 24.9994 5.30317 24.9063 4.99906 24.7299C4.69495 24.5534 4.44272 24.3 4.2678 23.995C4.09288 23.69 4.00144 23.3443 4.0027 22.9927C4.00396 22.6411 4.09788 22.2961 4.27499 21.9924C4.96874 20.7974 5.99999 17.4174 5.99999 12.9999C5.99717 11.2343 6.46488 9.49976 7.35499 7.9749L5.26249 5.6724C5.17232 5.57555 5.10228 5.46176 5.05641 5.33763C5.01054 5.2135 4.98977 5.0815 4.9953 4.94929C5.00082 4.81707 5.03253 4.68727 5.08859 4.5674C5.14465 4.44753 5.22394 4.33998 5.32188 4.25098C5.41981 4.16198 5.53443 4.0933 5.6591 4.04893C5.78377 4.00455 5.916 3.98537 6.04814 3.99247C6.18028 3.99958 6.3097 4.03285 6.42889 4.09034C6.54808 4.14783 6.65467 4.22841 6.74249 4.3274L26.7425 26.3274ZM20 26.9999H12C11.7348 26.9999 11.4804 27.1053 11.2929 27.2928C11.1053 27.4803 11 27.7347 11 27.9999C11 28.2651 11.1053 28.5195 11.2929 28.707C11.4804 28.8945 11.7348 28.9999 12 28.9999H20C20.2652 28.9999 20.5196 28.8945 20.7071 28.707C20.8946 28.5195 21 28.2651 21 27.9999C21 27.7347 20.8946 27.4803 20.7071 27.2928C20.5196 27.1053 20.2652 26.9999 20 26.9999ZM27.3137 21.1099C27.0087 20.3237 26 17.4187 26 12.9999C26.0002 11.251 25.5417 9.53269 24.6704 8.01636C23.799 6.50002 22.5452 5.23872 21.0341 4.35832C19.523 3.47791 17.8074 3.0092 16.0586 2.99895C14.3098 2.9887 12.5888 3.43727 11.0675 4.2999C10.9367 4.37361 10.8243 4.47581 10.7384 4.59891C10.6525 4.72201 10.5955 4.86286 10.5715 5.01102C10.5475 5.15918 10.5571 5.31084 10.5997 5.45476C10.6423 5.59868 10.7167 5.73117 10.8175 5.8424L25.6462 22.1474C25.8037 22.3197 26.0164 22.4315 26.2476 22.4634C26.4788 22.4953 26.7139 22.4454 26.9121 22.3222C27.1104 22.199 27.2593 22.0104 27.3331 21.789C27.4069 21.5676 27.4009 21.3274 27.3162 21.1099H27.3137Z"
            fill="white"
          />
        </svg>
      ),
      text: "By simply downloading the extension, you can stop the unnecessary notification. ",
    },
  ];

  return (
    <div className={styles.container}>
      <Image src={background} className={styles.background} alt="bg"/>
      <h2 className={styles.heading}>
        Protect your Privacy and clear all your browsing data
      </h2>
      <h3 className={styles.subHeading}>
        Avoid trafficking with Trueadblocker
      </h3>
      <div className={styles.cardContainer}>
        {privacy.map((data, index) => (
          <PrivacyCard
            key={index}
            title={data.title}
            text={data.text}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

const PrivacyCard = ({ text, icon: Icon, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{Icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default Privacy;
