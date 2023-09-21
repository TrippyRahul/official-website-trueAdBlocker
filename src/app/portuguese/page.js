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
  title: "Melhor adblock chrome para bloquear anúncios indesejados",
  description:
    "Adblock Chrome é a melhor extensão que o ajudará a aproveitar sua jornada na Internet sem anúncios. Então diga adeus aos anúncios intrusivos e assuma o controle total do seu navegador.",
  keywords:
    "adblock, adblock chrome, adblock plus, twitch adblock, adblock firefox, How to disable adblock, adblock chrome extension, adblock google chrome",
  openGraph: {
    title: "Melhor adblock chrome para bloquear anúncios indesejados",
    description:
      "Adblock Chrome é a melhor extensão que o ajudará a aproveitar sua jornada na Internet sem anúncios. Então diga adeus aos anúncios intrusivos e assuma o controle total do seu navegador.",
    url: "https://www.trueadblocker.net/portuguese",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="pt">
      <head>
        <link
          rel="alternate"
          href="https://www.trueadblocker.net/portuguese"
          hrefLang="pt-pt"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/portuguese"
          hrefLang="pt-ao"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/portuguese"
          hreflang="pt-br"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/portuguese"
          hreflang="pt-mo"
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
