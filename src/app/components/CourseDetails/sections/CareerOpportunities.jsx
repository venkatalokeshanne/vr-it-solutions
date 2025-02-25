import { TrendingUp } from "lucide-react";

const CareerOpportunities = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Global Demand & Career Opportunities
          </h2>
        </div>

        <div className="space-y-6">
          {data.map((category, index) => (
              <div className="space-y-2">
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    {category}
                  </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunities;