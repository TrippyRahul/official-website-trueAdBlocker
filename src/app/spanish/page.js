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
  title:
    " El mejor bloqueador de anuncios de Chrome para bloquear anuncios no deseados",
  description:
    "Adblock Chrome es la mejor extensión que te ayudará a disfrutar de tu viaje por Internet sin anuncios. Diga adiós a los anuncios intrusivos y tome el control total de su navegador.",
  openGraph: {
    title:
      " El mejor bloqueador de anuncios de Chrome para bloquear anuncios no deseados",
    description:
      "Adblock Chrome es la mejor extensión que te ayudará a disfrutar de tu viaje por Internet sin anuncios. Diga adiós a los anuncios intrusivos y tome el control total de su navegador.",
    url: "https://www.trueadblocker.net/spanish",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="es">
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
