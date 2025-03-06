"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GTMScript({ gtmId, ga4Id }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Set up tracking objects globally
  useEffect(() => {
    console.log("🚀 Initializing GTM and GA4 tracking...");
    
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Initialize VRIT tracking object
    window.VRIT = window.VRIT || {};
    
    // Define GTM tracking functions
    window.VRIT.trackPageView = function() {
      console.log(`🔍 VRIT.trackPageView called on: ${window.location.pathname}`);
      
      const pageData = {
        event: 'page_view',
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
      } else if (
          path.includes('azure') || path.includes('aws') || 
          path.includes('salesforce') || path.includes('training') || 
          path.includes('sap') || path.includes('devops') || 
          path.includes('service-now') || path.includes('data') || 
          path.includes('full') || path.includes('stack') || 
          path.includes('development') || path.includes('cloud') || 
          path.includes('computing')
      ) {
        // Individual course pages detection
        pageData.page_type = 'course';
        // Try to get course title if available
        const courseTitle = document.querySelector('h1')?.innerText;
        if (courseTitle) pageData.course_title = courseTitle;
      }
      
      console.log(`📝 Page data being pushed:`, pageData);
      
      // Push to dataLayer
      window.dataLayer.push(pageData);
      
      // Direct GA4 tracking if available
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          send_to: ga4Id
        });
      }
    };
    
    // Define more tracking functions...
    // ...
    
    console.log(`🔍 Tracking initial page view...`);
    // Track the initial page view
    setTimeout(() => {
      window.VRIT.trackPageView();
    }, 500); // Small delay to ensure gtag is loaded
    
    // Return cleanup function
    return () => {
      console.log(`🧹 Cleaning up GTM and GA4 event listeners...`);
    };
  }, [ga4Id]);
  
  // Track page views on route change
  useEffect(() => {
    if (window.VRIT) {
      console.log(`🔄 Route changed to: ${pathname}, tracking page view...`);
      
      // Small timeout to ensure the page has loaded properly
      setTimeout(() => {
        window.VRIT.trackPageView();
      }, 100);
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* GTM Init Script */}
      <Script
        id="gtm-init-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
          `
        }}
      />
      
      {/* GA4 Script */}
      {ga4Id && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', {
                  page_path: window.location.pathname,
                  send_page_view: false
                });
              `
            }}
          />
        </>
      )}
      
      {/* GTM Main Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `
        }}
      />
    </>
  );
}