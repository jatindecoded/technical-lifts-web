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
  title: "Technical Lifts - Best Gym in Vikaspuri | Personal Training",
  description:
    "Top-rated gym in Vikaspuri with certified personal trainers, full equipment, and real transformation results. Book your free trial today.",
  keywords: [
    "gym in vikaspuri",
    "best gym vikaspuri",
    "personal training vikaspuri",
    "fitness center vikaspuri",
  ],
  openGraph: {
    title: "Technical Lifts - Best Gym in Vikaspuri | Personal Training",
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
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className="bg-dark font-body antialiased">
        <Navbar />
        <main className="pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
