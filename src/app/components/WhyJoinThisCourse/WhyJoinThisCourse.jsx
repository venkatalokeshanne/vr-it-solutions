import React from "react";
import TestimonialCarousel from "../CourseTestimonials/CourseTestimonials";

const WhyJoinThisCourse = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-white to-primary-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Should You{" "}
              <span className="text-primary">Join This Course?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:mx-0 lg:mx-0 mx-4">
            <div className="prose prose-lg max-w-none text-gray-700">
              {data.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`mb-6 ${
                    index === data.description.length - 1
                      ? "font-medium text-gray-900"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Key benefits cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mx-0 lg:mx-0 mx-4">
            {data.benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
            <div className="bg-gradient-to-r from-primary to-primary-hover rounded-xl shadow-lg p-6 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="mb-6">
                Join our next batch and start your {data.course} journey today.
              </p>
              <button className="bg-white text-primary font-medium py-2 px-6 rounded-lg mt-auto hover:bg-primary-light transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Testimonial */}
          <TestimonialCarousel testimonials={data.testimonials} />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-100">
      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhyJoinThisCourse;