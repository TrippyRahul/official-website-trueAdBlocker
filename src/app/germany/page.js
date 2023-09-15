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

const page = () => {
  return (
    <html lang="de">
      <head>
        <title>
          Bester Adblocker Chrome zum Blockieren unerwünschter Werbung
        </title>
        <meta
          name="description"
          content="Werbeblocker Chrome ist die beste Erweiterung, die Ihnen hilft, Ihre Internetreise ohne Werbung zu genießen. Verabschieden Sie sich also von aufdringlicher Werbung und übernehmen Sie die volle Kontrolle über Ihren Browser."
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
