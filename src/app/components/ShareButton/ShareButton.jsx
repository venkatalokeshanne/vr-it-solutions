"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title, text, url }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(url).then(
        () => {
          alert("Link copied to clipboard!");
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    }
  };

  return (
    <button
      className="flex items-center text-gray-500 hover:text-primary"
      onClick={handleShare}
    >
      <Share2 size={16} className="mr-1" />
      <span>Share</span>
    </button>
  );
}