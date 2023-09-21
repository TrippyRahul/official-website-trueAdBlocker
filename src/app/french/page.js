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
  title: "Meilleur adblock Chrome pour bloquer les publicités indésirables",
  description:
    "Adblock Chrome est la meilleure extension qui vous aidera à profiter de votre parcours Internet sans publicité. Alors dites adieu aux publicités intrusives et prenez le contrôle total de votre navigateur.",
  keywords:
    "adblock chrome, extension chrome, adblock firefox, bloqueur de pub, chrome extension, adblock safari, total adblock, adblock extension chrome, google chrome web store",
  openGraph: {
    title: "Meilleur adblock Chrome pour bloquer les publicités indésirables",
    description:
      "Adblock Chrome est la meilleure extension qui vous aidera à profiter de votre parcours Internet sans publicité. Alors dites adieu aux publicités intrusives et prenez le contrôle total de votre navigateur.",
    url: "https://www.trueadblocker.net/french",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="fr">
      <head>
        <link
          rel="alternate"
          href="https://www.trueadblocker.net/french"
          hreflang="fr-fr"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/french"
          hreflang="fr-be"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/french"
          hreflang="fr-ch"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/french"
          hreflang="fr-ca"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/french"
          hreflang="fr-be"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/french"
          hreflang="fr-mc"
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
