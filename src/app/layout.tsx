import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import StructuredData from '@/components/StructuredData';
import AccessibilityEnhancer from '@/components/AccessibilityEnhancer';
import MobileOptimizer from '@/components/MobileOptimizer';
import Analytics from '@/components/Analytics';
import HeatmapTracker from '@/components/HeatmapTracker';
import ConversionTracker from '@/components/ConversionTracker';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingButtons from '@/components/FloatingButtons';
import CursorEffects from '@/components/CursorEffects';
import ThemeToggle from '@/components/ThemeToggle';
import NewsletterPopup from '@/components/NewsletterPopup';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "زنترا | وكالة تسويق إبداعية",
  description: "نُبرز كل علامة تجارية — زنترا، شريككم في التسويق الإبداعي. خدمات تسويق رقمي متكاملة، هوية بصرية، إنتاج فيديو، وتطوير منصات رقمية.",
  keywords: "تسويق رقمي، هوية بصرية، إنتاج فيديو، تطوير مواقع، تسويق وسائل التواصل، SEO، تصميم جرافيك، مصر",
  authors: [{ name: "زنترا" }],
  creator: "زنترا",
  publisher: "زنترا",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zentra.agency'),
  alternates: {
    canonical: '/',
    languages: {
      'ar': '/ar',
      'en': '/en',
    },
  },
  openGraph: {
    title: "زنترا | وكالة تسويق إبداعية",
    description: "نُبرز كل علامة تجارية — زنترا، شريككم في التسويق الإبداعي",
    url: 'https://zentra.agency',
    siteName: 'زنترا',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'زنترا - وكالة التسويق الإبداعي',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "زنترا | وكالة تسويق إبداعية",
    description: "نُبرز كل علامة تجارية — زنترا، شريككم في التسويق الإبداعي",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={`${poppins.variable} ${inter.variable}`} dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#7C3AED" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="زنترا" />
        <meta name="msapplication-TileColor" content="#7C3AED" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="bg-[#0A0A0F] text-white font-sans" suppressHydrationWarning>
        <PerformanceOptimizer />
        <StructuredData />
        <AccessibilityEnhancer />
        <MobileOptimizer />
        <Analytics />
        <HeatmapTracker />
        <ConversionTracker />
        <LoadingScreen />
        <ScrollProgress />
        <FloatingButtons />
        <CursorEffects />
        <ThemeToggle />
        <NewsletterPopup />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}