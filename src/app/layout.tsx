import type { Metadata } from "next";
import { Gamja_Flower } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components";

const gamjaFlower = Gamja_Flower({
  variable: "--font-gamja-flower",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drinking Buddy",
  description: "Your buddy when you drink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gamjaFlower.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
