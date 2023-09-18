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
  keywords:
    "adblock, adblocker, adblock chrome, adblock plus, adblock firefox, twitch adblock, adblock for youtube, adblock youtube",
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
      <head>
        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-es"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-ar"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-co"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-pe"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-mx"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-cl"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-cr"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-uy"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-bo"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-ve"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-cu"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/spanish"
          hreflang="es-br"
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
