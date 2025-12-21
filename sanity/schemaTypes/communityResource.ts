import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'communityResource',
  title: 'Community Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Community', value: 'Community'},
          {title: 'School', value: 'School'},
          {title: 'Partnership', value: 'Partnership'},
          {title: 'Online', value: 'Online'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resourceTypes',
      title: 'Service Types',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'catchmentArea',
      title: 'Location/Coverage',
      type: 'string',
      options: {
        list: [
          {title: 'Local', value: 'Local'},
          {title: 'State', value: 'State'},
          {title: 'National', value: 'National'},
          {title: 'International', value: 'International'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
