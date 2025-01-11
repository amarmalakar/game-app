import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalLayoutProvider from "@/components/providers/global-layout-provider";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Game app",
  description: "Creating game app for the learning purpose",
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
        <GlobalLayoutProvider>{children}</GlobalLayoutProvider>
        <Toaster />
      </body>
    </html>
  );
}
