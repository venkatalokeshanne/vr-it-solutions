import { useState } from "react";
import { ChevronUp, ChevronDown, Play } from "lucide-react";

const CourseContent = ({ courseData }) => {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Course content</h2>
      <div className="mb-4">
        <span className="text-sm text-gray-600">
          {courseData.sections.length} sections •{" "}
          {courseData.sections.reduce(
            (acc, section) => acc + section.lectures.length,
            0
          )}{" "}
          lectures • {courseData.hoursContent} total length
        </span>
      </div>
      <div className="border rounded-lg">
        {courseData.sections.map((section, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              onClick={() =>
                setSelectedSection(selectedSection === index ? -1 : index)
              }
            >
              <div className="flex items-center">
                {selectedSection === index ? (
                  <ChevronUp className="h-4 w-4 mr-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-2" />
                )}
                <span className="font-medium">{section.title}</span>
              </div>
              <span className="text-sm text-gray-600">
                {section.lectures.length} lectures
              </span>
            </button>
            {selectedSection === index && (
              <div className="bg-gray-50 px-6 py-2">
                {section.lectures.map((lecture, lectureIndex) => (
                  <div
                    key={lectureIndex}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <div className="flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      <span>{lecture.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;