import { Inter, Bricolage_Grotesque } from "next/font/google";

import type { Metadata } from "next";

import "@/styles/globals.css";
import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className={`${bricolageGrotesque.variable} ${inter.variable}`}>
      {/* <body className="bg-dark font-body antialiased">{children}</body> */}
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`antialiased bg-dark font-body dark`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          forcedTheme="dark" */}
          {/* <StyleGlideProvider /> */}
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
