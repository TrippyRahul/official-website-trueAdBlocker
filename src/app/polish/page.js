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
  keywords:
    "adblock, ad blocker, adblock chrome, adblock firefox, adblock plus, how to disable adblock, blocking ads, chrome adblock, adblock plus chrome, adblock for chrome  ",
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
      <head>
        <link
          rel="alternate"
          href="https://www.trueadblocker.net/polish"
          hreflang="pl-pl"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/polish"
          hreflang="pl-cz"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/polish"
          hreflang="pl-de"
        />
      </head>
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
