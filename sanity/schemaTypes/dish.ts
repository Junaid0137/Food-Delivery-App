import { defineType } from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of dish',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of dish'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of the dish',
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'description of the dish',
        },
    ],
})
