import courses from "@/data/courses";
import React from "react";
import { createAvatar } from "@dicebear/core";

const Testimonials = () => {
  // Get all testimonials from all courses
  const allTestimonials = courses.reduce((acc, course) => {
    return [...acc, ...(course.whyJoin?.testimonials || [])];
  }, []);

  // Randomly select 3 testimonials
  const getRandomTestimonials = (testimonials, count) => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const selectedTestimonials = getRandomTestimonials(allTestimonials, 3);
  return (
    <section className="py-16 bg-gradient-to-r from-primary/15 via-primary/10 to-transparent backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Success Stories from Our Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/5"
            >
              <div>
                <div
                  className="flex items-start mb-4"
                  style={{ minHeight: "120px" }}
                >
                  <img
                    src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                    alt="Quote"
                    className="w-6 h-6 mr-2"
                  />
                  <p className="text-base text-gray-700 font-medium">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
