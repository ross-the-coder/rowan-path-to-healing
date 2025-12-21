import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kidSafeTopic',
  title: 'KidSafe Topic',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Topic ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Unique identifier for this topic (e.g., "permission", "boundaries")',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emoji',
      title: 'Emoji/Icon',
      type: 'string',
      description: 'Icon name from lucide-react (e.g., "HandHeart", "Shield", "Smile")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color Class',
      type: 'string',
      description: 'Tailwind color class (e.g., "bg-blue-100 text-blue-700")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'conversationStarters',
      title: 'Conversation Starters',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'scenario',
              title: 'Scenario',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'dialogues',
              title: 'Dialogues',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'speaker',
                      title: 'Speaker',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'text',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Activity Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon name from lucide-react',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'parentTips',
      title: 'Parent Tips',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
    },
  },
})
