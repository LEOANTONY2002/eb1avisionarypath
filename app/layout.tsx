import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eb1avisionarypath.com"),
  title: "EB1A Visionary Path - Expert Immigration Services",
  description:
    "Professional immigration services for EB1A, O1A, and EB2 NIW visas. Expert guidance for your immigration journey.",
  keywords:
    "EB1A visa, O1A visa, EB2 NIW, immigration services, visa consulting, US immigration, green card, immigration lawyer",
  openGraph: {
    type: "website",
    title: "EB1A Visionary Path - Expert Immigration Services",
    description:
      "Professional immigration services for EB1A, O1A, and EB2 NIW visas. Expert guidance for your immigration journey.",
    url: "https://eb1avisionarypath.com",
    siteName: "EB1A Visionary Path",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "EB1A Visionary Path - Expert Immigration Services",
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EB1A Visionary Path - Expert Immigration Services",
    description:
      "Professional immigration services for EB1A, O1A, and EB2 NIW visas. Expert guidance for your immigration journey.",
    images: ["/og-image.webp"],
    creator: "@eb1avisionarypath",
    site: "@eb1avisionarypath",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://eb1avisionarypath.com",
    languages: {
      "en-US": "https://eb1avisionarypath.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId="GTM-NK4LRNS9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="EB1A Visionary Path" />
        <link rel="canonical" href="https://eb1avisionarypath.com" />
      </head>
      <body className={`bg-white overflow-x-hidden ${inter.className}`}>
        <GoogleAnalytics gaId="G-EXTEGYJ7NB" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
