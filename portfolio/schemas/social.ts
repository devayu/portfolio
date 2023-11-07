import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    defineField({
      name: 'socialTitle',
      title: 'socialTitle',
      type: 'string',
    }),
    defineField({
      name: 'socialUrl',
      title: 'socialUrl',
      type: 'string',
    }),
  ],
})
