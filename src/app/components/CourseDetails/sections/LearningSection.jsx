import { Check } from "lucide-react";

const LearningSection = ({ courseData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseData.learningPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{point}</span>
            </div>
          ))}
        </div>
        {courseData.learningNotes && courseData.learningNotes.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Notes:</h3>
            <div className="space-y-2">
              {courseData.learningNotes.map((note, index) => (
                <p key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {note}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningSection;