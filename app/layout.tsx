import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ad.here - Indoor Mall LED Network, Accra",
  description:
    "Intelligent media placement for SMEs. From brief to live campaign in 35 minutes. Indoor LED screens across Accra & Kumasi malls. No agency fees. Transparent reporting.",
  icons: {
    icon: '/logo-coral.png',
    shortcut: '/logo-coral.png',
    apple: '/logo-coral.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
