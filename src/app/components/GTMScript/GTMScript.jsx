"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function GTMScript({ gtmId }) {
  const pathname = usePathname();
  
  // Set up VRIT tracking object globally
  useEffect(() => {
    console.log("🚀 Initializing GTM and VRIT tracking object...");
    
    // Create a proxy for dataLayer to log all pushes
    const originalDataLayer = window.dataLayer || [];
    
    // Override the push method to log events
    const dataLayerProxy = new Proxy(originalDataLayer, {
      get(target, prop) {
        const value = target[prop];
        
        // If accessing the push method, wrap it with logging
        if (prop === 'push') {
          return function(...args) {
            console.log(`📊 GTM dataLayer.push:`, ...args);
            return value.apply(target, args);
          };
        }
        
        return value;
      }
    });
    
    // Initialize tracking objects
    window.dataLayer = dataLayerProxy;
    window.VRIT = window.VRIT || {};
    
    // Define tracking functions with logging
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
    };
    
    // Course tracking with logging
    window.VRIT.trackCourseView = function(courseData) {
      console.log(`🎓 VRIT.trackCourseView called with:`, courseData);
      
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
    
    // Download course brochure tracking with logging
    window.VRIT.trackBrochureDownload = function(courseData) {
      console.log(`📥 VRIT.trackBrochureDownload called with:`, courseData);
      
      window.dataLayer.push({
        event: 'download_brochure',
        course_title: courseData.title || '',
        course_id: courseData.link || '',
        download_time: new Date().toISOString(),
        file_type: 'pdf'
      });
    };
    
    // Contact form submission tracking with logging
    window.VRIT.trackFormSubmission = function(formData) {
      console.log(`📝 VRIT.trackFormSubmission called with:`, formData);
      
      window.dataLayer.push({
        event: 'form_submission',
        form_id: formData.formId || 'contact_form',
        form_name: formData.formName || 'Contact Form',
        form_location: window.location.pathname,
      });
    };
    
    // Blog post view tracking with logging
    window.VRIT.trackBlogView = function(blogData) {
      console.log(`📰 VRIT.trackBlogView called with:`, blogData);
      
      window.dataLayer.push({
        event: 'blog_view',
        blog_title: blogData.title || '',
        blog_id: blogData.id || '',
        blog_category: blogData.category || '',
        author: blogData.author || ''
      });
    };

    // Set up click tracking for downloads
    const setupClickTracking = () => {
      console.log(`🖱️ Setting up click tracking for downloads...`);
      
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
          console.log(`📥 Download click detected on:`, target);
          
          // Get course title from context if possible
          let courseTitle = '';
          // Check for closest heading
          const heading = target.closest('section')?.querySelector('h1, h2, h3');
          if (heading) courseTitle = heading.innerText;
          
          const eventData = {
            event: 'download_brochure',
            course_title: courseTitle || document.title,
            download_type: 'button_click',
            download_time: new Date().toISOString()
          };
          
          console.log(`📝 Download data being pushed:`, eventData);
          
          window.dataLayer.push(eventData);
        }
      });
    };

    // Wait until DOM is fully loaded to set up click tracking
    if (document.readyState === 'complete') {
      setupClickTracking();
    } else {
      window.addEventListener('load', setupClickTracking);
    }
    
    console.log(`🔍 Tracking initial page view...`);
    // Track the initial page view
    window.VRIT.trackPageView();
    
    // Return cleanup function
    return () => {
      window.removeEventListener('load', setupClickTracking);
      console.log(`🧹 Cleaning up GTM event listeners...`);
    };
  }, []);
  
  // Track page views on route change
  useEffect(() => {
    if (window.VRIT) {
      console.log(`🔄 Route changed to: ${pathname}, tracking page view...`);
      window.VRIT.trackPageView();
    } else {
      console.warn(`⚠️ Route changed but window.VRIT is not available yet`);
    }
  }, [pathname]);

  return (
    <>
      {/* Log when GTM scripts are being rendered */}
      <Script
        id="gtm-debug-log"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `console.log("🏁 GTM initialization starting...");`
        }}
      />
      
      {/* GTM Init Script - Load first */}
      <Script
        id="gtm-init-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log("⚡ Initializing dataLayer array");
            window.dataLayer = window.dataLayer || [];
          `
        }}
      />
      
      {/* GTM Main Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log("🚀 Loading GTM script with ID: ${gtmId}");
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
            console.log("✅ GTM script loaded and initialized");
          `
        }}
      />
      
      {/* Final initialization confirmation */}
      <Script
        id="gtm-verify-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            console.log("🔍 Verifying GTM installation...");
            if (window.google_tag_manager && window.google_tag_manager['${gtmId}']) {
              console.log("✅ GTM container ${gtmId} successfully loaded");
            } else {
              console.warn("⚠️ GTM container ${gtmId} not found. Check installation.");
            }
          `
        }}
      />
    </>
  );
}