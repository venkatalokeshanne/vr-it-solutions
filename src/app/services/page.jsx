import Link from 'next/link';
import { Laptop, Users, Briefcase } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Online Training",
      subtitle: "Online Training institutes in Hyderabad",
      description: `A busy professional like you may not have the required bandwidth to attend class room training and hence to facilitate easy and effective learning, VR IT solutions has specially designed online mode of training for all the courses. We adopt the best practices, excellent learning pedagogies and easy to follow examples to make your learning experience, quite pleasurable and enriching. This online training is supported by exemplary practical training to make you a complete professional and job ready. We offer training in basic and advanced courses to meet your specific career goals.`,
      highlights: [
        "Learn anytime, anywhere",
        "Complete career support",
        "Basic and advanced courses"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "ClassRoom Training",
      subtitle: "ClassRoom Training institutes in Hyderabad",
      description: `For more discerning learners, who have the required time to invest, a good option to get started is classroom training. Our classrooms are equipped with state-of-the-art infrastructure coupled with best faculty, drawn from reputed institutes (IIMs, IITs, etc), who provide the best learning experience including clarifying all the queries/doubts raised by the students. These theory sessions are supported by adequate practical sessions to get hands-on with latest tools and technologies with opportunity to work on complex assignments to simulate real life work experience.`,
      highlights: [
        "State-of-the-art infrastructure",
        "Expert faculty from IIMs, IITs",
        "Hands-on practical sessions"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Job Support",
      subtitle: "Job Support and Placement institute in hyderabad",
      description: `Our responsibility doesn't end by offering good placements in companies! Our vision and strategies work beyond that. Our unique on the job support training ensures that you get adequate support on the job once you get placed in any company. Consider a scenario like this! A student, who has successfully undergone training with us might eventually get placed in a good company and get an opportunity to work on his/her first project. During the course of the project engagement, if a student stumbles upon any issues or finds difficulty in working on a specific module due to technical or functional complexities, we at VR IT offer full support during such transition period.`,
      highlights: [
        "On-the-job support",
        "Transition period assistance",
        "Corporate environment adaptation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive training and support to launch your IT career
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Service Content */}
              <div className="flex-1 space-y-6">
                <div className="text-primary">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <h3 className="text-xl text-gray-600">{service.subtitle}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center text-gray-600">
                      <span className="h-2 w-2 rounded-full bg-primary mr-3"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contactus" 
                  className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>

              {/* Service Image */}
              <div className="flex-1">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={`/support${index}.jpg`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join VR IT now, get ahead of others and make an enriching career!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Make the best out of your investment and time
          </p>
          <Link 
            href="/contactus"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-200"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;