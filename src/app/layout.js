import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StickyContact from "./components/StickyContact/StickyContact";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import AnnouncementBanner from "./components/AnnouncementBanner/AnnouncementBanner";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import Script from "next/script";

// Set your actual GTM ID here
const GTM_ID = "GTM-PT63D72L";  // Replace with your actual GTM ID

// Optimize web fonts for performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add display swap for better CLS
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Add display swap for better CLS
  preload: true,
});

// Viewport optimization
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Changed from 1 to 5 for better accessibility
  minimumScale: 1,
  userScalable: true, // Enable zooming for accessibility
  themeColor: '#4f46e5', // Add theme color (match your primary color)
};

// Enhanced metadata for SEO
export const metadata = {
  metadataBase: new URL('https://vr-it-solutions.vercel.app/'),
  title: {
    default: 'VR IT Solutions - Best IT Training Institute in Hyderabad | Online & Offline Courses',
    template: '%s | VR IT Solutions - IT Training Institute'
  },
  description: 'Transform your career with VR IT Solutions, Hyderabad\'s premier IT training institute. Expert-led courses in Salesforce, ServiceNow, Cloud Computing, DevOps, Full Stack Development, and more with placement assistance. Join our online & offline IT training programs today!',
  keywords: [
    'IT Training Institute',
    'Online IT Courses',
    'Classroom Training',
    'Salesforce Training',
    'ServiceNow Training',
    'Cloud Computing',
    'DevOps Training',
    'Full Stack Development',
    'Data Science Courses',
    'Placement Assistance',
    'Job Support',
    'Corporate Training',
    'Hyderabad IT Institute',
    'Ameerpet Training Center',
    'VR IT Solutions'
  ],
  authors: [{ name: 'VR IT Solutions', url: 'https://vr-it-solutions.vercel.app' }],
  creator: 'VR IT Solutions',
  publisher: 'VR IT Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://vr-it-solutions.vercel.app',
    languages: {
      'en-US': 'https://vr-it-solutions.vercel.app',
      'en-IN': 'https://vr-it-solutions.vercel.app',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vr-it-solutions.vercel.app',
    siteName: 'VR IT Solutions',
    title: 'VR IT Solutions - Best IT Training Institute in Hyderabad | Online & Offline Programs',
    description: 'Leading IT training institute offering professional courses in Hyderabad. Expert-led online & offline training in Salesforce, ServiceNow, Cloud Computing and more with placement assistance.',
    images: [
      {
        url: 'https://vr-it-solutions.vercel.app/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'VR IT Solutions - IT Training Programs',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vrit_solutions',
    creator: '@vrit_solutions',
    title: 'VR IT Solutions - Best IT Training Institute in Hyderabad',
    description: 'Leading IT training institute offering professional courses with expert instructors and placement assistance in Hyderabad',
    images: ['https://vr-it-solutions.vercel.app/images/og/home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
    bing: 'your-bing-verification',
    other: {
      'facebook-domain-verification': 'your-facebook-domain-verification',
      'baidu-site-verification': 'your-baidu-verification'
    }
  },
  category: 'education',
  applicationName: 'VR IT Solutions',
  referrer: 'origin-when-cross-origin',
  'news:keywords': 'IT Training, Tech Education, Career Development, Hyderabad',
  'og:site_name': 'VR IT Solutions',
  'og:locale:alternate': ['en_US', 'en_GB'],
};

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
        {/* Google Tag Manager - Initialize dataLayer and load GTM */}
        <Script
          id="gtm-init-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            `
          }}
        />
        
        {/* Google Tag Manager - Main script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `
          }}
        />
        
        {/* JSON-LD structured data for local business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://vr-it-solutions.vercel.app/#organization",
              "name": "VR IT Solutions",
              "alternateName": "VRIT Solutions",
              "url": "https://vr-it-solutions.vercel.app/",
              "logo": "https://vr-it-solutions.vercel.app/logo.png",
              "sameAs": [
                "https://www.facebook.com/vritsolutions",
                "https://twitter.com/vrit_solutions",
                "https://www.linkedin.com/company/vr-it-solutions",
                "https://www.instagram.com/vritsolutions",
                "https://www.youtube.com/channel/vritsolutions"
              ],
              "description": "VR IT Solutions is a premier IT training institute offering both online and offline courses with expert instructors and placement assistance in Hyderabad.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "506/A, Aditya Enclave, Ameerpet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.4437",
                "longitude": "78.3819"
              },
              "telephone": "+91-9032734343",
              "email": "info@vritsolutions.com",
              "foundingDate": "2010",
              "founder": {
                "@type": "Person",
                "name": "VR IT Solutions Founder"
              },
              "areaServed": ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Courses",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Salesforce Training",
                    "description": "Comprehensive Salesforce development and administration training"
                  },
                  {
                    "@type": "Course",
                    "name": "ServiceNow Training",
                    "description": "End-to-end ServiceNow implementation and administration training"
                  },
                  {
                    "@type": "Course",
                    "name": "AWS Training",
                    "description": "Cloud computing and AWS certification training"
                  }
                ]
              }
            })
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
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://vr-it-solutions.vercel.app/"
                }
              ]
            })
          }}
        />

        <AnnouncementBanner />
        <div className="relative w-full md:mt-0">
          <Navbar />
          <main id="main-content">{children}</main>
          <RelatedCourses />
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
            style={{display: 'none', visibility: 'hidden'}}
            title="Google Tag Manager"
          />
        </noscript>
        
        {/* Custom GTM event tracking scripts */}
        <Script
          id="gtm-custom-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Wait for DOM to be ready
              document.addEventListener('DOMContentLoaded', function() {
                // Initialize tracking helpers
                window.VRIT = window.VRIT || {};
                
                // Basic page view tracking
                window.VRIT.trackPageView = function() {
                  const pageData = {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: window.location.pathname,
                  };
                  
                  // Get page type from URL path
                  const path = window.location.pathname;
                  if (path === '/' || path === '/index') {
                    pageData.page_type = 'home';
                  } else if (path.includes('/contactus')) {
                    pageData.page_type = 'contact';
                  } else if (path.includes('/blogs') || path.includes('/blog/')) {
                    pageData.page_type = 'blog';
                    // Try to get blog title if available
                    const blogTitle = document.querySelector('h1')?.innerText;
                    if (blogTitle) pageData.blog_title = blogTitle;
                  } else if (path.includes('/aboutus')) {
                    pageData.page_type = 'about';
                  } else if (path.includes('/services')) {
                    pageData.page_type = 'services';
                  } else if (path.includes('/courses') && !path.includes('/courses/')) {
                    pageData.page_type = 'all_courses';
                  } else if (path.includes('/placements')) {
                    pageData.page_type = 'placements';
                  } else if (path.includes('azure') || path.includes('aws') || path.includes('salesforce') || path.includes('training')  || path.includes('sap') || path.includes('devops') || path.includes('service-now') || path.includes('data') || path.includes('full') || path.includes('stack') || path.includes('development') || path.includes('cloud') || path.includes('computing') ) {
                    // Individual course pages detection
                    pageData.page_type = 'course';
                    // Try to get course title if available
                    const courseTitle = document.querySelector('h1')?.innerText;
                    if (courseTitle) pageData.course_title = courseTitle;
                  }
                  
                  // Push to dataLayer
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'page_view',
                    ...pageData
                  });
                };
                
                // Course tracking
                window.VRIT.trackCourseView = function(courseData) {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'view_item',
                    ecommerce: {
                      items: [{
                        item_name: courseData.title,
                        item_id: courseData.id || courseData.link || '',
                        item_category: courseData.category || 'IT Training',
                        item_variant: courseData.mode || 'online'
                      }]
                    }
                  });
                };
                
                // Download course brochure tracking
                window.VRIT.trackBrochureDownload = function(courseData) {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'download_brochure',
                    course_title: courseData.title || '',
                    course_id: courseData.link || '',
                    download_time: new Date().toISOString(),
                    file_type: 'pdf'
                  });
                };
                
                // Contact form submission tracking
                window.VRIT.trackFormSubmission = function(formData) {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'form_submission',
                    form_id: formData.formId || 'contact_form',
                    form_name: formData.formName || 'Contact Form',
                    form_location: window.location.pathname,
                  });
                };
                
                // Blog post view tracking
                window.VRIT.trackBlogView = function(blogData) {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'blog_view',
                    blog_title: blogData.title || '',
                    blog_id: blogData.id || '',
                    blog_category: blogData.category || '',
                    author: blogData.author || ''
                  });
                };

                // Auto-track downloads
                document.addEventListener('click', function(e) {
                  // Find closest link or button
                  const target = e.target.closest('a, button');
                  if (!target) return;
                  
                  // Check for download buttons/links
                  if (
                    target.textContent.toLowerCase().includes('download') ||
                    target.getAttribute('href')?.includes('.pdf') ||
                    target.getAttribute('data-download') === 'true'
                  ) {
                    // Get course title from context if possible
                    let courseTitle = '';
                    // Check for closest heading
                    const heading = target.closest('section')?.querySelector('h1, h2, h3');
                    if (heading) courseTitle = heading.innerText;
                    
                    window.dataLayer.push({
                      event: 'download_brochure',
                      course_title: courseTitle || document.title,
                      download_type: 'button_click',
                      download_time: new Date().toISOString()
                    });
                  }
                });
                
                // Track the current page on load
                window.VRIT.trackPageView();
              });
            `
          }}
        />
      </body>
    </html>
  );
}