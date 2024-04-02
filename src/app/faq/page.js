import FrequentlyAskedQuestion from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/faq.module.scss";
const page = () => {
  const data= {
      title: "FAQs",
      button: "More Questions",
      questions: [
        {
          id: 1,
          ques: "What is Trueadblocker and how does it work?",
          ans: "It is the best extension that is designed to improve your online experience by eliminating all unwanted ads. It also protects your privacy and saves your data usage. The best part is it is free to use. ",
        },
        {
          id: 2,
          ques: "Does this extension block all types of ads?",
          ans: "Yes, this adblocker Chrome extension blocks all types of ads including banner ads, pop-ups, video ads, and many more.",
        },
        {
          id: 3,
          ques: "Can this extension affect your web browsing speed?    ",
          ans: "It can speed up your page loading by blocking all the unwanted ads.",
        },
        {
          id: 4,
          ques: "How to whitelist websites in Trueadblocker?",
          ans: "You can whitelist websites by adding them to the allowed list in its settings then it will permit all the ads on those selected sites.",
        },
        {
          id: 5,
          ques: "Is using this adblocker Chrome extension legal?",
          ans: "Yes, this extension is absolutely legal and safe to use.",
        },
        {
          id: 6,
          ques: "Is this extension compatible with other websites?",
          ans: "This adblocker Chrome extension is compatible with most of the major browsers including Google and Firefox.",
        },
        {
          id: 7,
          ques: "How can I install Trueadblocker on my web browser?",
          ans: "It is very simple as you just need to search for the extension or you can visit our website and download the extension from there.",
        },
        {
          id: 8,
          ques: "Is it safe to use Trueadblocker on multiple sites?",
          ans: "Yes, it is absolutely safe to the extension on multiple browsers including Google Chrome and Firefox.",
        },
        {
          id: 9,
          ques: "Is there any free version of Trueadblocker?",
          ans: "Yes, our extension is free to use. You can block all types of ads for free and enhance your online experience.",
        },
        {
          id: 10,
          ques: "Why Trueadblocker is better than other adblockers?",
          ans: "The majority of adblockers can not get rid of unnecessary ads, but by installing our extension you can block all types of hidden ads that may ruin your experience. It not only blocks ads but also protects your browser from dangerous websites.",
        },
      ],
    }
  return (
    <div className={styles.container}>
      <Navbar />
      <FrequentlyAskedQuestion data={data} />
      <Footer />
    </div>
  );
};

export default page;
