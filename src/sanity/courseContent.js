export default {
    name: 'courseContent',
    title: 'Course Content PDF',
    type: 'document',
    fields: [
      {
        name: 'pdfFile',
        title: 'PDF File',
        type: 'file',
        description: 'Upload course PDF',
        options: {
          accept: '.pdf'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'course',
        title: 'Related Course',
        type: 'reference',
        to: [{type: 'courseImage'}],
        description: 'Which course is this PDF for?'
      },
    ],
    preview: {
      select: {
        course: 'course.title',
        media: 'pdfFile'
      },
      prepare(selection) {
        const {course} = selection
        return {
          subtitle: course ? `For: ${course}` : 'No course selected'
        }
      }
    }
  }