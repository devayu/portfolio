import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
    }),
    defineField({
      name: 'projectImg',
      title: 'ProjectImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'desc',
      title: 'desc',
      type: 'string',
    }),
    defineField({
      name: 'codeLink',
      title: 'codeLink',
      type: 'string',
    }),
    defineField({
      name: 'demoLink',
      title: 'demoLink',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'techStack',
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
