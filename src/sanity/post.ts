interface SlugOptions {
    source: string;
    maxLength: number;
    slugify: (input: string) => string;
}

interface ImageField {
    name: string;
    type: string;
    title: string;
    description?: string;
    options?: {
        isHighlighted?: boolean;
    };
}

interface BlockStyle {
    title: string;
    value: string;
}

interface BlockList {
    title: string;
    value: string;
}

interface BlockDecorator {
    title: string;
    value: string;
}

interface BlockAnnotation {
    name: string;
    type: string;
    title: string;
    fields: {
        name: string;
        type: string;
        title: string;
        initialValue?: boolean;
    }[];
}

interface BlockType {
    type: string;
    styles: BlockStyle[];
    lists: BlockList[];
    marks: {
        decorators: BlockDecorator[];
        annotations: BlockAnnotation[];
    };
}

interface CodeType {
    type: string;
    options: {
        withFilename: boolean;
    };
}

interface SeoField {
    name: string;
    type: string;
    title: string;
    description?: string;
}

interface PreviewSelection {
    title: string;
    author: string;
    media: string;
}

interface Ordering {
    title: string;
    name: string;
    by: {
        field: string;
        direction: string;
    }[];
}

export default {
    name: 'post',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().max(100),
            description: 'The title of the blog post'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w-]+/g, '')
                    .slice(0, 96)
            } as SlugOptions,
            validation: (Rule: any) => Rule.required(),
            description: 'The URL-friendly version of the title'
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
            description: 'Who wrote this blog post'
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility'
                },
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    description: 'Caption for the image (optional)'
                }
            ] as ImageField[],
            validation: (Rule: any) => Rule.required(),
            description: 'The main image for the blog post'
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            validation: (Rule: any) => Rule.required().max(200),
            description: 'A short summary of the blog post (used in listings)'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: { type: 'category' }
                }
            ],
            validation: (Rule: any) => Rule.required().min(1),
            description: 'Categories this blog post belongs to'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Tags to help with search and filtering'
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule: any) => Rule.required(),
            description: 'When this blog post was published'
        },
        {
            name: 'updatedAt',
            title: 'Updated At',
            type: 'datetime',
            description: 'When this blog post was last updated'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                            { title: 'Underline', value: 'underline' },
                            { title: 'Strike', value: 'strike-through' }
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'URL',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL'
                                    },
                                    {
                                        name: 'blank',
                                        type: 'boolean',
                                        title: 'Open in new tab',
                                        initialValue: true
                                    }
                                ]
                            }
                        ]
                    }
                } as BlockType,
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ] as ImageField[]
                },
                {
                    type: 'code',
                    options: {
                        withFilename: true
                    }
                } as CodeType
            ],
            validation: (Rule: any) => Rule.required(),
            description: 'The main content of the blog post'
        },
        {
            name: 'seo',
            title: 'SEO & Social',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'string',
                    title: 'Meta Title',
                    description: 'Title used for search engines and browser tabs'
                },
                {
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Meta Description',
                    description: 'Description for search engines'
                },
                {
                    name: 'ogImage',
                    type: 'image',
                    title: 'Social Image',
                    description: 'Image used for social media previews'
                }
            ] as SeoField[]
        }
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage'
        },
        prepare(selection: PreviewSelection) {
            const { title, author, media } = selection;
            return {
                title,
                subtitle: author && `by ${author}`,
                media
            };
        }
    },
    orderings: [
        {
            title: 'Publication Date, New',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }]
        },
        {
            title: 'Publication Date, Old',
            name: 'publishedAtAsc',
            by: [{ field: 'publishedAt', direction: 'asc' }]
        }
    ] as Ordering[]
};