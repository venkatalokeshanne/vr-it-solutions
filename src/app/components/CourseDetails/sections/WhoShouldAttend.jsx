import { Users } from "lucide-react";
import Link from "next/link";

const WhoShouldAttend = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Who Should Attend
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          {data?.map((point, index) => (
            <p
              key={index}
              className="text-gray-600 leading-relaxed flex items-start"
            >
              <span className="text-primary mr-2">•</span>
              {point}
            </p>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-lg text-gray-800 text-center">
            So, what are you waiting for?{" "}
            <Link 
              href="/contactus" 
              className="text-primary hover:text-primary-dark font-semibold underline"
            >
              Join now
            </Link>{" "}
            to make {data.name} as your career and get a highly paid job!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttend;