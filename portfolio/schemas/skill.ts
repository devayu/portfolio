import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'skill',
  type: 'document',
  fields: [
    defineField({
      name: 'skillTitle',
      title: 'SkillTitle',
      type: 'string',
    }),
    defineField({
      name: 'skillImage',
      title: 'SkillImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
