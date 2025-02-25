import { Star } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import SocialShare from "./SocialShare";

const CourseHero = ({ courseData, handleDownload }) => {
  return (
    <div className="bg-gray-900 text-white mt-14 md:mt-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Course Header */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-lg mb-4">{courseData.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                {courseData.hoursContent}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {courseData.level}
              </span>
            </div>
            <div>
              <SocialShare
                url={`https://vr-it-solutions.vercel.app/${courseData.link}`}
                title={courseData.title}
                description={courseData.description}
              />
            </div>
          </div>

          {/* Right side - Course Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
              <div className="relative mb-4">
                <div className="relative aspect-video rounded overflow-hidden">
                  <Image
                    src={courseData.image}
                    alt="Course Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <button
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200"
                  onClick={() => redirect("/contactus")}
                >
                  Enroll now
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full bg-white text-primary border-2 border-primary py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
                >
                  Download Course Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;