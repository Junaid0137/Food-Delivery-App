import { defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured Menu Cateogries',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Featured Category name',
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description'
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{ type: 'reference', to: [{ type: 'restaurant' }] }]
        },
    ],
})
