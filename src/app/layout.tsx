import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://optimarch.ai'),
  title: "Optimarch - AI Automation Services | Transform Your Business",
  description: "Transform your business with cutting-edge AI automation solutions. Optimarch delivers intelligent workflow integration that drives efficiency and growth. 50% faster processing, 90% cost reduction.",
  keywords: "AI automation, business automation, workflow optimization, artificial intelligence, digital transformation, machine learning, process automation, predictive analytics",
  authors: [{ name: "Optimarch", url: "https://optimarch.ai" }],
  creator: "Optimarch",
  publisher: "Optimarch",
  robots: "index, follow",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://optimarch.ai",
    title: "Optimarch - AI Automation Services",
    description: "Transform your business with cutting-edge AI automation solutions. 50% faster processing, 90% cost reduction.",
    siteName: "Optimarch",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Optimarch AI Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimarch - AI Automation Services",
    description: "Transform your business with cutting-edge AI automation solutions.",
    images: ["/og-image.jpg"],
    creator: "@vitalune",
  },
  alternates: {
    canonical: "https://optimarch.ai",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
