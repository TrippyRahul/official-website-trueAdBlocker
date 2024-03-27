import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trueadblocker chrome extension - Ultimate Ad detector",
  description:
    "Trueadblocker is the best adblocker Chrome extension that removes all unwanted ads, pop-up ads and the best part is it is free to use",
  keywords:
    " adblocker chrome extension, adblock plus chrome, ad blocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, adblock chrome, youtube no ads, chrome youtube adblocker, hulu without ads, pop up blocker chrome, Best ad blocker fireforx, twitch adblock firefox, adguard ablocker, Pop- up ads, ad blocker google chrome, chrome extension adblock and google chrome ad blocker",
  openGraph: {
    title: "Trueadblocker chrome extension - Ultimate Ad detector",
    description:
      "It is the best adblocker Chrome extension that blocks all annoying ads",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S0CGQ7TCDR" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0CGQ7TCDR');
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Schema />
        {children}
      </body>
    </html>
  );
}
