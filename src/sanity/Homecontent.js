/**
 * Hero Content schema for Sanity CMS
 * This allows editing the rotating headlines and subheadlines in the hero section
 */

export const heroContentSchema = {
    name: 'heroContent',
    title: 'Hero Content',
    type: 'document',
    fields: [
      {
        name: 'headlines',
        title: 'Headlines',
        description: 'Rotating headlines for the hero section',
        type: 'array',
        of: [
          {
            type: 'string',
            validation: Rule => Rule.required()
          }
        ],
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'subheadlines',
        title: 'Subheadlines',
        description: 'Rotating subheadlines that correspond to each headline',
        type: 'array',
        of: [
          {
            type: 'string',
            validation: Rule => Rule.required()
          }
        ],
        validation: Rule => Rule.required().min(1)
      }
    ],
    preview: {
      select: {
        headlines: 'headlines',
      },
      prepare({ headlines }) {
        return {
          title: 'Hero Headlines',
        };
      }
    }
  };