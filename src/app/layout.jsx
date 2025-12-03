// app/layout.js
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

// ✅ Proper metadata including favicon
export const metadata = {
  title: "ActivPaisa",
  description: "Get Loans From ActivPaisa at Best Rates",
  icons: {
    icon: "/Icons/favicon.ico", // main favicon
    apple: "/Icons/favicon-apple.png", // optional Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Additional fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          precedence="default"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
