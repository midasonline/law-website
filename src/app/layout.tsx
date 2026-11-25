import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ContactProvider } from "@/components/ui/contact-dialog";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Lawvia & Partners | Legal Advice Made Simple",
  description: "Specialized legal counsel built on decades of experience. Explore Lawvia’s practice areas, meet our team, and arrange a consultation.",
};

export const viewport: Viewport = { themeColor: "#111111" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="fixed top-4 left-4 z-100 -translate-y-40 bg-white px-5 py-3 text-black focus:translate-y-0">Skip to content</a>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  );
}
