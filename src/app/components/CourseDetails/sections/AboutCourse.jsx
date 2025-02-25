import { Info } from "lucide-react";

const AboutCourse = ({ courseData }) => {
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
          {courseData.aboutTheCourse?.map((point, index) => (
            <p
              key={index}
              className="text-gray-600 leading-relaxed flex items-start"
            >
              <span className="text-primary mr-2">•</span>
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;