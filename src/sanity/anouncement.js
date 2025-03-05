/**
 * Simple Announcement schema for Sanity CMS
 * This allows editing announcement messages that appear in the banner
 */

export const announcementSchema = {
    name: 'announcementSettings',
    title: 'Announcement Banner',
    type: 'document',
    fields: [
      {
        name: 'announcements',
        title: 'Announcements',
        description: 'Add announcement messages (format: "Prefix: Content")',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'content',
                title: 'Content',
                type: 'string',
                description: 'Main announcement text',
                validation: Rule => Rule.required()
              }
            ],
            preview: {
              select: {
                content: 'content'
              },
              prepare({ content }) {
                return {
                  title: `${content}`
                }
              }
            }
          }
        ]
      },

    ]
  };