interface CategoryField {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: any) => any;
    options?: any;
    description?: string;
}

interface CategorySchema {
    name: string;
    title: string;
    type: string;
    fields: CategoryField[];
}

const categorySchema: CategorySchema = {
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Color used to visually distinguish the category',
            options: {
                list: [
                    { title: 'Blue', value: 'blue' },
                    { title: 'Green', value: 'green' },
                    { title: 'Red', value: 'red' },
                    { title: 'Orange', value: 'orange' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Pink', value: 'pink' },
                    { title: 'Teal', value: 'teal' },
                    { title: 'Yellow', value: 'yellow' },
                    { title: 'Gray', value: 'gray' }
                ]
            }
        }
    ]
};

export default categorySchema;