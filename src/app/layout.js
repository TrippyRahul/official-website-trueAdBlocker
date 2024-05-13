import Schema from "./Schema";
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
      "Trueadblocker is the best adblocker Chrome extension that removes all unwanted ads, pop-up ads and the best part is it is free to use.",
    url: "https://www.trueadblocker.net/",
    type: "website",
    images: "https://www.trueadblocker.net/favicon.png",
  },
  metadataBase: new URL("https://www.trueadblocker.net/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="RMU1dnFSr5mi_9G6B3hNmX8J43xkiP9WhxxZshOsYNI"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S0CGQ7TCDR" />
        <Script
          strategy="beforeInteractive"
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
        <Script
          strategy="beforeInteractive"
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-KMX53GWN');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMX53GWN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Schema />
        {children}
      </body>
    </html>
  );
}
