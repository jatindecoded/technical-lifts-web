import { Inter, Bricolage_Grotesque } from "next/font/google";

import type { Metadata } from "next";

import "../styles/globals.css";
import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { SITE } from "@/lib/constants";

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
      {/* <body className="bg-dark font-body antialiased">{children}</body> */}
      <head>
        <title>{SITE.name} — {SITE.taglineAccent ? SITE.taglineAccent : SITE.tagline}</title>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`bg-dark font-body dark antialiased`}>
        {/* top primary band to match home hero spacing */}
        <div className="absolute inset-x-0 top-0 h-40 lg:h-56 bg-primary -z-10" aria-hidden="true" />
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          forcedTheme="dark" */}
        {/* <StyleGlideProvider /> */}
        <Navbar />
        <main className="pt-40 lg:pt-56">{children}</main>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
