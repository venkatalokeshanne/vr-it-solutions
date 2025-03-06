"use client";
import { useState } from 'react';

export default function TestControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [log, setLog] = useState([]);
  
  const trackEvent = (type) => {
    try {
      if (!window.VRIT) {
        addToLog("❌ Error: window.VRIT is not available");
        return;
      }
      
      switch (type) {
        case 'pageview':
          window.VRIT.trackPageView();
          addToLog("✅ Tracked pageview");
          break;
        case 'course':
          window.VRIT.trackCourseView({
            title: "Test Course from Button",
            id: "test-course-from-button",
            category: "Test Category",
            mode: "online"
          });
          addToLog("✅ Tracked course view");
          break;
        case 'download':
          window.VRIT.trackBrochureDownload({
            title: "Test Brochure Download",
            link: "test-download-link"
          });
          addToLog("✅ Tracked brochure download");
          break;
        case 'form':
          window.VRIT.trackFormSubmission({
            formId: "test_form_button",
            formName: "Test Form Button"
          });
          addToLog("✅ Tracked form submission");
          break;
        case 'blog':
          window.VRIT.trackBlogView({
            title: "Test Blog from Button",
            id: "test-blog-from-button",
            category: "Testing",
            author: "Test User"
          });
          addToLog("✅ Tracked blog view");
          break;
        default:
          addToLog(`❓ Unknown event type: ${type}`);
      }
    } catch (e) {
      addToLog(`❌ Error: ${e.message}`);
    }
  };
  
  const addToLog = (message) => {
    setLog(prevLog => [message, ...prevLog.slice(0, 9)]);
  };
  
  const checkGTMStatus = () => {
    const gtmActive = !!window.google_tag_manager;
    const vritActive = !!window.VRIT;
    
    addToLog(`🔍 GTM active: ${gtmActive ? "✅" : "❌"}`);
    addToLog(`🔍 VRIT active: ${vritActive ? "✅" : "❌"}`);
    
    if (window.dataLayer) {
      addToLog(`📊 dataLayer has ${window.dataLayer.length} events`);
    }
  };
  
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  
  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isOpen ? (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm border border-gray-300">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">GTM Testing Panel</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-2 mb-4">
            <button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => trackEvent('pageview')}
            >
              Track Page View
            </button>
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => trackEvent('course')}
            >
              Track Course View
            </button>
            <button 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => trackEvent('download')}
            >
              Track Download
            </button>
            <button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => trackEvent('form')}
            >
              Track Form Submit
            </button>
            <button 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => trackEvent('blog')}
            >
              Track Blog View
            </button>
            <button 
              className="w-full bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
              onClick={checkGTMStatus}
            >
              Check GTM Status
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-3">
            <p className="text-xs font-bold mb-1">Event Log:</p>
            <div className="bg-gray-100 p-2 rounded text-xs h-32 overflow-y-auto">
              {log.length > 0 ? (
                log.map((entry, i) => (
                  <div key={i} className="mb-1">{entry}</div>
                ))
              ) : (
                <p className="text-gray-500 italic">No events logged yet</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <button 
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
          title="Open GTM Testing Panel"
        >
          GTM
        </button>
      )}
    </div>
  );
}