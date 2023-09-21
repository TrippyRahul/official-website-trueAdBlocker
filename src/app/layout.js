import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "True Ad Blocker",
  description:
    "True Adblocker removes all unwanted ads and block pop-ups ads. It is the BEST and FREE Adblock",
  keywords:
    "free ad blocker,adblocker,adblocker chrome extension,best free ad blocker,best free ad blocker for chrome,free ad blocker chrome,ad blocker free,adblocker chrome,best adblocker,adblocker google chrome",
  openGraph: {
    title: "True Ad Blocker",
    description:
      "True Adblocker removes all unwanted ads and block pop-ups ads. It is the BEST and FREE Adblock",
    url: "https://www.trueadblocker.net/",
    type: "website",
    images: "https://www.trueadblocker.net/nav-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/nav-logo.svg" />
        <link rel="canonical" href="https://www.trueadblocker.net/" />
        <meta
          name="google-site-verification"
          content="RMU1dnFSr5mi_9G6B3hNmX8J43xkiP9WhxxZshOsYNI"
        />
      </head>
      <body className={inter.className}>
        <Schema />
        {children}
      </body>
    </html>
  );
}
