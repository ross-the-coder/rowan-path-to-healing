import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'preventionProgram',
  title: 'Prevention Education Program',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Grades 3-5", "Parents/guardians", "School staff"',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "45-50 minutes", "60-75 minutes"',
    }),
    defineField({
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
          {title: 'Elementary School', value: 'elementary'},
          {title: 'Middle School', value: 'middle'},
          {title: 'High School', value: 'high'},
          {title: 'Adult/Community', value: 'adult'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
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
      title: 'title',
      subtitle: 'targetAudience',
    },
  },
})
