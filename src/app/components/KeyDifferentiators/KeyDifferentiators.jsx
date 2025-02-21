// components/KeyDifferentiators.jsx
import { useState } from 'react';
import { TerminalSquare, Users, Clock, BarChart2, Briefcase, CheckCircle } from 'lucide-react';

export default function KeyDifferentiators({data}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const differentiators = [
    {
      id: 1,
      icon: <TerminalSquare className="h-8 w-8" />,
      title: "Comprehensive Practical Sessions",
      description: `Every theory session includes hands-on practice with real ${data.course} interview questions, allowing you to master concepts at your own pace.`
    },
    {
      id: 2,
      icon: <Briefcase className="h-8 w-8" />,
      title: "Live Project Experience",
      description: "Apply your skills to real-world projects that mirror actual business scenarios, building the practical experience employers value."
    },
    {
      id: 3,
      icon: <Users className="h-8 w-8" />,
      title: "Industry Expert Instructors",
      description: `Learn from active professionals including mid-level managers and technical specialists with real-world ${data.course} expertise.`
    },
    {
      id: 4,
      icon: <Clock className="h-8 w-8" />,
      title: "40-Hour Mastery Program",
      description: "Our accelerated curriculum gets you job-ready in just 40 hours, with flexible weekend or weekday scheduling options."
    },
    {
      id: 5,
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Always Current Curriculum",
      description: `Course content updated every 6 months to align with the latest ${data.course} technologies and industry best practices.`
    },
    {
      id: 6,
      icon: <CheckCircle className="h-8 w-8" />,
      title: "100% Placement Guarantee",
      description: "VRIT Solutions stands behind qualified graduates with our placement guarantee program for deserving students."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 overflow-hidden bg-gradient-to-b from-white to-primary-light/20 relative">
    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary-light rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-96 -left-64 w-96 h-96 bg-primary-light rounded-full opacity-50 blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary font-medium text-sm mb-4">
          Why Choose Our Training
        </div>
        <h2 className="text-4xl font-bold mb-5 leading-tight">
          Our Key <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Differentiators</span>
        </h2>
        <p className="text-lg text-gray-600">
          What makes our {data.course} training the preferred choice for aspiring professionals
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {differentiators.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm hover:shadow-xl relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-tr from-primary-light to-primary-light/50 opacity-0 transition-opacity duration-300 ${
                hoveredCard === item.id ? 'opacity-100' : ''
              }`}
            ></div>
            
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary-light text-primary transition-transform duration-300 ${
                hoveredCard === item.id ? 'scale-110' : ''
              }`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-primary-light to-primary-light/50 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl overflow-hidden relative shadow-xl">
          {/* ...existing decorative shapes... */}
          
          <div className="p-10 md:p-12 text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Advance Your {data.course} Career?</h3>
            <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto">
              Join our comprehensive training program designed for real-world success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Enroll Now
              </button>
              <button className="bg-transparent text-white border-2 border-white border-opacity-30 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { value: "98%", label: "Placement Rate" },
          { value: data.hoursContent, label: "Training Duration" },
          { value: "24/7", label: "Support Access" },
          { value: "100%", label: "Practical Focus" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}