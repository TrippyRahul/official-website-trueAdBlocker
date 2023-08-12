import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expert Ad Blocker",
  description:
    "Expert Adblocker removes all unwanted ads and block pop-ups ads. It is the BEST and FREE Adblock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/nav-logo.svg" />
        <link rel="canonical" href="https://www.expertadblocker.net/" />
        <meta
          name="keywords"
          content="free ad blocker,adblocker,adblocker chrome extension,best free ad blocker,best free ad blocker for chrome,free ad blocker chrome,ad blocker free,adblocker chrome,best adblocker,adblocker google chrome"
        />

        <meta property="og:url" content="https://www.expertadblocker.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Expert Ad Blocker" />
        <meta
          property="og:description"
          content="Expert Adblocker removes all unwanted ads and block pop-ups ads. It is the BEST and FREE Adblock"
        />
        <meta
          property="og:image"
          content="https://www.expertadblocker.net/nav-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="expertadblocker.net" />
        <meta property="twitter:url" content="https://www.expertadblocker.net/" />
        <meta name="twitter:title" content="Expert Ad Blocker" />
        <meta
          name="twitter:description"
          content="Expert Adblocker removes all unwanted ads and block pop-ups ads. It is the BEST and FREE Adblock"
        />
        <meta
          name="twitter:image"
          content="https://www.expertadblocker.net/footer-logo.svg"
        />
      </head>
      <body className={inter.className}>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
