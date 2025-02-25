import { Play, ClipboardCheck, PencilRuler, FileText, Smartphone, Award } from "lucide-react";

const CourseIncludes = ({ courseData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="font-bold mb-4">This course includes:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col md:block space-y-0 md:space-y-3">
          <div className="flex items-center mb-3 md:mb-0">
            <Play className="h-5 w-5 text-gray-600 mr-3" />
            <span>{courseData.hoursContent}</span>
          </div>
          <div className="flex items-center mb-3 md:mb-0">
            <ClipboardCheck className="h-5 w-5 text-gray-600 mr-3" />
            <span>1 practice test</span>
          </div>
          <div className="flex items-center mb-3 md:mb-0">
            <PencilRuler className="h-5 w-5 text-gray-600 mr-3" />
            <span>Assignments</span>
          </div>
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-gray-600 mr-3" />
            <span>Articles</span>
          </div>
        </div>
        <div className="flex flex-col md:block space-y-0 md:space-y-3">
          <div className="flex items-center mb-3 md:mb-0">
            <Smartphone className="h-5 w-5 text-gray-600 mr-3" />
            <span>Online & Offline</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 text-gray-600 mr-3" />
            <span>Certificate of completion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIncludes;