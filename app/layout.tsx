import type { Metadata } from "next";
import { Anton, Urbanist, Forum, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HudNavbar from "@/components/HudNavbar";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WGF Documentary Films | India",
  description: "Non-fiction cinema verité studio based in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${urbanist.variable} ${forum.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased selection:bg-[var(--color-foreground)] selection:text-[var(--color-bg-white)]">
        <HudNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}