"use client";

import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function BlogAdminButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    // Only show button on the main blogs page
    setShowButton(pathname === '/blogs');
  }, [pathname]);
  
  if (!showButton) {
    return null;
  }
  
  return (
    <Link
      href="/blogs/create"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="fixed bottom-32 right-2 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark transition-colors z-50 flex items-center justify-center"
      aria-label="Create new blog post"
    >
      <PlusCircle size={36} />
      {showTooltip && (
        <span className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
          Create blog
        </span>
      )}
    </Link>
  );
}