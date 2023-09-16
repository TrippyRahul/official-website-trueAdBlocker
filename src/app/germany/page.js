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
  title: "Bester Adblocker Chrome zum Blockieren unerwünschter Werbung",
  description:
    "Werbeblocker Chrome ist die beste Erweiterung, die Ihnen hilft, Ihre Internetreise ohne Werbung zu genießen. Verabschieden Sie sich also von aufdringlicher Werbung und übernehmen Sie die volle Kontrolle über Ihren Browser.",
  openGraph: {
    title: "Bester Adblocker Chrome zum Blockieren unerwünschter Werbung",
    description:
      "Werbeblocker Chrome ist die beste Erweiterung, die Ihnen hilft, Ihre Internetreise ohne Werbung zu genießen. Verabschieden Sie sich also von aufdringlicher Werbung und übernehmen Sie die volle Kontrolle über Ihren Browser.",
    url: "https://www.trueadblocker.net/germany",
    type: "website",
  },
};

const page = () => {
  return (
    <html lang="de">
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
