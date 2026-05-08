import { defineType, defineField, defineArrayMember } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title (English)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEs',
      type: 'string',
      title: 'Title (Spanish)',
      description: 'Leave blank to fall back to the English title.',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags (English)',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'tagsEs',
      type: 'array',
      title: 'Tags (Spanish)',
      description: 'Leave blank to fall back to the English tags.',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'projectUrl',
      type: 'url',
      title: 'Project URL',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'tags',
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: Array.isArray(subtitle) ? subtitle.join(', ') : subtitle,
      }
    },
  },
})
