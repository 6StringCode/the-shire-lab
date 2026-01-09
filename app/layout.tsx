import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHIRE Lab | University of Miami",
  description:
    "The SHIRE Lab, led by Dr. Justin Stoler at the University of Miami, studies global environmental health disparities.",
  keywords: [
    "SHIRE Lab",
    "Justin Stoler",
    "University of Miami",
    "environmental health",
    "water insecurity",
    "global health",
    "geography",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
