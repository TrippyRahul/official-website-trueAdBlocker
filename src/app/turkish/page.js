import React from "react";
import Header from "./components/Header";
import WhyUs from "./components/WhyUs";
import TopPoints from "./components/TopPoints";
import WhyTrueAdBlocker from "./components/WhyTrueAdBlocker";
import FeaturesOfTrueAdBlocker from "./components/FeaturesOfTrueAdBlocker";
import Benefits from "./components/Benefits";
import Use from "./components/Use";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import Reviews from "./components/Reviews";
import AboutTrueAdBlocker from "./components/AboutTrueAdBlocker";
import Footer from "./components/Footer";

export const metadata = {
  title: "İstenmeyen reklamları engellemek için en iyi reklam engelleme Chrome",
  description:
    "Adblock Chrome, internet yolculuğunuzun reklamsız keyfini çıkarmanıza yardımcı olacak en iyi uzantıdır. Bu nedenle, araya giren reklamlara elveda deyin ve tarayıcınızın tam kontrolünü elinize alın.",
  openGraph: {
    title:
      "İstenmeyen reklamları engellemek için en iyi reklam engelleme Chrome",
    description:
      "Adblock Chrome, internet yolculuğunuzun reklamsız keyfini çıkarmanıza yardımcı olacak en iyi uzantıdır. Bu nedenle, araya giren reklamlara elveda deyin ve tarayıcınızın tam kontrolünü elinize alın.",
    url: "https://www.trueadblocker.net/turkish",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="tr">
      <body>
        <Header />
        <WhyUs />
        <TopPoints />
        <FeaturesOfTrueAdBlocker />
        <Benefits />
        <FrequentlyAskedQuestion />
        <Reviews />
        <AboutTrueAdBlocker />
        <Footer />
      </body>
    </html>
  );
};

export default page;
