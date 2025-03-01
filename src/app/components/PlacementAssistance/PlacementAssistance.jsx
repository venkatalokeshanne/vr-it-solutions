import React from "react";
import { Briefcase, CheckCircle, Users } from "lucide-react";

export const PlacementAssistance = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              100% Get Placement Assistance & Job Support
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              From the joining of your course till the day you got job, you will surely get placement assistance from VR IT Solutions. As we provide 100% placement to our students.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-800">Resume Building Support</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-800">Interview Preparation</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-800">Job Referrals</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-800">Post-placement Support</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-md">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Placement Success</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-gray-600">Placement Assistance</div>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Companies Hiring</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>Join our successful alumni network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};