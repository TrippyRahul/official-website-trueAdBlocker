import Image from "next/image";
import WhyUs from "./components/WhyUs";
import TopPoints from "./components/TopPoints";
import WhyTrueAdBlocker from "./components/WhyTrueAdBlocker";
import FeaturesOfTrueAdBlocker from "./components/FeaturesOfTrueAdBlocker";
import Benefits from "./components/Benefits";
import Use from "./components/Use";
import AboutTrueAdBlocker from "./components/AboutTrueAdBlocker";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <>
      <WhyUs />
      <TopPoints />
      <WhyTrueAdBlocker />
      <FeaturesOfTrueAdBlocker />
      <Benefits />
      <Use />
      <AboutTrueAdBlocker />
      <FrequentlyAskedQuestion />
      <Reviews />
    </>
  );
}
