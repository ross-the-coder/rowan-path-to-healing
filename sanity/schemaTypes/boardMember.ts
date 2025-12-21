import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'boardMember',
  title: 'Board Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Board Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Board Chair", "Vice Chair", "Board Member"',
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tenure',
      title: 'Tenure',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Board member since 2018"',
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order board members appear on the page',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
})
