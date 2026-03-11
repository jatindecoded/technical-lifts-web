import { Inter, Syne } from "next/font/google";

import type { Metadata } from "next";

import "@/styles/globals.css";
import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
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
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-dark font-body antialiased">{children}</body>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`antialiased`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
          {/* <StyleGlideProvider /> */}
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
