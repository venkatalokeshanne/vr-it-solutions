export default {
    name: 'courseImage',
    title: 'Course',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Course Title',
        type: 'string',
        description: 'Title matching the course (e.g., "Salesforce Training in Hyderabad")',
        validation: Rule => Rule.required()
      },
      {
        name: 'course',
        title: 'Course Name',
        type: 'string',
        description: 'Short name of the course (e.g., "Salesforce", "DevOps")',
        validation: Rule => Rule.required()
      },
      {
        name: 'link',
        title: 'Course Link',
        type: 'string',
        description: 'Link identifier that matches the course link field (e.g., "salesforce", "azure-devops")',
        validation: Rule => Rule.required()
      },
      {
        name: 'trending',
        title: 'Trending Position',
        type: 'number',
        description: 'Position in trending courses (leave empty if not trending)',
      },
      {
        name: 'image',
        title: 'Course Image',
        type: 'image',
        options: {
          hotspot: true // Enables the hotspot functionality for responsive image cropping
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Course description paragraphs'
      },
      {
        name: 'aboutTheCourse',
        title: 'About The Course',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Additional details about the course'
      },
      {
        name: 'hoursContent',
        title: 'Hours of Content',
        type: 'string',
        description: 'Duration of the course (e.g., "70h")'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'Course category (e.g., "DevOps & Cloud")'
      },
      {
        name: 'level',
        title: 'Level',
        type: 'string',
        description: 'Course difficulty level (e.g., "Beginner to Advanced")'
      },
      {
        name: 'coursePrerequisites',
        title: 'Course Prerequisites',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Prerequisites for taking the course'
      },
      {
        name: 'whoShouldAttend',
        title: 'Who Should Attend',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Target audience for the course'
      },
      {
        name: 'sections',
        title: 'Course Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Section Title',
                type: 'string'
              },
              {
                name: 'lectures',
                title: 'Lectures',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'title',
                        title: 'Lecture Title',
                        type: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'learningPoints',
        title: 'Learning Points',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Key learning outcomes'
      },
      {
        name: 'learningNotes',
        title: 'Learning Notes',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Additional notes about the learning experience'
      },
      {
        name: 'whyJoin',
        title: 'Why Join',
        type: 'object',
        fields: [
          {
            name: 'course',
            title: 'Course',
            type: 'string'
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'text' }]
          },
          {
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [{ type: 'text' }]
          },
          {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'quote',
                    title: 'Quote',
                    type: 'text'
                  },
                  {
                    name: 'author',
                    title: 'Author',
                    type: 'string'
                  },
                  {
                    name: 'role',
                    title: 'Role',
                    type: 'string'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'courseHighlights',
        title: 'Course Highlights',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Key highlights of the course'
      },
      {
        name: 'practicalExecution',
        title: 'Practical Execution',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Details about practical sessions'
      },
      {
        name: 'careerOpportunities',
        title: 'Career Opportunities',
        type: 'array',
        of: [{ type: 'text' }],
        description: 'Career opportunities after completing the course'
      }
    ],
    preview: {
      select: {
        title: 'title',
        courseName: 'courseName',
        link: 'link',
        trending: 'trending',
        media: 'image'
      },
      prepare({ title, courseName, link, trending, media }) {
        return {
          title: title || courseName,
          subtitle: `Course: ${courseName} | Link: ${link}${trending ? ` | Trending: #${trending}` : ''}`,
          media
        };
      }
    }
  };