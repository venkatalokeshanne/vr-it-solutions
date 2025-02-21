import {
    Book,
    Building2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Code,
    Globe,
    Heart,
    Monitor,
    Play,
  } from "lucide-react";

export const Fearures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center">
        <Play className="h-12 w-12 mx-auto mb-4 text-purple-600" />
        <h3 className="font-bold text-lg mb-2">Learn at your own pace</h3>
        <p className="text-gray-600">Access courses on your schedule</p>
      </div>
      <div className="text-center">
        <Globe className="h-12 w-12 mx-auto mb-4 text-purple-600" />
        <h3 className="font-bold text-lg mb-2">Access anywhere</h3>
        <p className="text-gray-600">Learn on any device, anytime</p>
      </div>
      <div className="text-center">
        <Book className="h-12 w-12 mx-auto mb-4 text-purple-600" />
        <h3 className="font-bold text-lg mb-2">Expert instruction</h3>
        <p className="text-gray-600">Find the right instructor for you</p>
      </div>
    </div>
  </div>
  );
};