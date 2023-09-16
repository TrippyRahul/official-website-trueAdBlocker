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
  title: "Melhor adblock do Chrome para bloquear anúncios indesejados",
  description:
    "Adblock Chrome é a melhor extensão que o ajudará a aproveitar sua jornada na Internet sem anúncios. Então diga adeus aos anúncios intrusivos e assuma o controle total do seu navegador.",
  openGraph: {
    title: "Melhor adblock do Chrome para bloquear anúncios indesejados",
    description:
      "Adblock Chrome é a melhor extensão que o ajudará a aproveitar sua jornada na Internet sem anúncios. Então diga adeus aos anúncios intrusivos e assuma o controle total do seu navegador.",
    url: "https://www.trueadblocker.net/portuguese",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="pt">
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
