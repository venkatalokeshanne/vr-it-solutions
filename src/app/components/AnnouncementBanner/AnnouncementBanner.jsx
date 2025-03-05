"use client";
import { useEffect, useState } from "react";
import {
  AlertCircle,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { client } from "@/lib/sanity.client";

export default function AnnouncementBanner() {
  // Social media links with orange color for text and icon
  const socialLinks = [
    {
      icon: <Facebook className="text-orange-400 hover:text-orange-300" />,
      mobileIcon: (
        <Facebook size={12} className="text-orange-400 hover:text-orange-300" />
      ),
      href: "https://www.facebook.com/vritsolutions/",
      label: "Facebook",
      color: "hover:text-orange-300",
    },
    {
      icon: <Twitter className="text-orange-400 hover:text-orange-300" />,
      mobileIcon: (
        <Twitter size={12} className="text-orange-400 hover:text-orange-300" />
      ),
      href: "https://x.com/vritsolutions",
      label: "Twitter",
      color: "hover:text-orange-300",
    },
    {
      icon: <Youtube className="text-orange-400 hover:text-orange-300" />,
      mobileIcon: (
        <Youtube size={12} className="text-orange-400 hover:text-orange-300" />
      ),
      href: "https://www.youtube.com/channel/UCNbaPhgRjVUDcJSh70X-ZtA",
      label: "YouTube",
      color: "hover:text-orange-300",
    },
    {
      icon: <Linkedin className="text-orange-400 hover:text-orange-300" />,
      mobileIcon: (
        <Linkedin size={12} className="text-orange-400 hover:text-orange-300" />
      ),
      href: "https://x.com/vritsolutions",
      label: "LinkedIn",
      color: "hover:text-orange-300",
    },
  ];

  const [announcements, setAnnouncements] = useState([]);

  // Fetch announcements from Sanity
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "announcementSettings"][0].announcements`
        );
        if (data && Array.isArray(data) && data.length > 0) {
          setAnnouncements(data);
        }
      } catch (error) {
        console.error("Error fetching announcement settings:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/90 to-blue-600 text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden flex justify-between items-center">
        {/* Announcement Marquee */}
        <div className="marquee-container flex-1 overflow-hidden">
          <div className="marquee-content">
            <div className="inline-flex items-center">
              <AlertCircle className="h-4 w-4 mr-3 flex-shrink-0 text-orange-400" />
              <span className="whitespace-nowrap">
                {announcements.map((announcement, index) => {
                  // Split content at the first colon if available
                  return <span key={index}>{announcement.content} &nbsp;|&nbsp;</span>;
                })}
              </span>
            </div>

            {/* Duplicate content for seamless loop */}
            <div className="inline-flex items-center">
              <AlertCircle className="h-4 w-4 mr-3 flex-shrink-0 text-orange-400" />
              <span className="whitespace-nowrap">
                {announcements.map((announcement, index) => {
                  // Split content at the first colon if available
                  return <span key={index}>{announcement.content} &nbsp;|&nbsp;</span>;
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Links - Desktop version (visible on medium screens and up) */}
        <div className="hidden md:flex items-center space-x-3 ml-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`transition-colors duration-200 ${social.color}`}
            >
              <div className="bg-transparent rounded-full p-1.5 hover:bg-white/10 transition-all">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>

        {/* Social Media Links - Mobile version (visible on small screens) */}
        <div className="flex md:hidden items-center space-x-2 ml-2">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`transition-colors duration-200 ${social.color}`}
            >
              <div className="bg-transparent rounded-full p-1 hover:bg-white/10 transition-all">
                {social.mobileIcon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
