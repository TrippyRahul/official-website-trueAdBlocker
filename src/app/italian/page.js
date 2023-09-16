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
    " Le migliori estensioni di Chrome per bloccare gli annunci pubblicitari indesiderati",
  description:
    " Le estensioni Adblock di Chrome sono la migliore estensione che ti aiuterà a goderti il tuo viaggio su Internet senza pubblicità. Quindi dì addio agli annunci intrusivi e assumi il pieno controllo del tuo browser.",
  openGraph: {
    title:
      " Le migliori estensioni di Chrome per bloccare gli annunci pubblicitari indesiderati",
    description:
      " Le estensioni Adblock di Chrome sono la migliore estensione che ti aiuterà a goderti il tuo viaggio su Internet senza pubblicità. Quindi dì addio agli annunci intrusivi e assumi il pieno controllo del tuo browser.",
    url: "https://www.trueadblocker.net/italian",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="it">
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
