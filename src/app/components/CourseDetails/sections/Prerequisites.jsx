import { Book, Lightbulb } from "lucide-react";

const Prerequisites = ({ courseData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Book className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Pre-requisites</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            {courseData.coursePrerequisites.map((point, index) => (
              <p key={index} className="text-gray-600 leading-relaxed flex items-start">
                <span className="text-primary mr-2">•</span>
                {point}
              </p>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-white/80 rounded-lg">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Looking for {courseData.title} training?
                </h3>
                <p className="text-gray-600">
                  If you are looking for{" "}
                  <span className="text-primary font-medium">
                    {courseData.title}
                  </span>
                  , VR IT Solutions is the right institute for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prerequisites;