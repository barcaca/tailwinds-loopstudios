// Import necessary types from Next.js
import type { Metadata } from "next";

// Import Google Fonts Alata and Josefin Sans
import { Alata, Josefin_Sans } from "next/font/google";

// Import global CSS file
import "./globals.css";

// Configure Alata font with weight 400 and Latin subset
const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
});

// Configure Josefin Sans font with Latin subset
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

// Page metadata
export const metadata: Metadata = {
  title: "Frontend Mentor / Loopstudio",
  description: "Frontend Mentor / Loopstudio",
};

// Main layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return basic HTML structure with applied font classes
  return (
    <html lang="en" className={`${alata.variable} ${josefin_sans.variable}`}>
      <link rel="icon" href="../images/favicon-32x32.png" sizes="any" />
      <body className="font-body">{children}</body>
    </html>
  );
}
