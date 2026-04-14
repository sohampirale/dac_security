import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAK Security | Advanced Cybersecurity Solutions",
  description: "Your trusted partner in Cyber Security services and Solutions. DAK Security empowers your digital future with advanced cybersecurity solutions, building a safer environment for mankind.",
  keywords: ["cybersecurity", "security services", "managed security", "vulnerability assessment", "cloud security", "compliance", "DAK Security"],
  authors: [{ name: "DAK Security" }],
  openGraph: {
    title: "DAK Security | Advanced Cybersecurity Solutions",
    description: "Your trusted partner in Cyber Security services and Solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
