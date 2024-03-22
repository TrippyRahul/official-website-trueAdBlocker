import TopPoints from "./components/Usage";
import WhyTrueAdBlocker from "./components/WhyTrueAdBlocker";
import FeaturesOfTrueAdBlocker from "./components/FeaturesOfTrueAdBlocker";
import Benefits from "./components/Benefits";
import Use from "./components/Use";
import AboutTrueAdBlocker from "./components/AboutTrueAdBlocker";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Feature from "./components/Features";

export default function Home() {
  return (
    <div style={{background: "linear-gradient(90deg, #210938, #210937)"}}>
      <Header />
      <Feature />
      <TopPoints />
      <WhyTrueAdBlocker />
      <FeaturesOfTrueAdBlocker />
      <Benefits />
      <Use />
      <FrequentlyAskedQuestion />
      <Reviews />
      <AboutTrueAdBlocker />
      <Footer />
    </div>
  );
}
