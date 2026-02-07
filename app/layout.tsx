import type { Metadata } from "next";
import { Amatic_SC} from "next/font/google";
import "./globals.css";
import { VhFix } from "@/components/VhFix";

const amatic = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-amatic-sc",
});

export const metadata: Metadata = {
  title: "Seoul memo / entry 001: Seoul sunset",
  description: "Seoul sunset — це curated-бокс із Сеулу. Ми зібрали відчуття вечора в місті — у речах, яких хочеться торкатися та користуватися.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${amatic.variable} antialiased`}
      >
        <VhFix />
        {children}
      </body>
    </html>
  );
}
