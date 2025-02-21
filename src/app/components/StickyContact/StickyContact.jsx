"use client";
import { Mail, Phone, X } from 'lucide-react';
import { useState } from 'react';

const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-950 text-white py-3 px-4 sm:px-6 flex items-center justify-between border-t border-gray-800">
        <div className="flex items-center gap-6">
          <a 
            href="tel:+919032734343" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 90327 34343</span>
          </a>
          <a 
            href="mailto:info@vritsol.com" 
            className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">info@vritsol.com</span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors"
        >
          {isOpen ? (
            <span className="flex items-center gap-1">
              <X className="h-4 w-4" />
              Close
            </span>
          ) : (
            'Quick Enquiry'
          )}
        </button>
      </div>

      {/* Contact Form */}
      {isOpen && (
        <div className="bg-white shadow-lg border-t border-gray-200 p-4">
          <form className="flex flex-wrap gap-4 items-end max-w-5xl mx-auto">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option value="">Select Course</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="datascience">Data Science</option>
                <option value="cloud">Cloud Computing</option>
                <option value="devops">DevOps</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StickyContact;