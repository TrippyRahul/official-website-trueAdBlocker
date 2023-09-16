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
  title: "Najlepszy adblock Chrome do blokowania niechcianych reklam",
  description:
    " Adblock Chrome to najlepsze rozszerzenie, które pomoże Ci cieszyć się podróżą po Internecie bez reklam. Pożegnaj więc natrętne reklamy i przejmij pełną kontrolę nad swoją przeglądarką.",
  openGraph: {
    title: "Najlepszy adblock Chrome do blokowania niechcianych reklam",
    description:
      " Adblock Chrome to najlepsze rozszerzenie, które pomoże Ci cieszyć się podróżą po Internecie bez reklam. Pożegnaj więc natrętne reklamy i przejmij pełną kontrolę nad swoją przeglądarką.",
    url: "https://www.trueadblocker.net/polish",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="pl">
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
