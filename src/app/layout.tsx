import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/component/layout/Header";
import { SiteFooter } from "@/component/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lumière Dental Studio — Gentle Modern Dentistry in Austin, TX",
  description:
    "Lumière Dental Studio is a modern dental practice in downtown Austin offering cosmetic dentistry, implants, Invisalign, and emergency care. Same-day appointments available. Rated 4.9★ by 487+ patients.",
  keywords: [
    "Austin dentist",
    "cosmetic dentistry Austin",
    "dental implants Austin TX",
    "Invisalign Austin",
    "emergency dentist Austin",
    "Lumière Dental Studio",
  ],
  authors: [{ name: "Lumière Dental Studio" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Lumière Dental Studio — Gentle Modern Dentistry in Austin, TX",
    description:
      "Same-day emergency appointments, digital 3D imaging, and insurance-friendly pricing. 4.9★ from 487+ reviews.",
    siteName: "Lumière Dental Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Dental Studio — Austin, TX",
    description: "Gentle, modern dental care in the heart of Austin. Book online today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased bg-background text-foreground flex min-h-screen flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
