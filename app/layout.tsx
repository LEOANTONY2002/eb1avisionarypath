import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eb1avisionarypath.com"),
  title: "EB1A Visionary Path - Expert Immigration Services",
  description:
    "Professional immigration services for EB1A, O1A, and EB2 NIW visas. Expert guidance for your immigration journey.",
  keywords:
    "EB1A visa, O1A visa, EB2 NIW, immigration services, visa consulting, US immigration, green card, immigration lawyer",
  openGraph: {
    title: "EB1A Visionary Path - Expert Immigration Services",
    description:
      "Professional immigration services for EB1A, O1A, and EB2 NIW visas. Expert guidance for your immigration journey.",
    url: "https://eb1avisionarypath.com",
    siteName: "EB1A Visionary Path",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EB1A Visionary Path",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EB1A Visionary Path - Expert Immigration Services",
    description:
      "Professional immigration services for EB1A, O1A, and EB2 NIW visas. Expert guidance for your immigration journey.",
    images: ["/og-image.jpg"],
    creator: "@eb1avisionarypath",
    site: "@eb1avisionarypath",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
