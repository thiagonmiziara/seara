import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { cn } from "@/lib/utils";
import GlobalLoading from "@/components/GlobalLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seara de Deus",
  description: "Plataforma da Comunidade Seara de Deus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className='dark'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/assets/logosemtexto.jpeg' />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased flex flex-col min-h-screen"
        )}
      >
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
        <FloatingContactButtons />
        <Toaster />
        <Suspense fallback={null}>
          <GlobalLoading />
        </Suspense>
      </body>
    </html>
  );
}
