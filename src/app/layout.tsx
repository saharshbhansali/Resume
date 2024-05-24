import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistMonoNonVariable } from "geist/font/mono-non-variable";

export const metadata: Metadata = {
  title: "Saharsh Bhansali Resume",
  description: "Saharsh Bhansali's Resume",
  applicationName: "Saharsh Bhansali Portfolio",
  keywords: ["Saharsh", "Bhansali", "Resume", "Saharsh Bhansali", "Saharsh Bhansali Resume"],
  category: "Portfolio",
  classification: "Portfolio",
  creator: "Saharsh Bhansali",
  robots: "index, follow",
  abstract: "Saharsh Bhansali's Resume",
  archives: "Saharsh Bhansali's Resume",
  authors: {
    name: "Saharsh Bhansali",
    url: "https://www.linkedin.com/in/SaharshBhansali/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
