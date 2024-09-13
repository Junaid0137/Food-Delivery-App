import { defineType } from 'sanity'

export default defineType({
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant name',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of restaurant'
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of Restaurant',
        },
        {
            name: 'long',
            type: 'number',
            title: 'Logigtude of Restaurant',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Restaurant address',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter a raing from (1-5 stars)',
        },
        {
            name: 'type',
            title: 'Category',
            validation: (Rule) => Rule.required(),
            type: 'reference',
            to: [{ type: 'category' }],
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [{ type: "reference", to: [{ type: 'dish' }] }]
        },
    ],

})
