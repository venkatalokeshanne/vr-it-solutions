"use client";
import { Facebook, Twitter, Link, Linkedin } from 'lucide-react';

const SocialShare = ({ url, title, description }) => {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`
  };

  return (
    <div className="flex space-x-4">
      {Object.entries(shareLinks).map(([platform, link]) => (
        <a
          key={platform}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {platform === 'facebook' && <Facebook className="w-5 h-5" />}
          {platform === 'twitter' && <Twitter className="w-5 h-5" />}
          {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
        </a>
      ))}
    </div>
  );
};

export default SocialShare;