import { Info } from "lucide-react";

const AboutCourse = ({ courseData }) => {
  const renderContent = (point, index) => {
    // If the point is an array, render as a list
    if (Array.isArray(point)) {
      return (
        <ul key={index} className="pl-6 list-disc space-y-2 text-gray-600">
          {point.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    
    // If the point starts with "Header:", render as heading
    if (typeof point === 'string' && point.startsWith("Header:")) {
      const headingText = point.substring(7).trim(); // Remove "Header:" prefix
      return (
        <h3 key={index} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          {headingText}
        </h3>
      );
    }
    
    // Otherwise render as a normal point
    return (
      <p key={index} className="text-gray-600 leading-relaxed flex items-start">
        {point}
      </p>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Info className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            About this course
          </h2>
        </div>

        <div className="space-y-4">
          {courseData.aboutTheCourse?.map((point, index) => renderContent(point, index))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;