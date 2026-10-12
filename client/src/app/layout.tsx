import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "LM6E - Lycée Mohammed VI d'Excellence",
  description:
    "Lycée Mohammed VI d'Excellence - Un établissement scientifique de référence",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <CookieConsent />
        <AIAssistant />
        <Footer />
      </body>
    </html>
  );
}