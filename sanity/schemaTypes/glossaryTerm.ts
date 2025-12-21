import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'glossaryTerm',
  title: 'Glossary Term',
  type: 'document',
  fields: [
    defineField({
      name: 'term',
      title: 'Term',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedTerms',
      title: 'Related Terms',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'glossaryTerm'}]}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order of terms in lists',
    }),
  ],
  preview: {
    select: {
      title: 'term',
      subtitle: 'definition',
    },
  },
})
