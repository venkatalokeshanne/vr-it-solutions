"use client";
import { redirect } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
  const courses = [
    'Hadoop', 'Workday Online Training', 'DevOps Online Training',
    'DataScience Training', 'Python Online Training', 'Mulesoft online Training',
    'Spark & Scala', 'ServiceNow', 'Pega', 'Oracle Fusion Financials'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">About Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let your investment reap huge returns – it's the knowledge that drives the intellect and powers you to be a next generation technocrat!
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
            <p>
              We are one of the reputed global online training institutes, recognized for excellence in imparting quality training, affordable fees and above all the personal attention that we offer to groom you into a full fledged professional. Our highly experienced faculty with over 50+ years of combined experience aims to impart training par excellence.
            </p>
            <p>
              From the past few years, online training has been gaining importance to help professionals from all walks of easily enroll, learn, practice and apply the knowledge to gain a competitive edge. With no hassles of physical boundaries, we believe this is the best mode of training. And VR IT is the pioneer in offering several online training programs in varied courses to make you industry relevant professional from day one itself.
            </p>
            <p>
              Not just online mode of training, we also offer class room sessions for discerning professionals, who have the required time and bandwidth to attend sessions without comprising on other activities.
            </p>
            <p>
              Whether online or class room training programs, we assure you would get the best out of your experience - an enriched learning experience with unmatched practical exposure that you gain, while working on industry endorsed live projects.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What you need to have for getting started?</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-primary">•</span>
                </span>
                A reliable internet connection with appropriate training software installed on your system
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                  <span className="text-primary">•</span>
                </span>
                A passion to succeed and create a difference in your lives
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Unique Approach</h2>
            <p>
              We have an exclusive team, who is constantly gauging the industry trends, interacting with industry giants, understanding their requirements and finalizing the courses, which are in high demand. Hence, the courses which we offer are on latest platforms and technologies, perfectly endorsed by industry professionals and veterans in the IT sector.
            </p>
            <p>
              What's more? To compliment your technical expertise, we also offer courses in basic etiquette – how to communicate, face interviews and above all certain valuable tips to succeed in this competitive world. These skills are quite vital from a professional stand point, boosting your confidence level and helping you face stringent competition.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample list of courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-700 text-center">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Corporate Training</h2>
            <p>
              What was relevant a few years back is now obsolete, considering that the technology is fast changing and evolving rapidly to scale new heights to make our lives better and simpler. Organizations are also slowly adapting to the latest technologies in sync with their market demands and expect their associates to keep abreast with the latest technologies.
            </p>
            <p>
              This gap is slowly widening and Institutes such as VR IT is well placed to fill the gap faced by corporate employees. With good experience in imparting training for companies of all sizes, there is no exaggeration that many reputed MNCs approach for customized training programs for their employees.
            </p>
            <p>
              The offered mode of training is both online and classroom based, suiting the specific needs of the companies. Right from freshers to experienced veterans, our training programs are targeted across varied learning groups to meet the specific industry demands.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About our team</h2>
            <p>
              Our team is dynamic, passionate and above all highly experienced, drawn from renowned institutes like IIT, NIT and from other reputed universities. With a commitment to offer the best possible training, we ensure that our training adheres to the best practices, aimed to assimilate the theoretical knowledge with hands-on exercises and practical training.
            </p>
            <p>
              This is complimented by the state-of-the-art infrastructure including audio-visual kits, learning material and spacious classrooms for those who intend to opt for classroom training.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600 mb-8">Let success redefine your career path and we at VR IT solutions will help realize your dreams!</p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-200" onClick={() => redirect("/contact")}>
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;