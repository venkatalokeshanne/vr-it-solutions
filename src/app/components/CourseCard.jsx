import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Star, Clock, Heart } from "lucide-react";

// Constants
const COURSE_DETAILS = {
  lastUpdated: "November 2024",
  duration: "1 total hour",
  level: "All Levels",
  features: ["Subtitles"],
  learningPoints: [
    "Write punchier, more concise messages — with confidence",
    "Craft simple, elegant content that's easy to understand",
    "Transform your writing into powerful, professional written communication",
  ],
};

// Subcomponents
const HoverCard = ({ course, position }) => (
  <div
    className={`absolute z-50 top-1/2 ${
      position === "left"
        ? "-left-[320px] before:right-[-8px] before:left-auto"
        : "left-[280px] before:-left-2"
    } bg-white rounded-lg shadow-2xl w-[340px] -translate-y-1/2 before:content-[''] before:absolute before:top-1/2 before:w-4 before:h-4 before:bg-purple-600 before:-translate-y-1/2 before:rotate-45 transition-all duration-300 ease-in-out`}
  >
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{course.title}</h3>
      <div className="text-sm text-gray-600 mb-3">
        Updated{" "}
        <span className="text-gray-900 font-medium">
          {COURSE_DETAILS.lastUpdated}
        </span>
      </div>
      <CourseStats />
      <p className="text-sm mb-4">{course.description}</p>
      <LearningPoints points={COURSE_DETAILS.learningPoints} />
    </div>
    <CardActions />
  </div>
);

const CourseStats = () => (
  <div className="flex items-center text-sm text-gray-600 mb-3 space-x-2">
    <Clock className="h-4 w-4" />
    <span>{COURSE_DETAILS.duration}</span>
    <span>•</span>
    <span>{COURSE_DETAILS.level}</span>
    <span>•</span>
    <span>{COURSE_DETAILS.features[0]}</span>
  </div>
);

const LearningPoints = ({ points }) => (
  <ul className="space-y-2 mb-4">
    {points.map((point, index) => (
      <li key={index} className="flex items-start space-x-2 text-sm">
        <span className="text-gray-600 mt-1">✓</span>
        <span>{point}</span>
      </li>
    ))}
  </ul>
);

const CardActions = () => (
  <div className="p-6 bg-gray-50 border-t border-gray-200 flex gap-2">
    <button className="flex-1 bg-purple-600 text-white py-3 font-bold text-sm hover:bg-purple-700 transition-colors duration-200">
      Add to cart
    </button>
    <button className="p-3 border border-gray-400 hover:bg-gray-100 transition-colors duration-200">
      <Heart className="h-5 w-5" />
    </button>
  </div>
);

// Main Component
const CourseCard = ({ course }) => {
  const [hoverPosition, setHoverPosition] = useState(null);
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const spaceOnRight = viewportWidth - rect.right;
      setHoverPosition(spaceOnRight < 400 ? "left" : "right");
    }
    const checkMobile = () => {
      const mobileQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mobileQuery.matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  };

  return (
    <div
      ref={cardRef}
      className="relative group bg-white rounded-lg overflow-visible shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHoverPosition(null)}
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full object-cover"
        style={{minHeight: "200px", maxHeight: "200px"}}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 font-bold mr-1">
            {course.rating}
          </span>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">
            ({course.reviews.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">${course.discountPrice}</span>
          <span className="text-sm text-gray-600 line-through">
            ${course.price}
          </span>
        </div>
      </div>

      {!isMobile && hoverPosition && (
        <HoverCard course={course} position={hoverPosition} />
      )}
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discountPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default CourseCard;
