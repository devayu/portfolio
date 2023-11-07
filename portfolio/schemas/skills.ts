import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'skillsList',
      title: 'SkillsList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'skill'},
        },
      ],
    }),
  ],
})
