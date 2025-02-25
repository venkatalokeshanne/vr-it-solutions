import { Sparkles } from "lucide-react";

const CourseHighlights = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
          The best Highlights of {data.name} training
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.map((highlight, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3"
            >
              <span className="text-primary font-bold">•</span>
              <p className="text-gray-600 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;