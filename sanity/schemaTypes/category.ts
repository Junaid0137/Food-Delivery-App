import { defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Category'
    }
  ],
})
