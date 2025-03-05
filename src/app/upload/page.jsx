"use client";
import { useState } from 'react';
import courses from '@/data/courses';
import { client } from '@/lib/sanity.client';

// Helper function to generate random keys
const generateKey = () => {
  return Math.random().toString(36).substring(2, 15);
};

const SanityCourseImport = () => {
  const [status, setStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null);

  // Function to delete all existing courses
  const deleteAllCourses = async () => {
    try {
      setDeleteStatus('deleting');
      setProgress(0);
      
      // Query all course documents
      const query = '*[_type == "courseImage"]';
      const existingCourses = await client.fetch(query);
      
      if (existingCourses.length === 0) {
        setDeleteStatus('completed');
        setShowDeleteConfirm(false);
        return;
      }

      // Delete each course document
      let deletedCount = 0;
      for (const course of existingCourses) {
        await client.delete(course._id);
        deletedCount++;
        setProgress(Math.round((deletedCount / existingCourses.length) * 100));
      }
      
      setDeleteStatus('completed');
      setShowDeleteConfirm(false);
      
      // Start the import automatically after deletion is complete
      handleImport();
      
    } catch (err) {
      console.error('Error deleting courses:', err);
      setDeleteStatus('error');
      setResults({ 
        ...results, 
        deleteError: `Failed to delete existing courses: ${err.message}` 
      });
    }
  };

  const handleImport = async () => {
    try {
      setStatus('importing');
      setProgress(0);
      setResults({ success: 0, errors: [] });
      
      const totalCourses = courses.length;
      let successCount = 0;
      let errors = [];

      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        try {
          // Create proper Sanity document from course data
          const courseDoc = {
            _type: 'courseImage', // Match your schema name
            title: course.title,
            course: course.course,
            link: course.link,
            trending: course.trending || null,
            
            // Change this structure - simply use the actual string array instead of objects
            description: Array.isArray(course.description) 
              ? course.description.map(text => text) // Just pass the strings directly
              : course.description ? [course.description] : [],
            
            hoursContent: course.hoursContent,
            category: course.category,
            level: course.level,
            
            aboutTheCourse: Array.isArray(course.aboutTheCourse) 
              ? course.aboutTheCourse 
              : [],
              
            coursePrerequisites: Array.isArray(course.coursePrerequisites) 
              ? course.coursePrerequisites
              : [],
              
            whoShouldAttend: Array.isArray(course.whoShouldAttend) 
              ? course.whoShouldAttend
              : [],
              
            // For sections we still need keys because these are objects
            sections: course.sections ? course.sections.map((section, sectionIdx) => ({
              _key: `section-${sectionIdx}-${generateKey()}`,
              title: section.title,
              lectures: section.lectures ? section.lectures.map((lecture, lectureIdx) => ({
                _key: `lecture-${sectionIdx}-${lectureIdx}-${generateKey()}`,
                title: lecture.title
              })) : []
            })) : [],
            
            learningPoints: Array.isArray(course.learningPoints) 
              ? course.learningPoints
              : [],
              
            learningNotes: Array.isArray(course.learningNotes) 
              ? course.learningNotes
              : [],
              
            courseHighlights: Array.isArray(course.courseHighlights) 
              ? course.courseHighlights
              : [],
              
            practicalExecution: Array.isArray(course.practicalExecution) 
              ? course.practicalExecution
              : [],
              
            careerOpportunities: Array.isArray(course.careerOpportunities) 
              ? course.careerOpportunities
              : [],
          };
          
          // Update whyJoin as well
          if (course.whyJoin) {
            courseDoc.whyJoin = {
              course: course.whyJoin.course,
              title: course.whyJoin.title,
              
              // Direct strings for these arrays
              description: Array.isArray(course.whyJoin.description) 
                ? course.whyJoin.description
                : [],
              benefits: Array.isArray(course.whyJoin.benefits) 
                ? course.whyJoin.benefits
                : [],
                
              // Objects still need keys
              testimonials: course.whyJoin.testimonials 
                ? course.whyJoin.testimonials.map((testimonial, idx) => ({
                    _key: `testimonial-${idx}-${generateKey()}`,
                    quote: testimonial.quote,
                    author: testimonial.author,
                    role: testimonial.role
                  }))
                : []
            };
          }

          // Create document in Sanity
          const result = await client.create(courseDoc);
          successCount++;
          
          // Log that images need to be uploaded separately
          console.log(`Created course document for ${course.title} (ID: ${result._id}), need to upload image: ${course.image}`);
          
        } catch (err) {
          console.error(`Error importing course ${course.title}:`, err);
          errors.push({ course: course.title, error: err.message });
        }

        // Update progress
        setProgress(Math.round(((i + 1) / totalCourses) * 100));
        setResults({ success: successCount, errors });
      }

      setStatus('completed');

    } catch (err) {
      console.error('Import failed:', err);
      setStatus('error');
      setResults({ error: err.message });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Import Courses to Sanity</h2>
      
      <div className="mb-6">
        <p>This will import {courses.length} courses into your Sanity database.</p>
        <p className="mt-2 text-gray-600 text-sm">Note: Images will need to be uploaded manually after import.</p>
      </div>

      {/* Delete confirmation modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="text-red-600 mb-4">
              This will delete ALL existing courses in your Sanity database. This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={deleteAllCourses}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete All Courses
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete status indicator */}
      {deleteStatus === 'deleting' && (
        <div className="mb-6">
          <h3 className="font-bold mb-2">Deleting existing courses...</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className="bg-red-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>{progress}% complete</p>
        </div>
      )}

      {deleteStatus === 'error' && (
        <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Error deleting courses</p>
          {results && results.deleteError && <p className="text-sm">{results.deleteError}</p>}
        </div>
      )}

      {status === 'idle' && deleteStatus !== 'deleting' && (
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowDeleteConfirm(true)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete & Re-Import
          </button>
          <button 
            onClick={handleImport}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Import Without Deleting
          </button>
        </div>
      )}

      {status === 'importing' && (
        <div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>Importing... {progress}% complete</p>
          
          {results && (
            <div className="mt-4">
              <p>Success: {results.success} courses</p>
              {results.errors.length > 0 && (
                <div className="mt-2">
                  <p className="text-red-500">Errors: {results.errors.length}</p>
                  <ul className="text-sm text-red-500 mt-1">
                    {results.errors.map((error, index) => (
                      <li key={index}>{error.course}: {error.error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {status === 'completed' && (
        <div>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <p>Import completed!</p>
          </div>
          
          <div className="mt-4">
            <p>Successfully imported: {results.success} courses</p>
            {results.errors.length > 0 && (
              <div className="mt-2">
                <p className="text-red-500">Errors: {results.errors.length}</p>
                <ul className="text-sm text-red-500 mt-1 max-h-40 overflow-y-auto">
                  {results.errors.map((error, index) => (
                    <li key={index}>{error.course}: {error.error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => {
              setStatus('idle');
              setDeleteStatus(null);
            }}
            className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      )}

      {status === 'error' && (
        <div>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>Import failed!</p>
            {results && results.error && <p className="text-sm mt-1">{results.error}</p>}
          </div>
          
          <button 
            onClick={() => {
              setStatus('idle');
              setDeleteStatus(null);
            }}
            className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default SanityCourseImport;