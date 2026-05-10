import { Bricolage_Grotesque, Inter } from "next/font/google";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import "../styles/globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technical Lifts — Vikaspuri's Premier Gym | Train With Purpose",
  description:
    "Top-rated gym in Vikaspuri with certified personal trainers, full equipment, and real transformation results. Book your free trial today.",
  keywords: [
    "gym in vikaspuri",
    "best gym vikaspuri",
    "personal training vikaspuri",
    "fitness center vikaspuri",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Technical Lifts — Vikaspuri's Premier Gym | Train With Purpose",
    description:
      "Top-rated gym in Vikaspuri with certified personal trainers, full equipment, and real transformation results. Book your free trial today.",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="msapplication-TileColor" content="#0A0A0A" />
        <meta name="msapplication-TileImage" content="/favicon/web-app-manifest-192x192.png" />
      </head>
      <body className="bg-dark font-body antialiased">
        <Navbar />
        <main className="pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
