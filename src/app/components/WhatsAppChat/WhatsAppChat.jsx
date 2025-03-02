"use client";
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hasShownAutomatically, setHasShownAutomatically] = useState(false);
  const inputRef = useRef(null);
  
  // Replace with your WhatsApp number (international format without + or spaces)
  const whatsappNumber = "919032734343"; // Change to your number
  
  // Auto-open the chat after a delay when site loads
  useEffect(() => {
    if (!hasShownAutomatically) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShownAutomatically(true);
        
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300);
      }, 5000); // 5 seconds delay before showing

      return () => clearTimeout(timer);
    }
  }, [hasShownAutomatically]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Format the message to include name and contact
    const formattedMessage = `Name: ${name || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`;
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="fixed bottom-16 right-2 z-50">
      {/* WhatsApp Chat Button */}
      <button 
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
      
      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform origin-bottom-right border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="bg-green-500 p-4 text-white relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white opacity-80 hover:opacity-100"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-medium">Chat with us on WhatsApp</h3>
                <p className="text-xs opacity-90">We'll respond as soon as possible</p>
              </div>
            </div>
          </div>
          
          {/* Welcome Message */}
          <div className="p-3 bg-green-50 border-b border-green-100">
            <p className="text-sm text-gray-700">
              👋 Hi there! Need any assistance with our courses or training programs?
            </p>
          </div>
          
          {/* Chat Body */}
          <div className="p-4 bg-gray-50">
            {submitted ? (
              <div className="bg-green-100 text-green-800 p-3 rounded-md text-sm">
                Thanks for your message! A new WhatsApp chat has been opened.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    ref={inputRef}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Your Phone (optional)</label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-1">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={3}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Start WhatsApp Chat</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}