import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAC Security | Advanced Cybersecurity Solutions",
  description: "Your trusted partner in Cyber Security Services and Solutions. DAC Security empowers your digital future with advanced cybersecurity solutions, building a safer environment for mankind.",
  keywords: ["cybersecurity", "security services", "managed security", "vulnerability assessment", "cloud security", "compliance", "DAC Security"],
  authors: [{ name: "DAC Security" }],
  openGraph: {
    title: "DAC Security | Advanced Cybersecurity Solutions",
    description: "Your trusted partner in Cyber Security Services and Solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' as any }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ colorScheme: 'light' as any }}
      >
        {children}
      </body>
    </html>
  );
}
