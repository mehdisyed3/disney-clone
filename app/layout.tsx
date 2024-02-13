import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/myComponents/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney+ clone",
  description: "tutorial project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-[#1A1C29]'>
        <Header />
        {children}
        </body>
    </html>
  );
}
