import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'projectList',
      title: 'ProjectList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'project'},
        },
      ],
    }),
  ],
})
