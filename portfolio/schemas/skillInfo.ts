import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skillInfo',
  title: 'SkillInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'skillSubtitle',
      title: 'SkillSubtitle',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
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
