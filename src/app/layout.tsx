import { ReactNode } from "react";
import "./globals.css";
import localFont from "next/font/local";
import { Allura } from "next/font/google";

// Allura (hanya regular)
const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

// GrandCru Regular & Bold
const grandCru = localFont({
  src: [
    {
      path: "../../public/fonts/GrandCru-LightS.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GrandCru-BoldS.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grandcru",
});

export const metadata = {
  title: "Aina & Sandy",
  description: "Minggu, 02 November 2025",
  openGraph: {
    title: "Aina & Sandy",
    description: "Minggu, 02 November 2025",
    url: "https://scaledesign.id/aina&sandy",
    siteName: "scaledesign.id",
    images: [
      {
        url: "https://scaledesign.id/images/meta/og_aina_sandy.webp", 
        width: 1200,
        height: 630,
        alt: "Aina & Sandy",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aina & Sandy",
    description: "Minggu, 02 November 2025",
    images: ["https://scaledesign.id/images/meta/og_aina_sandy.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${allura.variable} ${grandCru.variable} font-sans bg-[#F4E9E0] overflow-x-hidden`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}