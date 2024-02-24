import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/myComponents/Header";
import { ThemeProvider } from "@/myComponents/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney+ clone",
  description: "tutorial project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html lang="en">
      <body className="dark:bg-[#1A1C29] bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
