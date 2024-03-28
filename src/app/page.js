import Usage from "./components/Usage";
import WhyTrueAdBlocker from "./components/WhyTrueAdBlocker";
import FeaturesOfTrueAdBlocker from "./components/FeaturesOfTrueAdBlocker";
import Blogs from "./components/Blogs";
import HowToUse from "./components/HowToUse";
import AboutTrueAdBlocker from "./components/AboutTrueAdBlocker";
import FrequentlyAskedQuestion from "./components/FAQ";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feature from "./components/Features";
import Privacy from "./components/Privacy";

export default function Home() {
  return (
    <div style={{ background: "rgba(27, 27, 27, 1)" }}>
      <Header />
      <Feature />
      <Usage />
      <Privacy />
      <WhyTrueAdBlocker />
      <FeaturesOfTrueAdBlocker />
      <HowToUse />
      <FrequentlyAskedQuestion />
      <Reviews />
      {/* <Blogs /> */}
      <AboutTrueAdBlocker />
      <Footer />
    </div>
  );
}
