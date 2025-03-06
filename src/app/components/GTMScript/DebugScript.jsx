"use client";
import { useEffect } from 'react';

export default function DebugScript() {
  useEffect(() => {
    // Function to check GTM and tracking objects
    const checkTrackingObjects = () => {
      console.group("📊 GTM & Tracking Object Status Check");
      
      // Check if dataLayer exists
      if (window.dataLayer) {
        console.log("✅ dataLayer exists", window.dataLayer);
        console.log(`📊 dataLayer length: ${window.dataLayer.length}`);
        
        // Log the first few events if any exist
        if (window.dataLayer.length > 0) {
          console.log("📝 Recent dataLayer events:");
          window.dataLayer.slice(-3).forEach((event, index) => {
            console.log(`  Event ${index + 1}:`, event);
          });
        }
      } else {
        console.error("❌ dataLayer is not defined");
      }
      
      // Check if GTM is loaded
      if (window.google_tag_manager) {
        console.log("✅ google_tag_manager object exists", Object.keys(window.google_tag_manager));
      } else {
        console.error("❌ google_tag_manager is not defined");
      }
      
      // Check VRIT tracking object
      if (window.VRIT) {
        console.log("✅ window.VRIT exists", Object.keys(window.VRIT));
        
        // Check each tracking method
        const methods = [
          'trackPageView',
          'trackCourseView',
          'trackBrochureDownload',
          'trackFormSubmission',
          'trackBlogView'
        ];
        
        methods.forEach(method => {
          if (typeof window.VRIT[method] === 'function') {
            console.log(`  ✅ window.VRIT.${method} is available`);
          } else {
            console.error(`  ❌ window.VRIT.${method} is not a function`);
          }
        });
        
        // Test a tracking call if available
        if (typeof window.VRIT.trackPageView === 'function') {
          console.log("🧪 Testing trackPageView method (dev only)...");
          try {
            window.VRIT.trackPageView();
            console.log("  ✅ trackPageView executed without errors");
          } catch (e) {
            console.error("  ❌ Error executing trackPageView:", e);
          }
        }
      } else {
        console.error("❌ window.VRIT is not defined");
      }
      
      console.groupEnd();
    };
    
    // Create a visual indicator on the page
    const createDebugIndicator = () => {
      // Only in development
      if (process.env.NODE_ENV !== 'production') {
        const indicator = document.createElement('div');
        indicator.style.position = 'fixed';
        indicator.style.bottom = '10px';
        indicator.style.right = '10px';
        indicator.style.backgroundColor = window.VRIT ? '#4CAF50' : '#F44336';
        indicator.style.color = 'white';
        indicator.style.padding = '5px 10px';
        indicator.style.borderRadius = '3px';
        indicator.style.fontSize = '12px';
        indicator.style.zIndex = '9999';
        indicator.style.cursor = 'pointer';
        indicator.innerText = window.VRIT ? 'GTM: Active ✓' : 'GTM: Inactive ✗';
        
        indicator.addEventListener('click', () => {
          checkTrackingObjects();
        });
        
        document.body.appendChild(indicator);
      }
    };
    
    // Create a function to test all tracking methods
    const testAllTrackingMethods = () => {
      if (!window.VRIT) return;
      
      console.group("🧪 Testing all tracking methods");
      
      try {
        // Test page view tracking
        console.log("Testing trackPageView...");
        window.VRIT.trackPageView();
        
        // Test course view tracking
        console.log("Testing trackCourseView...");
        window.VRIT.trackCourseView({
          title: "Test Course",
          id: "test-course-123",
          category: "Test Category",
          mode: "online"
        });
        
        // Test brochure download tracking
        console.log("Testing trackBrochureDownload...");
        window.VRIT.trackBrochureDownload({
          title: "Test Course Brochure",
          link: "test-course-123"
        });
        
        // Test form submission tracking
        console.log("Testing trackFormSubmission...");
        window.VRIT.trackFormSubmission({
          formId: "test_form",
          formName: "Test Contact Form"
        });
        
        // Test blog view tracking
        console.log("Testing trackBlogView...");
        window.VRIT.trackBlogView({
          title: "Test Blog Post",
          id: "test-blog-123",
          category: "Test Blog Category",
          author: "Test Author"
        });
        
        console.log("✅ All tracking methods tested successfully");
      } catch (e) {
        console.error("❌ Error testing tracking methods:", e);
      }
      
      console.groupEnd();
    };
    
    // Run initial check
    setTimeout(checkTrackingObjects, 1000);
    
    // Run a more thorough check after everything should be loaded
    setTimeout(() => {
      checkTrackingObjects();
      createDebugIndicator();
      
      // Only in development
      if (process.env.NODE_ENV !== 'production') {
        // Add debug controls to console
        console.log("🛠️ DEBUG CONTROLS AVAILABLE:");
        console.log("  - Run window.checkGTM() to verify GTM status");
        console.log("  - Run window.testTracking() to test all tracking methods");
        
        // Add global debug functions
        window.checkGTM = checkTrackingObjects;
        window.testTracking = testAllTrackingMethods;
      }
    }, 3000);
  }, []);
  
  return null;
}