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
  title: "Beste adblocker Chrome om ongewenste advertenties te blokkeren",
  description:
    "Adblocker Chrome is de beste extensie waarmee u zonder advertenties van uw internetreis kunt genieten. Zeg dus vaarwel tegen opdringerige advertenties en neem de volledige controle over uw browser over.",
  keywords:
    "adblocker, adblocker chrome, adblocker firefox, adblocker safari, adblocker test",
  openGraph: {
    title: "Beste adblocker Chrome om ongewenste advertenties te blokkeren",
    description:
      "Adblocker Chrome is de beste extensie waarmee u zonder advertenties van uw internetreis kunt genieten. Zeg dus vaarwel tegen opdringerige advertenties en neem de volledige controle over uw browser over.",
    url: "https://www.trueadblocker.net/dutch",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="nl">
      <head>
        <link
          rel="alternate"
          href="https://www.trueadblocker.net/dutch"
          hreflang="nl-nl"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/dutch"
          hreflang="nl-be"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/dutch"
          hreflang="nl-sr"
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
