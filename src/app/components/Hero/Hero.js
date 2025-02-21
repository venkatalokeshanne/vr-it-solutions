import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const stats = [
    { value: "15K+", label: "Students Trained" },
    { value: "95%", label: "Placement Rate" },
    { value: "20+", label: "Expert Trainers" },
    { value: "50+", label: "Corporate Clients" },
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-primary/90 min-h-[85vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-white text-sm">
                Live Online Training Available
              </span>
            </div>

            <div className="space-y-4">
              {/* Company Name with Enhanced Styling */}
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                    VR IT Solutions
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 text-sm font-medium text-white bg-primary/30 rounded-lg border border-primary/40">
                    Since 2015
                  </span>

                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Transform Your Career with{" "}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                    Expert-Led Training
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/10 -rotate-1"></span>
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Gain in-demand skills with our industry-focused courses. Join
              thousands of successful professionals who trust VR IT Solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-200">
                <div className="flex items-center gap-2">
                  Start Learning
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
              <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm transition-all duration-200 border border-white/20">
                <div className="flex items-center gap-2">
                  Schedule Consultation
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Contact Details */}
{/* Contact Details */}
<div className="pt-8 border-t border-white/10">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
    {/* Phone */}
    <div className="flex items-center gap-3 group">
      <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
        <PhoneIcon className="h-5 w-5" />
      </div>
      <span className="truncate group-hover:text-white transition-colors">
      +91-9032734343
      </span>
    </div>
    
    {/* Email */}
    <div className="flex items-center gap-3 group">
      <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
        <MailIcon className="h-5 w-5" />
      </div>
      <span className=" group-hover:text-white transition-colors">
      info@vritsol.com
      </span>
    </div>
    
    {/* Address */}
    <div className="flex items-center gap-3 group">
      <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
        <MapPinIcon className="h-5 w-5" />
      </div>
      <span className="truncate group-hover:text-white transition-colors">
        Hyderabad, India - 500016
      </span>
    </div>
  </div>
</div>

            {/* Mobile Stats */}
            <div className="lg:hidden pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
