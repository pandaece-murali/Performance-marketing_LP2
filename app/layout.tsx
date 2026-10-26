import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANDAeCe | Performance Marketing Agency",
  description:
    "PANDAeCe combines Google Ads, Meta Ads, landing pages, campaign optimisation, CRM integration and lead tracking to help businesses monitor CPL, CPQL, CAC and ROAS.",
  keywords: [
    "PANDAeCe",
    "Performance Marketing Agency",
    "Google Ads",
    "Meta Ads",
    "Lead Generation",
    "Cost Per Qualified Lead",
    "CPQL",
    "Customer Acquisition Cost",
    "CAC",
    "Return on Ad Spend",
    "ROAS",
    "CRM and Lead Tracking",
  ],
  openGraph: {
    title: "PANDAeCe | Performance Marketing Agency",
    description:
      "Improve your marketing performance with clear metrics.",
    url: "https://pandaece.com/",
    siteName: "PANDAeCe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MBZRSRTJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBZRSRTJ');`}
        </Script>
      </body>
    </html>
  );
}
