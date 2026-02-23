import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactButtons from '@/components/layout/FloatingContactButtons';
import BackToHomeClient from '@/components/shared/BackToHomeClient';
import { cn } from '@/lib/utils';
import GlobalLoading from '@/components/GlobalLoading';
import SetVh from '@/components/SetVh';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Seara de Deus',
  description: 'Plataforma da Comunidade Seara de Deus.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' className='dark'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/assets/apple-touch-180.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/assets/apple-touch-167.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/assets/apple-touch-152.png'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'antialiased flex flex-col min-h-screen overflow-x-hidden',
        )}
      >
        <Header />
        <SetVh />
        <BackToHomeClient />
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
