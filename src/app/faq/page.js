import FrequentlyAskedQuestion from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/faq.module.scss";
const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <FrequentlyAskedQuestion />
      <Footer />
    </div>
  );
};

export default page;
