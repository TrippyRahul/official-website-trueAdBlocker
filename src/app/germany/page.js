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
  keywords:
    "ad blocker, ad blocker chrome, ad blocker firefox, ad blocker youtube, ad blocker safari, ad blocker free, ad blocker google chrome, chrome ad blocker, twitch ad blocker, youtube ad blocker chrome, Spotify ad blocker, hulu ad blocker, adblocker.360, adblock opera, adblocker ultimate",
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
      <head>
        <link
          rel="alternate"
          href="https://www.trueadblocker.net/germany"
          hreflang="de-de"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/germany"
          hreflang="de-lu"
        />

        <link
          rel="alternate"
          href="https://www.trueadblocker.net/germany"
          hreflang="de-li"
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
