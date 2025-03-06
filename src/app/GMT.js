// Check if we're on client side
const isClient = typeof window !== 'undefined';

/**
 * Track page view with page type and additional data
 */
export const trackPageView = () => {
  if (!isClient || !window.VRIT) return;
  window.VRIT.trackPageView();
};

/**
 * Track course view
 * @param {Object} courseData - Data about the course
 * @param {string} courseData.title - Course title
 * @param {string} courseData.id - Course ID or URL slug
 * @param {number} courseData.price - Course price (optional)
 * @param {string} courseData.category - Course category (optional)
 * @param {string} courseData.mode - Course mode: "online" or "classroom" (optional)
 */
export const trackCourseView = (courseData) => {
  if (!isClient || !window.VRIT) return;
  window.VRIT.trackCourseView(courseData);
};

/**
 * Track brochure download
 * @param {Object} courseData - Data about the course
 * @param {string} courseData.title - Course title
 * @param {string} courseData.id - Course ID or URL slug (optional)
 */
export const trackBrochureDownload = (courseData) => {
  if (!isClient || !window.VRIT) return;
  window.VRIT.trackBrochureDownload(courseData);
};

/**
 * Track form submission
 * @param {Object} formData - Data about the form
 * @param {string} formData.formId - Form ID (optional)
 * @param {string} formData.formName - Form name (optional)
 * @param {string} formData.courseInterest - Course the user is interested in (optional)
 */
export const trackFormSubmission = (formData) => {
  if (!isClient || !window.VRIT) return;
  window.VRIT.trackFormSubmission(formData);
};

/**
 * Track blog view
 * @param {Object} blogData - Data about the blog post
 * @param {string} blogData.title - Blog title
 * @param {string} blogData.id - Blog ID or slug (optional)
 * @param {string} blogData.category - Blog category (optional)
 * @param {string} blogData.author - Blog author (optional)
 */
export const trackBlogView = (blogData) => {
  if (!isClient || !window.VRIT) return;
  window.VRIT.trackBlogView(blogData);
};
