"use client";
import { AlertCircle } from 'lucide-react';

export default function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/90 to-blue-600 text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="inline-flex items-center">
              <AlertCircle className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="whitespace-nowrap">
                <span className="font-medium">New Batch Starting:</span> Salesforce Admin (July 10) &nbsp;|&nbsp; 
                <span className="font-medium">Special Offer:</span> 20% off ServiceNow courses &nbsp;|&nbsp; 
                <span className="font-medium">Placement Update:</span> 5 new hiring partners added &nbsp;|&nbsp; 
                <span className="font-medium">Free Webinar:</span> Cloud Computing Careers - Register now &nbsp;|&nbsp;
              </span>
            </div>
            
            {/* Duplicate content to create seamless loop */}
            <div className="inline-flex items-center ml-8">
              <AlertCircle className="h-4 w-4 mr-3 flex-shrink-0" />
              <span className="whitespace-nowrap">
                <span className="font-medium">New Batch Starting:</span> Salesforce Admin (July 10) &nbsp;|&nbsp; 
                <span className="font-medium">Special Offer:</span> 20% off ServiceNow courses &nbsp;|&nbsp; 
                <span className="font-medium">Placement Update:</span> 5 new hiring partners added &nbsp;|&nbsp; 
                <span className="font-medium">Free Webinar:</span> Cloud Computing Careers - Register now &nbsp;|&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}