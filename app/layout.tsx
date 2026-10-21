import type { Metadata } from "next";
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
  icons: {
    icon: "/icon.png",
  },
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
      <body>{children}</body>
    </html>
  );
}