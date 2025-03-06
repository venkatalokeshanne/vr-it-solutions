import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StickyContact from "./components/StickyContact/StickyContact";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import AnnouncementBanner from "./components/AnnouncementBanner/AnnouncementBanner";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import Script from "next/script";
import GTMScript from "./components/GTMScript/GTMScript";
import DebugScript from "./components/GTMScript/DebugScript";
import TestControls from "./components/GTMScript/TestControls";
import { Analytics } from "@vercel/analytics/react";

// Set your actual GTM ID here
const GTM_ID = "GTM-TNZPLN7H";

// Optimize web fonts for performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Viewport and metadata exports remain unchanged...

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Add preconnect for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetching for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* For HTTP/2 server push of critical resources */}
        <link rel="preload" as="image" href="/logo.png" />

        {/* Add language attributes for multi-language support */}
        <meta httpEquiv="content-language" content="en" />

        {/* Add mobile app capability */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Page-level resource hints for performance */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        {/* GTM Script Component - centralized GTM management */}
        <GTMScript gtmId={GTM_ID} />
        <DebugScript />
        {/* JSON-LD structured data for local business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://vr-it-solutions.vercel.app/#organization",
              name: "VR IT Solutions",
              alternateName: "VRIT Solutions",
              url: "https://vr-it-solutions.vercel.app/",
              logo: "https://vr-it-solutions.vercel.app/logo.png",
              sameAs: [
                "https://www.facebook.com/vritsolutions",
                "https://twitter.com/vrit_solutions",
                "https://www.linkedin.com/company/vr-it-solutions",
                "https://www.instagram.com/vritsolutions",
                "https://www.youtube.com/channel/vritsolutions",
              ],
              description:
                "VR IT Solutions is a premier IT training institute offering both online and offline courses with expert instructors and placement assistance in Hyderabad.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "506/A, Aditya Enclave, Ameerpet",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500016",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.4437",
                longitude: "78.3819",
              },
              telephone: "+91-9032734343",
              email: "info@vritsolutions.com",
              foundingDate: "2010",
              founder: {
                "@type": "Person",
                name: "VR IT Solutions Founder",
              },
              areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Courses",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Salesforce Training",
                    description:
                      "Comprehensive Salesforce development and administration training",
                  },
                  {
                    "@type": "Course",
                    name: "ServiceNow Training",
                    description:
                      "End-to-end ServiceNow implementation and administration training",
                  },
                  {
                    "@type": "Course",
                    name: "AWS Training",
                    description:
                      "Cloud computing and AWS certification training",
                  },
                ],
              },
            }),
          }}
        />

        {/* Breadcrumb schema for navigation enhancement */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://vr-it-solutions.vercel.app/",
                },
              ],
            }),
          }}
        />
        <Analytics />
        <AnnouncementBanner />
        <div className="relative w-full md:mt-0">
          <Navbar />
          <main id="main-content">{children}</main>
          <RelatedCourses />
          {/* <TestControls /> */}
          <Footer />
          <StickyContact />
          <WhatsAppChat />
        </div>

        {/* Noscript fallback for Google Tag Manager */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      </body>
    </html>
  );
}
