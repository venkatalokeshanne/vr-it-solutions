// scripts/importCourses.js
import courses from './courses'
import slugify from 'slugify'
import { client } from '@/lib/sanity.client'


export const importCourses = async () => {
  console.log(`Importing ${courses.length} courses to Sanity...`)
  
  for (const course of courses) {
    console.log(`Processing: ${course.title}`)
    
    // Convert array descriptions to single objects if needed
    const description = Array.isArray(course.description) 
      ? course.description.map(item => ({
          _type: 'block',
          _key: Math.random().toString(36).substring(2, 15),
          children: [{
            _type: 'span',
            _key: Math.random().toString(36).substring(2, 15),
            text: item
          }]
        }))
      : [{
          _type: 'block',
          _key: Math.random().toString(36).substring(2, 15),
          children: [{
            _type: 'span',
            _key: Math.random().toString(36).substring(2, 15),
            text: course.description
          }]
        }]

    // Process sections for Sanity format
    const sections = course.sections?.map(section => ({
      _key: Math.random().toString(36).substring(2, 15),
      title: section.title,
      lectures: section.lectures?.map(lecture => ({
        _key: Math.random().toString(36).substring(2, 15),
        title: lecture.title
      }))
    }))

    // Create slug if it doesn't exist
    const slug = course.link || slugify(course.title, { lower: true })

    // Format arrays for Sanity
    const formatArrayField = (field) => {
      if (!field) return undefined
      
      return Array.isArray(field) 
        ? field.map(item => ({
            _key: Math.random().toString(36).substring(2, 15),
            _type: 'text',
            text: item
          }))
        : [{
            _key: Math.random().toString(36).substring(2, 15),
            _type: 'text',
            text: field
          }]
    }

    // Prepare course document
    const courseDoc = {
      _type: 'course',
      title: course.title,
      course: course.course,
      link: {
        _type: 'slug',
        current: slug
      },
      trending: course.trending,
      image: course.image,
      description,
      instructor: course.instructor,
      language: course.language,
      hoursContent: course.hoursContent,
      category: course.category,
      level: course.level,
      sections,
      coursePrerequisites: formatArrayField(course.coursePrerequisites),
      aboutTheCourse: formatArrayField(course.aboutTheCourse),
      learningPoints: formatArrayField(course.learningPoints),
      courseHighlights: formatArrayField(course.courseHighlights),
      practicalExecution: formatArrayField(course.practicalExecution),
      whoShouldAttend: formatArrayField(course.whoShouldAttend),
      careerOpportunities: formatArrayField(course.careerOpportunities),
      learningNotes: formatArrayField(course.learningNotes)
    }

    // Add whyJoin if exists
    if (course.whyJoin) {
      courseDoc.whyJoin = {
        course: course.whyJoin.course,
        title: course.whyJoin.title,
        description: formatArrayField(course.whyJoin.description),
        benefits: formatArrayField(course.whyJoin.benefits),
        testimonials: course.whyJoin.testimonials?.map(testimonial => ({
          _key: Math.random().toString(36).substring(2, 15),
          quote: testimonial.quote,
          author: testimonial.author,
          role: testimonial.role
        }))
      }
    }

    // Create document in Sanity
    try {
      await client.create(courseDoc)
      console.log(`✅ Imported: ${course.title}`)
    } catch (error) {
      console.error(`❌ Error importing ${course.title}:`, error.message)
    }
  }
  
  console.log('Import completed!')
}