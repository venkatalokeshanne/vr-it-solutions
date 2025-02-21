import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StickyContact from "./components/StickyContact/StickyContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://vr-it-solutions.vercel.app/'),
  title: {
    default: 'VR IT Solutions - Professional Training Institute',
    template: '%s | VR IT Solutions'
  },
  description: 'Leading training institute offering professional courses in Salesforce, ServiceNow, and more. Join our expert-led training programs in Hyderabad.',
  keywords: [
    'IT Training',
    'Professional Courses',
    'Salesforce Training',
    'ServiceNow Training',
    'Hyderabad IT Institute',
    'VR IT Solutions'
  ],
  authors: [{ name: 'VR IT Solutions' }],
  creator: 'VR IT Solutions',
  publisher: 'VR IT Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vr-it-solutions.vercel.app.com',
    siteName: 'VR IT Solutions',
    title: 'VR IT Solutions - Professional Training Institute',
    description: 'Leading training institute offering professional IT courses in Hyderabad. Expert-led training in Salesforce, ServiceNow, and more.',
    images: [
      {
        url: '/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'VR IT Solutions Training Programs',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vrit_solutions',
    creator: '@vrit_solutions',
    title: 'VR IT Solutions - Professional Training Institute',
    description: 'Leading training institute offering professional IT courses in Hyderabad',
    images: ['/images/og/home.jpg'],
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
    google: 'add-your-google-site-verification',
    yandex: 'add-your-yandex-verification',
    yahoo: 'add-your-yahoo-verification',
    other: {
      'facebook-domain-verification': 'add-your-facebook-domain-verification'
    }
  },
  category: 'education'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <div className="relative w-full">
          <Navbar />
          {children}
          <Footer />
          <StickyContact />
        </div>
      </body>
    </html>
  );
}