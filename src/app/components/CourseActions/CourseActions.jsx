"use client";
import { useRouter } from 'next/navigation';

const CourseActions = () => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => router.push('/contact')}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
      >
        Enroll Now
      </button>
      <button
        onClick={() => {
          const element = document.getElementById('curriculum');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
      >
        Download Curriculum
      </button>
    </div>
  );
};

export default CourseActions;