import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Article URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'e.g., Hartford Courant, NBC Connecticut',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g., CSAM, Child Abuse, Digital Safety, Law Enforcement',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'News', value: 'News'},
          {title: 'Article', value: 'Article'},
          {title: 'Opinion', value: 'Opinion'},
          {title: 'Video', value: 'Video'},
        ],
      },
      initialValue: 'News',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isConnecticut',
      title: 'Connecticut News',
      type: 'boolean',
      description: 'Is this a Connecticut-specific news story?',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this article prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'source',
      date: 'date',
    },
    prepare(selection) {
      const {title, subtitle, date} = selection
      return {
        title,
        subtitle: `${subtitle} - ${date}`,
      }
    },
  },
})
