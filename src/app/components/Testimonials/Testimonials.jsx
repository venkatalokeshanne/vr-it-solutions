import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      source: "StackOverflow",
      subtext: "37,076 responses collected",
      logo: "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg",
      link: "View Web Development courses",
    },
    {
      text: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      name: "Alvin Lim",
      title: "Technical Co-Founder, CTO at Dimensional",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
      link: "View this iOS & Swift course",
    },
    {
      text: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
      name: "William A. Wachlin",
      title: "Partner Account Manager at Amazon Web Services",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg",
      link: "View this AWS course",
    },
    {
      text: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
      name: "Ian Stevens",
      title: "Head of Capability Development, North America at Publicis Sapient",
      avatar: "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png",
      link: "Read full story",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          See what others are achieving through learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 shadow-md bg-white rounded-lg flex flex-col justify-between"
            >
              <div>
                {/* Quotation Marks */}
                <div className="flex items-start mb-4" style={{minHeight: "120px"}}>
                  <img
                    src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                    alt="Quote"
                    className="w-6 h-6 mr-2"
                  />
                  <p className="text-base text-gray-700 font-medium">
                    {testimonial.text}
                  </p>
                </div>

                {/* Source Details */}
                {testimonial.source && (
                  <div className="mt-4 flex items-center">
                    {testimonial.logo && (
                      <img
                        src={testimonial.logo}
                        alt={testimonial.source}
                        className="w-12 h-12 mr-2"
                      />
                    )}
                    <div>
                      <p className="text-sm text-gray-900 font-semibold">
                        {testimonial.source}
                      </p>
                      <p className="text-xs text-gray-600">{testimonial.subtext}</p>
                    </div>
                  </div>
                )}

                {/* Name and Title */}
                {testimonial.name && (
                  <div className="mt-4 flex items-center">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-2"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Link */}
              <a
                href="#"
                className="mt-4 text-blue-500 flex items-center text-sm font-medium"
              >
                {testimonial.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
