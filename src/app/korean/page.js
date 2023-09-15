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
    <html lang="kg">
      <head>
        <title>원치 않는 광고를 차단하는 최고의 광고 차단 Chrome</title>
        <meta
          name="description"
          content="-- Adblock Chrome은 광고 없이 인터넷 여행을 즐길 수 있도록 도와주는 최고의 확장 프로그램입니다. 이제 침입적인 광고와 작별하고 브라우저를 완전히 제어하세요."
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
