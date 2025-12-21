import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kidSafeGrade',
  title: 'KidSafe Grade Content',
  type: 'document',
  fields: [
    defineField({
      name: 'grade',
      title: 'Grade Level',
      type: 'string',
      options: {
        list: [
          {title: 'Kindergarten', value: 'K'},
          {title: '1st Grade', value: '1'},
          {title: '2nd Grade', value: '2'},
          {title: '3rd Grade', value: '3'},
          {title: '4th Grade', value: '4'},
          {title: '5th Grade', value: '5'},
          {title: '6th Grade', value: '6'},
          {title: '7th Grade', value: '7'},
          {title: '8th Grade', value: '8'},
          {title: '9th Grade', value: '9'},
          {title: '10th Grade', value: '10'},
          {title: '11th Grade', value: '11'},
          {title: '12th Grade', value: '12'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gradeLevel',
      title: 'Grade Level Display Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Kindergarten", "1st Grade", "2nd Grade"',
    }),
    defineField({
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
          {title: 'Elementary (K-5)', value: 'elementary'},
          {title: 'Middle School (6-8)', value: 'middle'},
          {title: 'High School (9-12)', value: 'high'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightMessage',
      title: 'Highlight Message',
      type: 'text',
      description: 'Optional highlighted message to display at the top',
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'kidSafeTopic'}]}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'resourceLink'}]}],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order grades appear',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'gradeLevel',
      subtitle: 'ageGroup',
    },
  },
})
