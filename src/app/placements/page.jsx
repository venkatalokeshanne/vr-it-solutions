"use client";
import { useState } from 'react';
import { Building2, Award, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image'; // Added Next.js Image import
import Link from 'next/link'; // Added for better navigation

const PlacementsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const statistics = [
    {
      icon: <Building2 className="w-8 h-8" />,
      value: "500+",
      label: "Partner Companies"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "95%",
      label: "Placement Rate"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "40 LPA",
      label: "Highest Package"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "10000+",
      label: "Students Placed"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Microsoft",
      image: "/testimonials/priya.jpg",
      content: "VR IT's training helped me secure my dream job. The practical exposure and job support were invaluable.",
      package: "24 LPA",
      course: "Full Stack Development"
    },
    {
      name: "Rahul Verma",
      role: "DevOps Engineer",
      company: "Amazon",
      image: "/testimonials/rahul.jpg",
      content: "The DevOps course at VR IT was comprehensive and industry-focused. The hands-on labs and real-world projects made all the difference.",
      package: "28 LPA",
      course: "DevOps & Cloud"
    },
    {
      name: "Aisha Khan",
      role: "Data Scientist",
      company: "Google",
      image: "/testimonials/aisha.jpg",
      content: "From a fresher to a Data Scientist at Google - VR IT made this journey possible with their excellent curriculum and mentorship.",
      package: "32 LPA",
      course: "Data Science & ML"
    },
    {
      name: "Sriram Iyer",
      role: "SAP Consultant",
      company: "Deloitte",
      image: "/testimonials/sriram.jpg",
      content: "The SAP training program was exactly what I needed. The trainers' industry experience and practical insights were exceptional.",
      package: "18 LPA",
      course: "SAP FICO"
    },
    {
      name: "Jennifer Thomas",
      role: "Cloud Architect",
      company: "IBM",
      image: "/testimonials/jennifer.jpg",
      content: "The AWS certification course was comprehensive and the placement support was outstanding. Landed my dream role at IBM.",
      package: "26 LPA",
      course: "Cloud Computing"
    },
    {
      name: "Arjun Reddy",
      role: "Full Stack Developer",
      company: "Oracle",
      image: "/testimonials/arjun.jpg",
      content: "The full stack course curriculum was up-to-date with industry standards. The mock interviews really prepared me well.",
      package: "22 LPA",
      course: "MERN Stack"
    }
  ];

  const companies = [
    { name: "Microsoft", logo: "/companies/microsoft.png", category: "product" },
    { name: "Google", logo: "/companies/google.png", category: "product" },
    { name: "Amazon", logo: "/companies/amazon.png", category: "product" },
    { name: "TCS", logo: "/companies/tcs.png", category: "service" },
    // Add more companies...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Placements</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our placement record speaks for itself. Join us to kickstart your career with leading technology companies.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-primary flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Companies Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recruiting Partners</h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Companies
            </button>
            <button
              onClick={() => setActiveTab('product')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'product'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Product Companies
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'service'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Service Companies
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {companies
              .filter(company => activeTab === 'all' || company.category === activeTab)
              .map((company) => (
                <div
                  key={company.name}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
                >
                  {/* Changed from img to Image component */}
                  <div className="relative w-full h-12">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 160px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {/* Changed from img to Image component */}
                      <div className="relative h-4 w-16">
                        <Image
                          src={`/companies/${testimonial.company.toLowerCase()}.png`}
                          alt={`${testimonial.company} logo`}
                          fill
                          sizes="64px"
                          className="object-contain object-left"
                        />
                      </div>
                      <span className="text-sm text-gray-500 ml-2">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">{testimonial.content}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-sm">
                    <span className="text-gray-500">Course: </span>
                    <span className="text-primary font-medium">{testimonial.course}</span>
                  </div>
                  <div className="bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-primary font-semibold">{testimonial.package}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Success Story
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join VR IT and take the first step towards your dream career
          </p>
          {/* Changed from a tag to Link component */}
          <Link
            href="/contactus"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-200"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlacementsPage;