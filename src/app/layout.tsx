
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PROMOTION-LINK",
  description: "A platform that makes it easy for brands and content creators to work together on product promotions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="w-screen relative flex items-center justify-center dark:bg-black">
          <Navbar/>
        </div>
        {children}
        <div className="w-screen relative flex items-center justify-center dark:bg-black">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
