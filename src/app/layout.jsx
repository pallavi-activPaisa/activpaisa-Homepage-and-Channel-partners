import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./build/css/tokens.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "activpaisa",
  description: "Get Loans From ActivPaisa at Best Rates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
        precedence="default"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center align-middle items-center`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
