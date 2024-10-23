import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Indonesia Earthquake Early Warning System",
  description:
    "",
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', 
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Indonesia Earthquake Early Warning System",
    description:
      "",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Indonesia Earthquake Early Warning System",
    description:
      "."
  }
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}