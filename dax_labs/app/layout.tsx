import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
