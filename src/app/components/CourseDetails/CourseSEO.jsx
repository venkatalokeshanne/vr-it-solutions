import { NextSeo, CourseJsonLd } from 'next-seo';

const CourseSEO = ({ courseData }) => {
  console.log("saibaba",courseData);
  const keywords = [
    courseData.title,
    courseData.course,
    courseData.level,
    ...courseData.sections?.map(section => section.title),
    ...courseData.courseHighlights || [],
    ...courseData.careerOpportunities?.flatMap(co => co.points) || [],
    'online course',
    'certification',
    'training',
    'VR IT Solutions',
  ].filter(Boolean);

  return (
    <>
      <NextSeo
        title={`${courseData.title} Certification Training | VR IT Solutions`}
        description={`${courseData.description.slice(0, 155)}... Learn ${courseData.title} with hands-on training. ${courseData.hoursContent} hours of content. Enroll now!`}
        canonical={`https://vr-it-solutions.vercel.app/courses/${courseData.course.toLowerCase()}`}
        openGraph={{
          title: `${courseData.title} Training and Certification`,
          description: courseData.description,
          images: [
            {
              url: courseData.image || '/default-course-image.jpg',
              width: 1200,
              height: 630,
              alt: courseData.title,
            },
          ],
          type: 'website',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords.join(', '),
          },
          {
            name: 'author',
            content: 'VR IT Solutions',
          },
          {
            name: 'revisit-after',
            content: '7 days',
          },
        ]}
      />
      <CourseJsonLd
        courseName={courseData.title}
        description={courseData.description}
        provider={{
          name: 'VR IT Solutions',
          type: 'Organization',
          url: 'https://vr-it-solutions.vercel.app',
        }}
        coursePrerequisites={courseData.coursePrerequisites?.join('. ')}
      />
    </>
  );
};

export default CourseSEO;